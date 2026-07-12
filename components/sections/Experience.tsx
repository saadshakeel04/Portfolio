'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, CalendarDays, Briefcase, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { experiences } from '@/app/lib/data';
import { cn } from '@/app/lib/utils';

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-8">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4, type: 'spring' }}
          className={cn(
            'relative w-5 h-5 rounded-full border-2 mt-1 flex-shrink-0 z-10',
            exp.current
              ? 'border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-400/40'
              : 'border-border bg-background'
          )}
        >
          {exp.current && (
            <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
          )}
        </motion.div>
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(6,182,212,0.4), rgba(6,182,212,0.05))',
              minHeight: '60px',
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex-1 glass-adaptive rounded-2xl p-6 mb-8 group hover:border-cyan-400/20 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg leading-tight">{exp.position}</h3>
              {exp.current && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400 font-medium text-sm">
              <Briefcase className="w-3.5 h-3.5" />
              {exp.company}
            </div>
          </div>

          <div className="text-right space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground justify-end">
              <CalendarDays className="w-3.5 h-3.5" />
              {exp.duration}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground justify-end">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </div>
            <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-foreground/5 text-muted-foreground border border-border/50">
              {exp.type}
            </span>
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-2 mb-4">
          {exp.description.map((desc, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-2 flex-shrink-0" />
              {desc}
            </motion.li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/50 hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Work History"
          title="Professional"
          titleHighlight="Experience"
          description="My journey through the industry — every role has shaped how I think about code and products."
          align="center"
        />

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
