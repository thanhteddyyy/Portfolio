/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  User, 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  Github, 
  Mail, 
  ExternalLink,
  Cpu
} from 'lucide-react';

type Section = 'info' | 'school' | 'experience';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('info');
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Welcome to my digital terminal...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'info', label: 'INFO', icon: User },
    { id: 'school', label: 'SCHOOL', icon: GraduationCap },
    { id: 'experience', label: 'EXP', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-retro-dark text-retro-green selection:bg-retro-green selection:text-retro-dark">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-retro-dark/80 backdrop-blur-md border-b border-retro-green/20 p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Cpu className="w-6 h-6 animate-pulse" />
            <h1 className="text-xl md:text-2xl tracking-tighter">TienThanh.exe</h1>
          </motion.div>
          
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs transition-all flex items-center gap-2 border ${
                  activeSection === item.id 
                    ? 'bg-retro-green text-retro-dark border-retro-green' 
                    : 'bg-transparent text-retro-green border-retro-green/30 hover:border-retro-green'
                }`}
              >
                <item.icon className="w-3 h-3 md:w-4 md:h-4" />
                <span className="pixel-font">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Terminal Header */}
        <div className="mb-12 border border-retro-green/20 bg-retro-gray/50 p-4 rounded-t-lg flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="ml-4 text-xs opacity-50 font-mono">bash --session-id=7134</div>
        </div>

        <div className="min-h-[400px] border-x border-b border-retro-green/20 bg-retro-gray/20 p-6 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeSection === 'info' && (
              <motion.div
                key="info"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs opacity-50">
                    <Terminal className="w-3 h-3" />
                    <span>whoami</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl leading-tight">
                    {displayText}
                    {isTyping && <span className="animate-pulse">_</span>}
                  </h2>
                  <p className="text-lg text-retro-green/80 max-w-2xl leading-relaxed">
                    I am Tien Thanh, a passionate developer and tech enthusiast. 
                    I build digital experiences that blend performance with aesthetics.
                    Currently exploring the boundaries of web technology and game design.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  <div className="border border-retro-green/10 p-6 bg-retro-green/5 hover:bg-retro-green/10 transition-colors">
                    <h3 className="text-sm mb-4 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> CORE_SKILLS
                    </h3>
                    <ul className="space-y-2 text-sm opacity-80">
                      <li>{'>'} React / TypeScript</li>
                      <li>{'>'} Node.js / Express</li>
                      <li>{'>'} Java, C++</li>
                    </ul>
                  </div>
                  <div className="border border-retro-green/10 p-6 bg-retro-green/5 hover:bg-retro-green/10 transition-colors">
                    <h3 className="text-sm mb-4 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> CONTACT_METHODS
                    </h3>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                        <Github className="w-4 h-4" /> github.com/thanhteddyyy
                      </a>
                      <a href="#" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                        <Mail className="w-4 h-4" /> thanh.hoang03khmt@hcmut.edu.vn
                      </a><a href="#" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                        <Mail className="w-4 h-4" /> thanhadc03@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'school' && (
              <motion.div
                key="school"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-2 text-xs opacity-50">
                  <Terminal className="w-3 h-3" />
                  <span>cat ~/education.log</span>
                </div>
                
                <div className="space-y-12">
                  <div className="relative pl-8 border-l border-retro-green/30">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-retro-green rounded-full shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
                    <div className="space-y-2">
                      <span className="text-xs opacity-60">2024 - PRESENT</span>
                      <h3 className="text-xl">Ho Chi Minh University of Technology</h3>
                      <p className="text-retro-green/70">Major in Computer Science</p>
                      <p className="text-sm opacity-60 mt-2">Focusing on Software Engineering and Artificial Intelligence. GPA: 3.2/4.0</p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l border-retro-green/30">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-retro-green rounded-full opacity-50" />
                    <div className="space-y-2">
                      <span className="text-xs opacity-60">2021 - 2024</span>
                      <h3 className="text-xl">Marie Curie High school </h3>
                      <p className="text-retro-green/70">Graduated with GPA: 8.8</p>
                      <p className="text-sm opacity-60 mt-2">Vice President of Marie Curie English Club (2023 - 2024)</p>
                      <p className="text-sm opacity-60 mt-2">Member of Merthena Creative Science Team (2022 - 2023)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-2 text-xs opacity-50">
                  <Terminal className="w-3 h-3" />
                  <span>ls -la /var/log/experience</span>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      role: "Frontend Developer Intern",
                      company: "Tech Solutions Inc.",
                      period: "2023 - 2024",
                      desc: "Developed responsive user interfaces using React and Tailwind CSS. Optimized performance for large-scale data visualization dashboards."
                    },
                    {
                      role: "Open Source Contributor",
                      company: "Various Projects",
                      period: "2022 - PRESENT",
                      desc: "Contributing to UI libraries and developer tools. Focused on accessibility and developer experience."
                    }
                  ].map((exp, idx) => (
                    <div key={idx} className="group border border-retro-green/20 p-6 bg-retro-gray/30 hover:border-retro-green/60 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg group-hover:text-white transition-colors">{exp.role}</h3>
                          <p className="text-sm text-retro-green/70">{exp.company}</p>
                        </div>
                        <span className="text-[10px] pixel-font opacity-50">{exp.period}</span>
                      </div>
                      <p className="text-sm opacity-70 leading-relaxed">{exp.desc}</p>
                      <div className="mt-4 flex gap-2">
                        <span className="text-[10px] px-2 py-1 bg-retro-green/10 border border-retro-green/20">REACT</span>
                        <span className="text-[10px] px-2 py-1 bg-retro-green/10 border border-retro-green/20">TYPESCRIPT</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-retro-green/20 to-transparent" />
          <p className="text-[10px] pixel-font opacity-40">
            © 2026 TIEN THANH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 cursor-pointer" />
            <Github className="w-4 h-4 cursor-pointer" />
            <Mail className="w-4 h-4 cursor-pointer" />
          </div>
        </footer>
      </main>

      {/* Background Grid */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#00ff4111_1px,transparent_1px),linear-gradient(to_bottom,#00ff4111_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
