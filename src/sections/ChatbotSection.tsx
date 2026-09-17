import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, X } from 'lucide-react';
import { SYSTEM_INSTRUCTION } from '../data/hassaanData';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatbotSectionProps {
  geminiKey?: string;
  setGeminiKey?: (key: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const PERMANENT_GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// Helper component to cleanly format Markdown: bold, italic, code, links, lists, and headings — no raw ** / []( / backticks shown
function FormattedMessageText({ text }: { text: string }) {
  // Recursive inline parser: renders **bold**, *italic*, `code`, [title](url), and raw URLs
  const renderInline = (raw: string, keyBase: string): React.ReactNode[] => {
    const nodes: React.ReactNode[] = [];
    let i = 0;
    let key = 0;
    let plainStart = 0;

    const flushPlain = (end: number) => {
      if (end > plainStart) {
        nodes.push(<span key={`${keyBase}-p-${key++}`}>{raw.substring(plainStart, end)}</span>);
      }
    };

    while (i < raw.length) {
      const rest = raw.slice(i);

      // **bold** (supports nested links/italic/code inside)
      if (rest.startsWith('**')) {
        const close = rest.indexOf('**', 2);
        if (close !== -1) {
          flushPlain(i);
          nodes.push(
            <strong key={`${keyBase}-b-${key++}`} className="font-bold text-white">
              {renderInline(rest.slice(2, close), `${keyBase}-b`)}
            </strong>
          );
          i += close + 2;
          plainStart = i;
          continue;
        }
      }

      // `inline code`
      if (rest.startsWith('`')) {
        const close = rest.indexOf('`', 1);
        if (close !== -1) {
          flushPlain(i);
          nodes.push(
            <code key={`${keyBase}-c-${key++}`} className="px-1 py-0.5 bg-neutral-800 border border-neutral-700 text-[10px] text-[#FF8A90] font-mono rounded-sm">
              {rest.slice(1, close)}
            </code>
          );
          i += close + 1;
          plainStart = i;
          continue;
        }
      }

      // [title](url)
      if (rest.startsWith('[')) {
        const openClose = rest.indexOf('](');
        if (openClose !== -1) {
          const urlEnd = rest.indexOf(')', openClose + 2);
          if (urlEnd !== -1) {
            const title = rest.slice(1, openClose);
            const url = rest.slice(openClose + 2, urlEnd);
            flushPlain(i);
            nodes.push(
              <a
                key={`${keyBase}-l-${key++}`}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-[#E50914] underline font-semibold hover:text-white transition-colors break-all"
              >
                {renderInline(title, `${keyBase}-l`)}
              </a>
            );
            i += urlEnd + 1;
            plainStart = i;
            continue;
          }
        }
      }

      // *italic*
      if (rest.startsWith('*')) {
        const close = rest.indexOf('*', 1);
        if (close !== -1) {
          flushPlain(i);
          nodes.push(
            <em key={`${keyBase}-i-${key++}`} className="italic text-neutral-100">
              {renderInline(rest.slice(1, close), `${keyBase}-i`)}
            </em>
          );
          i += close + 1;
          plainStart = i;
          continue;
        }
      }

      // raw http(s):// URL
      const urlMatch = /^https?:\/\/[^\s<]+/.exec(rest);
      if (urlMatch) {
        const url = urlMatch[0];
        flushPlain(i);
        nodes.push(
          <a
            key={`${keyBase}-u-${key++}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-[#E50914] underline font-semibold hover:text-white transition-colors break-all"
          >
            {url}
          </a>
        );
        i += url.length;
        plainStart = i;
        continue;
      }

      i += 1;
    }

    flushPlain(raw.length);
    return nodes;
  };

  const lines = text.split('\n');
  const blocks: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  const flushCodeBlock = (key: number) => {
    if (codeBuffer.length > 0) {
      blocks.push(
        <pre key={`code-${key}`} className="bg-black/60 border border-neutral-800 p-3 overflow-x-auto text-[10px] font-mono text-[#9FD6FF] leading-relaxed whitespace-pre-wrap break-words">
          {codeBuffer.join('\n')}
        </pre>
      );
      codeBuffer = [];
    }
  };

  lines.forEach((line, lIdx) => {
    const trimmed = line.trim();

    // Toggle fenced code blocks ``` ```
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        inCodeBlock = false;
        flushCodeBlock(lIdx);
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    if (!trimmed) {
      blocks.push(<div key={`sp-${lIdx}`} className="h-1" />);
      return;
    }

    // Horizontal rule --- / *** / ___
    if (/^([-*_])\1{2,}$/.test(trimmed)) {
      blocks.push(<div key={`hr-${lIdx}`} className="my-2 h-px bg-neutral-700" />);
      return;
    }

    // Headings # / ## / ###
    const headingMatch = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push(
        <p
          key={`h-${lIdx}`}
          className={`font-bold text-white uppercase tracking-wide ${level <= 2 ? 'text-sm' : 'text-xs'}`}
        >
          {renderInline(headingMatch[2], `h${lIdx}`)}
        </p>
      );
      return;
    }

    // Blockquote > text
    const quoteMatch = /^>\s?(.*)$/.exec(trimmed);
    if (quoteMatch) {
      blocks.push(
        <p key={`q-${lIdx}`} className="pl-3 border-l-2 border-[#E50914]/60 italic text-neutral-300">
          {renderInline(quoteMatch[1], `q${lIdx}`)}
        </p>
      );
      return;
    }

    // Bullet list - / * / •
    const bulletMatch = /^([-*•])\s+(.*)$/.exec(trimmed);
    if (bulletMatch) {
      blocks.push(
        <p key={`li-${lIdx}`} className="pl-4 relative">
          <span className="absolute left-0 top-[7px] w-1.5 h-1.5 bg-[#E50914] rounded-full" />
          {renderInline(bulletMatch[2], `li${lIdx}`)}
        </p>
      );
      return;
    }

    // Numbered list 1. / 1)
    const numMatch = /^(\d+)[.)]\s+(.*)$/.exec(trimmed);
    if (numMatch) {
      blocks.push(
        <p key={`nl-${lIdx}`} className="pl-5 relative">
          <span className="absolute left-0 top-0 font-mono text-[10px] text-[#E50914] font-bold">
            {numMatch[1]}.
          </span>
          {renderInline(numMatch[2], `nl${lIdx}`)}
        </p>
      );
      return;
    }

    // Regular paragraph
    blocks.push(
      <p key={`p-${lIdx}`}>
        {renderInline(line, `p${lIdx}`)}
      </p>
    );
  });

  if (inCodeBlock) flushCodeBlock(lines.length);

  return <div className="space-y-1 text-xs leading-relaxed font-light text-neutral-200">{blocks}</div>;
}

export default function ChatbotSection({ geminiKey, isOpen, onClose }: ChatbotSectionProps) {
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [botAvatarStyle, setBotAvatarStyle] = useState<'bot' | 'human'>('bot');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Hey there! 👋 Great to have you here. I'm Hassaan's assistant — I can walk you through his work in Software Engineering, SQA, and AI, or get you straight to the best way to reach him. What are you curious about?"
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const activeKey = geminiKey || PERMANENT_GEMINI_KEY;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  // Escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    if (!activeKey) {
      setIsTyping(false);
      setChatMessages(prev => [...prev, {
        sender: 'bot',
        text: "Chat is currently offline (assistant not configured). Please email hassaan directly — I'll respond as soon as possible."
      }]);
      return;
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${activeKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userMsg}` }]
            }
          ],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 600
          }
        })
      });

      if (!response.ok) {
        const err = new Error(`Gemini API return error status: ${response.status}`);
        (err as Error & { status?: number }).status = response.status;
        throw err;
      }

      const data = await response.json();
      const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (candidateText) {
        setChatMessages(prev => [...prev, { sender: 'bot', text: candidateText }]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Gemini call fail:', error);
      const textLower = userMsg.toLowerCase();
      const status = (error as Error & { status?: number }).status;

      // Quota / rate-limit reached — keep the visitor converting instead of seeing a dead end
      if (status === 429) {
        setChatMessages(prev => [...prev, {
          sender: 'bot',
          text: "I'm temporarily at message capacity, but Hassaan is very much available! 😊 Feel free to reach him directly — he usually replies fast:\n\n- [Fiverr Profile](https://www.fiverr.com/hassaankayani1)\n- [Upwork Profile](https://www.upwork.com/freelancers/~016d3a3d2b6da309a6)\n- [LinkedIn](https://www.linkedin.com/in/hassaan-abdullah-kiyani/)\n- [Email](mailto:hassaanabdullahkayani@gmail.com)"
        }]);
        return;
      }

      let reply = "I couldn't reach the AI engine just now, but I'm still here to help! Feel free to rephrase your question and try again.";
      
      if (textLower.includes('fiverr') || textLower.includes('hire') || textLower.includes('work')) {
        reply = "Hassaan would love to hear from you! You can reach him directly on Fiverr here: https://www.fiverr.com/hassaankayani1";
      } else if (textLower.includes('upwork')) {
        reply = "Happy to connect you! Hassaan is on Upwork at: https://www.upwork.com/freelancers/~016d3a3d2b6da309a6";
      } else if (textLower.includes('email') || textLower.includes('contact')) {
        reply = "You can email Hassaan directly at hassaanabdullahkayani@gmail.com — he usually replies quickly!";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[190] animate-fade-in"
        onClick={onClose}
      />

      {/* Floating Chat Drawer Container - Red & Black Theme */}
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0D0D0D] border-l border-neutral-800 shadow-[0_0_60px_rgba(229,9,20,0.15)] z-[200] flex flex-col animate-slide-in-right text-left"
      >
        {/* Drawer Header */}
        <div className="bg-[#0A0A0A] px-6 py-4 flex items-center justify-between border-b border-neutral-800 relative">
          <div className="flex items-center gap-3">
            {/* Avatar frame with switcher */}
            <div 
              className="relative w-9 h-9 rounded-full border border-[#E50914]/40 overflow-hidden cursor-pointer bg-[#E50914]/10 flex items-center justify-center shrink-0 group shadow-[0_0_12px_rgba(229,9,20,0.2)]"
              onClick={() => setBotAvatarStyle(prev => prev === 'bot' ? 'human' : 'bot')}
              title="Click to toggle avatar (AI vs Human)"
            >
              {botAvatarStyle === 'bot' ? (
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-[#E50914]">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="35" y="40" width="30" height="15" rx="3" fill="currentColor" />
                  <circle cx="42" cy="62" r="4" fill="currentColor" />
                  <circle cx="58" cy="62" r="4" fill="currentColor" />
                  <path d="M40 78 Q50 84 60 78" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              ) : (
                <img src="/hassaan-portrait.png" alt="Hassaan Portrait" className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <RefreshCw className="w-3 h-3 text-white animate-spin" />
              </div>
            </div>

            <div>
              <span className="font-bold text-white font-heading text-sm tracking-wide block leading-none">
                {botAvatarStyle === 'bot' ? 'HASSAAN_AI_TWIN' : 'HASSAAN_KAYANI'}
              </span>
              <span className="text-[9px] text-[#E50914] font-mono tracking-widest uppercase block mt-1 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#E50914] rounded-full animate-pulse" />
                Online &amp; Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#E50914] transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Logs */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-[#000000]/90">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[88%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                {msg.sender === 'user' ? 'GUEST_USER' : botAvatarStyle === 'bot' ? 'HASSAAN_AI' : 'HASSAAN'}
              </span>
              <div
                className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#E50914] text-white rounded-tr-none text-right font-medium shadow-[0_2px_12px_rgba(229,9,20,0.3)]'
                    : 'bg-[#141414] border border-neutral-800 text-neutral-200 rounded-tl-none text-left'
                }`}
              >
                {msg.sender === 'user' ? (
                  <span>{msg.text}</span>
                ) : (
                  <FormattedMessageText text={msg.text} />
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                {botAvatarStyle === 'bot' ? 'HASSAAN_AI' : 'HASSAAN'}
              </span>
              <div className="p-3 bg-[#141414] border border-neutral-800 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 bg-[#0A0A0A] border-t border-neutral-800 flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask a question or request direct links..."
            className="flex-1 bg-[#141414] border border-neutral-800 focus:border-[#E50914] rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none transition-all"
          />
          <button
            type="submit"
            className="p-3 rounded-xl bg-[#E50914] hover:bg-[#b80710] text-white shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all cursor-pointer"
            title="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
