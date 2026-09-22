import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, FolderGit, Search, LayoutGrid } from 'lucide-react';
import { staticProjects, type LocalProject } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

interface GithubProjectsSectionProps {
  onOpenVault?: () => void;
}

export default function GithubProjectsSection({
  onOpenVault,
}: GithubProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  // Custom states for refined layout & databank search
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<LocalProject | null>(null);

  const getProjectSubtitle = (name: string) => {
    switch (name) {
      case "ReferralClose LLC":
        return "ENTERPRISE LEAD-ROUTING PORTAL";
      case "home.referralclose":
        return "HOME SERVICE MARKETPLACE";
      case "FixIt Home":
        return "HOME SERVICES MARKETPLACE";
      case "HomeFix OS":
        return "MANAGED CALL-CENTER & PAY-PER-CALL NETWORK";
      default:
        return "SOFTWARE CODEBASE / SYSTEM INTEGRATION";
    }
  };

  // Featured grid shows the first 3 projects, in the same sequence as the full archive
  const topProjects = staticProjects.slice(0, 3);

  // Remaining list or complete list filtered dynamically
  const filteredProjects = staticProjects.filter(project => {
    // 1. Search Query Filter
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    // 2. Category Filter
    if (selectedCategory === 'All') return true;
    
    if (selectedCategory === 'AI & LLMs') {
      const aiKeywords = ['gemini', 'gpt', 'ai', 'langgraph', 'langchain', 'vector', 'rag', 'embeddings', 'agent', 'compiler', 'transpiler'];
      return aiKeywords.some(kw => 
        project.name.toLowerCase().includes(kw) || 
        project.desc.toLowerCase().includes(kw) ||
        project.tech.some(t => t.toLowerCase().includes(kw))
      );
    }
    
    if (selectedCategory === 'Web Apps') {
      const webKeywords = ['react', 'next.js', 'html', 'css', 'javascript', 'typescript', 'vite', 'pwa', 'express', 'node.js', 'supabase', 'firebase', 'postgresql', 'mongodb'];
      return webKeywords.some(kw => 
        project.tech.some(t => t.toLowerCase().includes(kw)) ||
        project.name.toLowerCase().includes(kw)
      );
    }
    
    if (selectedCategory === 'Mobile Apps') {
      return project.tech.some(t => t.toLowerCase().includes('kotlin') || t.toLowerCase().includes('java') || t.toLowerCase().includes('android'));
    }
    
    if (selectedCategory === 'Systems') {
      return project.tech.some(t => t.toLowerCase().includes('c++') || t.toLowerCase().includes('python') || t.toLowerCase().includes('ast') || t.toLowerCase().includes('compiler') || t.toLowerCase().includes('transpiler') || t.toLowerCase().includes('syntax'));
    }

    return true;
  });

  // GSAP 3D Scroll Trigger effect
  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.project-3d-card');
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        // Tilt cards into perspective as they scroll into view, straighten up, then tilt back out
        gsap.fromTo(card,
          { 
            rotationX: 18, 
            rotationY: -10, 
            z: -60, 
            opacity: 0.7,
            scale: 0.95
          },
          {
            rotationX: 0,
            rotationY: 0,
            z: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=60",
              end: "bottom center+=150",
              scrub: 1.2,
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="py-20 border-t border-neutral-800 relative overflow-hidden bg-[#0D0D0D]"
      style={{ perspective: '1200px' }}
    >
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#E50914]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-neutral-800 text-left">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            ENGINEERED <span className="text-[#E50914]">ARCHITECTURES</span>
          </h2>
          
          <button 
            onClick={() => onOpenVault ? onOpenVault() : setShowAllProjects(true)}
            className="text-xs font-mono uppercase text-[#E50914] hover:text-white tracking-widest font-bold transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5 w-fit"
          >
            <span>EXPLORE ALL {staticProjects.length} ARCHITECTURES</span>
            <span>→</span>
          </button>
        </div>

        {/* Monolithic Horizontal Grid (Separated ONLY by 1px hairline dark borders) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-transparent">
          {topProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0D0D0D] hover:bg-neutral-900/60 transition-all duration-300 flex flex-col justify-between w-full text-left cursor-pointer p-6 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black font-heading text-[#FF2E37] leading-none mb-1">
                      0{idx + 1}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none font-bold pt-1">
                      {getProjectSubtitle(project.name)}
                    </span>
                  </div>
                  <span className="text-lg text-[#FF2E37] group-hover:translate-x-1 transition-transform duration-300 font-bold">
                    →
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden bg-neutral-950 border border-white/10 flex items-center justify-center">
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                      <FolderGit className="w-8 h-8 text-neutral-700 mb-2 group-hover:text-[#FF2E37] transition-colors" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-heading font-bold text-white text-2xl tracking-wide uppercase leading-tight group-hover:text-[#FF2E37] transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed font-light font-sans line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 bg-white/[0.03] font-mono text-[9px] text-neutral-300 border border-white/10 uppercase group-hover:border-[#FF2E37]/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 bg-neutral-900 border border-neutral-800 hover:border-white/40 text-neutral-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  {project.vercelUrl && (
                    <a
                      href={project.vercelUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 bg-[#FF2E37]/20 border border-[#FF2E37]/40 hover:bg-[#FF2E37] text-white transition-colors"
                      title="View Live Vercel Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* See All Projects Trigger Button */}
        <div className="mt-12 text-center flex flex-col items-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-3.5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/50 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-none transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(229,9,20,0.15)] hover:scale-105 cursor-pointer flex items-center gap-2 group"
          >
            <LayoutGrid className="w-4 h-4 text-[#E50914] group-hover:text-white transition-colors" />
            <span>{showAllProjects ? 'Collapse Project Archive' : `Explore All ${staticProjects.length} Projects`}</span>
          </button>
        </div>

        {/* Expanded Inline Archive: unlocks page scroll and reveals all remaining projects */}
        {showAllProjects && (
          <div className="mt-14 border-t border-neutral-800 pt-10 space-y-8 text-left">
            {/* Search and Filters Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search by project name, tech stack, or architecture description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-800 focus:border-[#E50914]/60 rounded-none pl-11 pr-4 py-3 text-xs text-white outline-none transition-all placeholder:text-neutral-500 font-mono"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1 shrink-0 no-scrollbar">
                {['All', 'AI & LLMs', 'Web Apps', 'Mobile Apps', 'Systems'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-none border text-xs font-mono font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-[#E50914] border-[#E50914] text-white'
                        : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* All Project Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-4">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] cursor-pointer flex flex-col justify-between group shadow-xl"
                >
                  <div className="aspect-video bg-neutral-950 border-b border-neutral-800 overflow-hidden relative">
                    {project.thumbnail ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <FolderGit className="w-8 h-8 text-neutral-700 mb-2 group-hover:text-[#E50914] transition-colors" />
                        <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">{project.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-[#E50914] font-bold">CODEBASE #{idx + 1}</span>
                        <span className="text-neutral-500 font-bold uppercase">{project.tech[0] || 'ENGINEERING'}</span>
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide group-hover:text-[#E50914] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#8E8E93] leading-relaxed font-sans line-clamp-2">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-neutral-800" onClick={(e) => e.stopPropagation()}>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="px-2 py-0.5 bg-[#181818] rounded-none font-mono text-[9px] text-neutral-300 border border-neutral-800 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-neutral-900 border border-neutral-800 hover:border-white/40 text-neutral-400 hover:text-white transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                        {project.vercelUrl && (
                          <a
                            href={project.vercelUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 bg-[#E50914] hover:bg-[#b01e1e] text-white text-[10px] font-mono font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(229,9,20,0.3)] cursor-pointer"
                            title="View Live Web Console"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>LIVE CONSOLE</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Detailed Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-[#0D0D0D] border border-neutral-800 text-slate-300 max-w-2xl rounded-none p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="text-left border-b border-neutral-800 pb-4">
                <span className="text-[9px] font-mono text-[#E50914] uppercase tracking-widest block font-bold">
                  PROJECT SPECIFICATIONS
                </span>
                <DialogTitle className="font-heading font-bold text-2xl text-white tracking-wide mt-1">
                  {selectedProject.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-neutral-400 font-light mt-2 leading-relaxed font-sans">
                  {selectedProject.desc}
                </DialogDescription>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border border-neutral-800 rounded-none flex items-center justify-center">
                {selectedProject.thumbnail ? (
                  <img 
                    src={selectedProject.thumbnail} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#0D0D0D] flex flex-col items-center justify-center p-6 text-center">
                    <FolderGit className="w-12 h-12 text-[#E50914]/40 mb-2" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#E50914]/60 font-bold">
                      {selectedProject.name}
                    </span>
                  </div>
                )}
                {/* HUD markings */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-neutral-700" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-neutral-700" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-neutral-700" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-neutral-700" />
              </div>

              {/* Project Details Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Left Side: Working */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#E50914] font-bold">
                    SYSTEM WORKING
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed font-sans">
                    {selectedProject.working}
                  </p>
                </div>

                {/* Right Side: Usecase */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#E50914] font-bold">
                    USE CASE & IMPACT
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed font-sans">
                    {selectedProject.usecase}
                  </p>
                </div>
              </div>

              {/* Tech Stack used */}
              <div className="space-y-2 text-left border-t border-neutral-800 pt-4">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                  TECHNOLOGY INDEX
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-[#121212] rounded-none font-mono text-[9px] text-neutral-300 border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-neutral-800">
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 bg-[#121212] border border-neutral-800 hover:bg-neutral-800 text-white rounded-none text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4 text-neutral-400" />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.vercelUrl && (
                  <a 
                    href={selectedProject.vercelUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-5 py-2.5 bg-[#E50914] hover:bg-[#b01e1e] text-white rounded-none text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(229,9,20,0.2)] cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Web Console</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
