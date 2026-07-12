'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { personalInfo, experiences, skillCategories } from '@/app/lib/data';

const highlights = [
  {
    icon: Briefcase,
    label: 'Experience',
    value: '1.5+ Years',
    detail: 'Full Stack Development',
    color: '#06b6d4',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BS Computer Science',
    detail: 'University of Gujrat, 3.4 CGPA',
    color: '#8b5cf6',
  },
  {
    icon: Code2,
    label: 'Skills',
    value: `${skillCategories.reduce((a, c) => a + c.skills.length, 0)}+`,
    detail: 'Technologies',
    color: '#10b981',
  },
  {
    icon: Award,
    label: 'Projects',
    value: '20+',
    detail: 'Built & Shipped',
    color: '#f59e0b',
  },
];

export function Resume() {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Resume"
          title="My"
          titleHighlight="Background"
          description="A summary of my professional journey, skills, and achievements."
          align="center"
        />

        {/* Highlight cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-adaptive rounded-2xl p-5 text-center group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${h.color}15` }}
              >
                <h.icon className="w-5 h-5" style={{ color: h.color }} />
              </div>
              <div className="text-2xl font-bold mb-0.5" style={{ color: h.color }}>{h.value}</div>
              <div className="text-xs font-semibold text-foreground/80 mb-0.5">{h.label}</div>
              <div className="text-xs text-muted-foreground">{h.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Preview + Download */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left — PDF Preview placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="glass-adaptive rounded-3xl overflow-hidden">
              {/* Mock PDF Header */}
              <div className="bg-foreground/5 border-b border-border/50 px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 bg-foreground/10 rounded-lg px-3 py-1 text-xs text-muted-foreground text-center">
                  saad-shakeel-resume.pdf
                </div>
              </div>

              {/* Simulated resume content */}
              <div className="p-8 space-y-6 min-h-[420px]">
                {/* Header */}
                <div className="text-center border-b border-border/50 pb-5">
                  <div className="h-5 w-48 bg-foreground/10 rounded-full mx-auto mb-2" />
                  <div className="h-3 w-36 bg-cyan-400/20 rounded-full mx-auto mb-2" />
                  <div className="flex justify-center gap-3">
                    {[80, 90, 100].map((w) => (
                      <div key={w} className={`h-2 w-${w <= 80 ? '16' : w <= 90 ? '20' : '24'} bg-foreground/5 rounded-full`} />
                    ))}
                  </div>
                </div>

                {/* Sections */}
                {['Experience', 'Education', 'Skills'].map((section) => (
                  <div key={section} className="space-y-2">
                    <div className="h-3 w-24 bg-cyan-400/30 rounded-full" />
                    <div className="border-t border-border/30 pt-2 space-y-1.5">
                      {[100, 80, 90, 70].map((w, i) => (
                        <div key={i} className={`h-2 bg-foreground/5 rounded-full`} style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Overlay with lock */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm rounded-3xl">
                  <div className="text-center">
                    <FileText className="w-10 h-10 text-cyan-400 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-semibold mb-1">Resume Preview</p>
                    <p className="text-xs text-muted-foreground">Download to view the full document</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-5"
          >
            <div className="glass-adaptive rounded-2xl p-6 space-y-5">
              <h3 className="font-bold text-xl">Get My Resume</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Download my resume for a complete overview of my skills, experience, education, and projects.
              </p>

              <motion.a
                href={personalInfo.resume}
                download
                className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-xl font-semibold text-sm bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 20px 40px -10px rgba(6,182,212,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.a>

              <div className="grid grid-cols-2 gap-3">
                <div className="glass-adaptive rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-cyan-400">1.5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
                <div className="glass-adaptive rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-cyan-400">20+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>

            {/* Quick experience timeline */}
            <div className="glass-adaptive rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">Quick Timeline</h4>
              {experiences.slice(0, 3).map((exp, i) => (
                <div key={exp.id} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${exp.current ? 'bg-cyan-400' : 'bg-border'}`} />
                  <div>
                    <p className="text-xs font-semibold">{exp.position}</p>
                    <p className="text-xs text-cyan-400">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
