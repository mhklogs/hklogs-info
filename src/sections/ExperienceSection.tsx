import { HeartHandshake, Award } from 'lucide-react';
import { volunteerHistory } from '../data/hassaanData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-white/10 relative bg-[#0D0D0D] text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Monolithic 3-Column Editorial Grid (Divided by Hairline Borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-t border-b border-white/10">
          
          {/* COLUMN 1: Academics & Skills (lg:col-span-4) */}
          <div className="lg:col-span-4 p-0 lg:pr-8 py-8 space-y-10">
            
            {/* ACADEMICS */}
            <div className="space-y-6">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="w-1.5 h-1.5 bg-[#E50914]" />
                <span>ACADEMICS &amp; EDUCATION</span>
              </div>

              <div className="space-y-6 font-sans">
                <div className="space-y-1.5 group cursor-pointer">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">2022 - Present</span>
                  <h4 className="font-heading font-bold text-white text-lg leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                    BS Software Engineering (Final Year)
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-mono">
                    UIIT PMAS-Arid Agriculture University, Pakistan
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-white/10 group cursor-pointer">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Prior to 2022</span>
                  <h4 className="font-heading font-bold text-white text-lg leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                    Matric &amp; Intermediate (CS Track)
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-mono">
                    Army Public School and College, Jhelum Cantt
                  </p>
                </div>
              </div>
            </div>

            {/* SKILLS & COMPETENCIES */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E50914]" />
                <span>SKILLS &amp; COMPETENCIES</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Quality Assurance", "Manual & Automated Testing", "Boundary Value Analysis", 
                  "Predictive Log Auditing", "Python", "Java", "C++", "SQL", "TypeScript", 
                  "Google AI Studio", "Vertex AI API", "LangGraph", "LangChain", 
                  "Gemini Pro / Flash", "TensorFlow", "OpenCV", "Git & GitHub", "Vercel", "Supabase"
                ].map((skill, idx) => (
                  <span 
                    key={idx}
                    className="border border-white/15 bg-white/[0.02] text-neutral-300 px-3 py-1 text-xs font-mono hover:border-[#E50914] hover:text-white transition-all cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 2: Work Track & Timeline (lg:col-span-5) */}
          <div className="lg:col-span-5 p-0 lg:px-8 py-8 space-y-8">
            <div className="text-white font-heading font-bold text-2xl uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E50914]" />
              <span>WORK TRACK &amp; TIMELINE</span>
            </div>

            {/* Clean Vertical Timeline */}
            <div className="relative border-l border-white/15 ml-4 pl-8 space-y-10 font-sans">
              
              {/* Step 01 */}
              <div className="relative group text-left space-y-2">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#0D0D0D] border-2 border-[#E50914] text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center font-mono text-xs font-bold transition-colors">
                  01
                </div>
                <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest font-bold block">
                  June 2026 - Present
                </span>
                <h4 className="font-heading font-bold text-white text-xl leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                  AI Engineer @ Tritanium Global
                </h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed font-light font-sans">
                  Developing autonomous agentic AI systems, automated database workflow pipelines, and integrating deep learning and LLM solutions for client platforms.
                </p>
              </div>

              {/* Step 02 */}
              <div className="relative group text-left space-y-2">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#0D0D0D] border-2 border-neutral-700 text-neutral-400 group-hover:border-[#E50914] group-hover:text-[#E50914] flex items-center justify-center font-mono text-xs font-bold transition-colors">
                  02
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold block">
                  Sept 2024 - Feb 2025
                </span>
                <h4 className="font-heading font-bold text-white text-xl leading-snug uppercase group-hover:text-[#E50914] transition-colors">
                  Team Lead &amp; Ops Manager @ Cloudwave Innovations
                </h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed font-light font-sans">
                  Supervised inward operations workflows, managed recruiting and hiring channels, coordinated cross-functional project delivery, and established operational SQA frameworks.
                </p>
              </div>

            </div>
          </div>

          {/* COLUMN 3: Volunteer Leadership & Red Quote Box (lg:col-span-3) */}
          <div className="lg:col-span-3 p-0 lg:pl-8 py-8 space-y-8 flex flex-col justify-between">
            
            {/* VOLUNTEER & COMMUNITY LEADERSHIP */}
            <div className="space-y-6">
              <div className="text-[#E50914] font-mono text-xs uppercase font-bold tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#E50914]" />
                <span>VOLUNTEER &amp; LEADERSHIP</span>
              </div>

              <div className="space-y-4 font-sans">
                {volunteerHistory.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-1 text-left pb-3 border-b border-white/10 last:border-0">
                    <div className="flex justify-between items-center text-[9px] font-mono">
                      <span className="text-[#E50914] font-bold">LEADERSHIP #0{idx + 1}</span>
                      <Award className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#E50914] transition-colors" />
                    </div>
                    <h5 className="font-heading font-bold text-white text-sm uppercase leading-snug group-hover:text-[#E50914] transition-colors">
                      {item.role}
                    </h5>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      {item.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Red Deep Gradient Quote Callout Card */}
            <div className="bg-gradient-to-br from-[#800000] to-[#200000] p-6 border border-[#800000]/60 space-y-4 text-left relative overflow-hidden mt-6">
              <span className="text-5xl font-serif text-[#E50914] block leading-none select-none">“</span>
              <p className="text-white text-xs md:text-sm font-light leading-relaxed font-sans">
                Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition.
              </p>

              <div className="pt-4 border-t border-white/15">
                <div className="font-script text-white text-2xl font-normal select-none">
                  Hassaan Abdullah
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
