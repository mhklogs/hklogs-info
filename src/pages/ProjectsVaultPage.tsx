import { useState } from 'react';
import { Search, FolderGit, Github, ExternalLink, ArrowLeft, List, LayoutGrid } from 'lucide-react';
import { staticProjects, type LocalProject } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ProjectsVaultPageProps {
  onBack: () => void;
}

export default function ProjectsVaultPage({ onBack }: ProjectsVaultPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [selectedProject, setSelectedProject] = useState<LocalProject | null>(null);

  const filteredProjects = staticProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'AI & LLMs') {
      return (
        matchesSearch && (
          project.tech.some(t => ['gemini', 'langgraph', 'langchain', 'tensorflow', 'python'].includes(t.toLowerCase())) ||
          project.name.toLowerCase().includes('ai') ||
          project.name.toLowerCase().includes('agent')
        )
      );
    }
    if (selectedCategory === 'Web Apps') {
      return matchesSearch && project.tech.some(t => ['react', 'next.js', 'vite', 'html5', 'pwa'].includes(t.toLowerCase()));
    }
    if (selectedCategory === 'Mobile Apps') {
      return matchesSearch && project.tech.some(t => ['kotlin', 'android', 'react native'].includes(t.toLowerCase()));
    }
    if (selectedCategory === 'Systems') {
      return matchesSearch && project.tech.some(t => ['c++', 'c#', 'express', 'node.js', 'sql', 'postgresql'].includes(t.toLowerCase()));
    }

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-neutral-300 py-10 px-4 sm:px-6 md:px-12 text-left animate-fade-in select-none">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Top Header & Prominent Top Corner Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <button 
            onClick={onBack}
            className="px-4 py-2.5 bg-[#E50914] hover:bg-[#b01e1e] text-white text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2.5 transition-all hover:-translate-x-1 shadow-[0_0_20px_rgba(229,9,20,0.3)] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span>← BACK TO MAIN PAGE</span>
          </button>
          
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span>SYSTEM VAULT: {staticProjects.length} CODEBASES INSTANTIATED</span>
          </div>
        </div>

        {/* Page Title & Overview */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#E50914] uppercase tracking-widest font-bold block">
            STANDALONE ARCHITECTURE CATALOGUE (/projects/)
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
            ENGINEERED <span className="text-[#E50914]">ARCHITECTURES</span> &amp; PROJECTS LIST
          </h1>
          <p className="text-xs sm:text-sm text-[#8E8E93] font-sans max-w-3xl leading-relaxed">
            Browse through all {staticProjects.length} verified software repositories, web applications, PWA tools, and AI agent frameworks built by Hassaan Abdullah Kiyani.
          </p>
        </div>

        {/* Search, Category Filter & View Mode Switcher */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full pt-2">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by codebase name, tech stack, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-neutral-800 focus:border-[#E50914]/60 rounded-none pl-11 pr-4 py-3 text-xs text-white outline-none transition-all placeholder:text-neutral-500 font-mono"
            />
          </div>

          {/* Category Badges */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 shrink-0 no-scrollbar">
            {['All', 'AI & LLMs', 'Web Apps', 'Mobile Apps', 'Systems'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2.5 rounded-none border text-xs font-mono font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#E50914] border-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                    : 'bg-[#121212] border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Scrollable Bullets/List vs Grid */}
          <div className="flex items-center gap-1 bg-[#121212] border border-neutral-800 p-1 shrink-0 self-end md:self-auto">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#E50914] text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="List & Bullet View"
            >
              <List className="w-3.5 h-3.5" />
              <span>List / Bullets</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#E50914] text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Grid Cards View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Dynamic Project Display */}
        {viewMode === 'list' ? (
          /* SCROLLABLE BULLETS / LIST VIEW */
          <div className="space-y-3 pt-4 pb-20">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="p-5 bg-[#121212] hover:bg-neutral-900 border border-neutral-800 hover:border-[#E50914]/50 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5 flex-1">
                  {/* Bullet Indicator */}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                  
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
                      <span className="text-[#E50914] font-bold">CODEBASE #{idx + 1}</span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-400 uppercase font-bold">{project.tech[0] || 'SOFTWARE'}</span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#E50914] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs text-[#8E8E93] font-sans leading-relaxed line-clamp-2 max-w-4xl">
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#181818] font-mono text-[9px] text-neutral-300 border border-neutral-800 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 shrink-0 border-t md:border-t-0 border-neutral-800 pt-3 md:pt-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.vercelUrl && (
                    <a
                      href={project.vercelUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-2 bg-[#E50914] hover:bg-[#b01e1e] text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(229,9,20,0.3)] cursor-pointer"
                      title="View Live Web Console"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE CONSOLE</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* GRID CARDS VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-20">
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

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#E50914] font-bold">CODEBASE #{idx + 1}</span>
                      <span className="text-neutral-500 font-bold uppercase">{project.tech[0] || 'SOFTWARE'}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl uppercase tracking-wide group-hover:text-[#E50914] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-[#8E8E93] leading-relaxed font-sans line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-neutral-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#181818] rounded-none font-mono text-[9px] text-neutral-300 border border-neutral-800 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
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
        )}

      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-[#0D0D0D] border border-neutral-800 text-neutral-300 max-w-2xl rounded-none p-6 sm:p-8 shadow-2xl text-left">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="border-b border-neutral-800 pb-4 text-left">
                <span className="text-[9px] font-mono text-[#E50914] uppercase tracking-widest font-bold block">
                  ARCHITECTURE SPECIFICATIONS
                </span>
                <DialogTitle className="font-heading font-bold text-2xl text-white uppercase tracking-tight mt-1">
                  {selectedProject.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 text-xs leading-relaxed">
                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#E50914] font-bold tracking-widest mb-1">
                    System Overview
                  </h4>
                  <p className="text-neutral-300 font-sans">{selectedProject.desc}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#E50914] font-bold tracking-widest mb-1">
                    Core Use-case
                  </h4>
                  <p className="text-neutral-400 font-sans">{selectedProject.usecase}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#E50914] font-bold tracking-widest mb-1">
                    Execution Mechanism
                  </h4>
                  <p className="text-neutral-400 font-sans">{selectedProject.working}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800">
                <a 
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#121212] border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4 text-neutral-400" />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.vercelUrl && (
                  <a 
                    href={selectedProject.vercelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-[#E50914] hover:bg-[#b01e1e] text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] cursor-pointer"
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
    </div>
  );
}
