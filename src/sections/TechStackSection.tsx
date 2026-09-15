import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Cpu, 
  GraduationCap, 
  Link as LinkIcon,
  ExternalLink
} from 'lucide-react';
import { personalInfo, linkedinSkillsList, detailedCourses } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const toolUrls: Record<string, string> = {
  "agy cli": "https://antigravity.google/",
  "opencode": "https://opencode.ai/",
  "claude code": "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
  "claude ai": "https://claude.ai/",
  "kimi": "https://kimi.moonshot.cn/",
  "google ai studio": "https://aistudio.google.com/",
  "vertex api": "https://cloud.google.com/vertex-ai",
  "vertex ai api": "https://cloud.google.com/vertex-ai",
  "langgraph": "https://www.langchain.com/langgraph",
  "langchain": "https://www.langchain.com/",
  "github": "https://github.com/",
  "git & github": "https://github.com/",
  "vercel build": "https://vercel.com/",
  "vercel": "https://vercel.com/",
  "supabase": "https://supabase.com/",
  "python": "https://www.python.org/",
  "java": "https://www.java.com/",
  "c++ core": "https://isocpp.org/",
  "sql / databases": "https://en.wikipedia.org/wiki/SQL",
  "typescript": "https://www.typescriptlang.org/",
  "kotlin": "https://kotlinlang.org/",
  "html / css": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "tensorflow": "https://www.tensorflow.org/",
  "opencv": "https://opencv.org/",
  "gemini pro / flash": "https://deepmind.google/technologies/gemini/",
  "software quality assurance": "https://en.wikipedia.org/wiki/Software_quality_assurance",
  "manual & automated testing": "https://en.wikipedia.org/wiki/Software_testing",
  "boundary value analysis": "https://en.wikipedia.org/wiki/Boundary-value_analysis",
  "heuristic validation": "https://en.wikipedia.org/wiki/Heuristic_evaluation",
  "predictive log auditing": "https://en.wikipedia.org/wiki/Log_management"
};

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const title = titleRef.current;
    if (!section || !left || !right || !title) return;

    const ctx = gsap.context(() => {
      // Entrance scroll triggers
      gsap.fromTo(title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(left,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(right,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 overflow-hidden border-t border-white/10 bg-[#0D0D0D] select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div ref={titleRef} className="text-left mb-16 border-b border-white/10 pb-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            SKILLS &amp; <span className="text-[#E50914]">COMPETENCIES</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light font-sans mt-2">
            Technical credentials and course specifications indexed from LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-t border-b border-white/10">
          
          {/* Left Column: Professional Skills from LinkedIn */}
          <div ref={leftRef} className="lg:col-span-7 p-0 lg:pr-8 py-8 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#E50914]" />
                Professional Skills
              </h3>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E50914] hover:underline font-mono"
              >
                <span>LinkedIn Profile</span>
                <LinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {linkedinSkillsList.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="space-y-3 text-left"
                >
                  <h4 className="font-mono text-xs font-bold text-[#E50914] border-b border-white/10 pb-2 uppercase tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2 pt-1">
                    {skillGroup.items.map((skill, i) => {
                      const url = toolUrls[skill.toLowerCase()];
                      return (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-300 font-light font-sans">
                          <span className="w-1.5 h-1.5 bg-[#E50914] shrink-0" />
                          {url ? (
                            <a 
                              href={url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="hover:text-[#E50914] transition-colors inline-flex items-center gap-1.5 group/skill"
                            >
                              <span>{skill}</span>
                              <ExternalLink className="w-3 h-3 text-[#E50914] opacity-70 group-hover/skill:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <span>{skill}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Coursework & Workspace Tools */}
          <div ref={rightRef} className="lg:col-span-5 p-0 lg:pl-8 py-8 space-y-8">
            
            {/* Core Coursework List */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider border-b border-white/10 pb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#E50914]" />
                Core Coursework
              </h3>
              <div className="space-y-2">
                <ul className="grid grid-cols-1 gap-2">
                  {personalInfo.courses.map((course, idx) => (
                    <li 
                      key={idx} 
                      className="p-3 bg-white/[0.02] border border-white/10 text-xs text-neutral-300 font-mono flex items-center justify-between group hover:border-[#E50914] transition-all cursor-pointer"
                    >
                      <span>{`> ${course}`}</span>
                      <span className="text-[9px] text-[#E50914] uppercase font-bold tracking-wider">Verified</span>
                    </li>
                  ))}
                </ul>

                {/* Explore All Courses Trigger Button */}
                <button
                  onClick={() => setIsCoursesModalOpen(true)}
                  className="w-full mt-4 py-3 bg-[#E50914]/10 border border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>EXPLORE ALL COURSES ({detailedCourses.length}) →</span>
                </button>
              </div>
            </div>

            {/* Workspace Tools */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider border-b border-white/10 pb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#E50914]" />
                Workspace Tools
              </h3>
              <div className="space-y-3 font-mono text-xs leading-relaxed text-[#A1A1AA]">
                <p>
                  I coordinate active development workflows utilizing modern developer environments, coding assistants, and local CLI tools:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "agy cli", "opencode", "claude code", "claude AI",
                    "kimi", "google ai studio", "vertex api", "langgraph", "github"
                  ].map((tool, idx) => {
                    const url = toolUrls[tool.toLowerCase()] || `https://www.google.com/search?q=${encodeURIComponent(tool)}`;
                    return (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/10 hover:border-[#E50914] text-neutral-300 hover:text-white font-mono text-[10px] uppercase transition-all cursor-pointer group/link shadow-sm"
                        title={`Visit official ${tool} platform`}
                      >
                        <span>{tool}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#E50914] opacity-70 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Courses Popup Modal */}
      <Dialog open={isCoursesModalOpen} onOpenChange={setIsCoursesModalOpen}>
        <DialogContent className="bg-[#0D0D0D] border border-neutral-800 text-white max-w-4xl rounded-none p-6 sm:p-8 overflow-y-auto max-h-[85vh] shadow-[0_0_50px_rgba(0,0,0,0.9)] text-left">
          <DialogHeader className="border-b border-neutral-800 pb-4 relative">
            <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest font-bold block">
              FULL ACADEMIC TRANSCRIPT &amp; CURRICULUM
            </span>
            <DialogTitle className="font-heading text-3xl font-bold text-white uppercase tracking-tight mt-1">
              ALL REGISTERED SE COURSES
            </DialogTitle>
            <DialogDescription className="text-xs text-neutral-400 font-sans mt-1">
              Completed coursework at UIIT PMAS-Arid Agriculture University, Pakistan.
            </DialogDescription>
          </DialogHeader>

          {/* All Courses Scrollable Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 overflow-y-auto max-h-[60vh] pr-1">
            {detailedCourses.map((course, idx) => (
              <div 
                key={idx}
                className="bg-[#121212] border border-neutral-800 p-4 rounded-none space-y-3 flex flex-col justify-between hover:border-[#E50914]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-[#E50914] font-bold">{course.code}</span>
                    <span className="text-neutral-500 font-bold uppercase">{course.category}</span>
                  </div>
                  <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wide leading-snug">
                    {course.name}
                  </h4>
                </div>

                <div className="pt-2 border-t border-neutral-800 text-[9px] font-mono text-neutral-400">
                  {course.university}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
