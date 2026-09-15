import { useState } from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { detailedCourses } from '../data/hassaanData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function CoursesSection() {
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const initialCourses = detailedCourses.slice(0, 5);

  return (
    <section id="courses" className="py-20 border-t border-neutral-800 relative bg-[#0D0D0D] text-left select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-neutral-800">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#E50914] uppercase tracking-widest font-bold block">
              ACADEMIC SPECS &amp; SE CURRICULUM
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              CORE <span className="text-[#E50914]">COURSEWORK</span>
            </h2>
          </div>

          <button 
            onClick={() => setIsCoursesModalOpen(true)}
            className="px-5 py-3 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/40 hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:-translate-y-1 cursor-pointer w-fit"
          >
            <GraduationCap className="w-4 h-4 text-[#E50914]" />
            <span>SHOW ALL COURSES ({detailedCourses.length}) →</span>
          </button>
        </div>

        {/* First 5 Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {initialCourses.map((course, idx) => (
            <div 
              key={idx}
              className="bg-[#121212] border border-neutral-800 p-5 rounded-none space-y-3 flex flex-col justify-between hover:border-[#E50914]/40 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 group shadow-lg cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[#E50914] font-bold">{course.code}</span>
                  <span className="text-neutral-500 font-bold uppercase">{course.category}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-base tracking-wide uppercase leading-snug group-hover:text-[#E50914] transition-colors">
                  {course.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 text-[10px] font-mono text-neutral-400 flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 text-[#E50914] shrink-0" />
                <span className="truncate">{course.university}</span>
              </div>
            </div>
          ))}
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
