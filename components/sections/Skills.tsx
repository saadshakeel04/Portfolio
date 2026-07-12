'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Monitor, Server, Smartphone, Database, Code2, Wrench } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { skillCategories } from '@/app/lib/data';
import { cn } from '@/app/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Smartphone,
  Database,
  Code2,
  Wrench,
};

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-foreground/[0.02]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Technical Skills"
          title="My Tech"
          titleHighlight="Arsenal"
          description="Technologies and tools I've been using to bring ideas to life."
          align="center"
        />

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                  isActive
                    ? 'text-slate-900 shadow-lg shadow-cyan-500/20'
                    : 'bg-foreground/5 text-muted-foreground hover:text-foreground hover:bg-foreground/10 border border-border/50'
                )}
                style={isActive ? { backgroundColor: cat.color } : {}}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {cat.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-adaptive rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = iconMap[active.icon] || Code2;
                return (
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${active.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: active.color }} />
                  </div>
                );
              })()}
              <div>
                <h3 className="font-bold text-lg">{active.name}</h3>
                <p className="text-xs text-muted-foreground">{active.skills.length} technologies</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {active.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={active.color}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Category Overview Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 content-start"
          >
            {skillCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Code2;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    'glass-adaptive rounded-2xl p-4 text-left transition-all duration-300',
                    isActive && 'border-cyan-400/30 bg-cyan-400/5'
                  )}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: cat.color }} />
                  </div>
                  <p className="text-sm font-semibold mb-0.5">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{cat.skills.length} skills</p>

                  {/* Mini bars */}
                  <div className="flex gap-0.5 mt-3">
                    {cat.skills.slice(0, 5).map((s) => (
                      <div key={s.name} className="flex-1 h-1 rounded-full bg-foreground/10 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${s.level}%`, backgroundColor: cat.color, opacity: 0.7 }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.button>
              );
            })}

            {/* Total skills card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="glass-adaptive rounded-2xl p-4 col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl font-bold text-gradient-cyan mb-1">
                {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}+
              </div>
              <p className="text-xs text-muted-foreground">Technologies mastered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
