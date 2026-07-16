'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Heart, Target, Download } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { personalInfo, education } from '@/lib/data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="About Me"
          title="The Story"
          titleHighlight="Behind the Code"
          description="Passionate about building things that make a difference. Here's a bit about my journey."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Photo + Stats */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Working at desk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-xl rounded-2xl p-4 border border-border/50 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{personalInfo.location}</p>
                    <p className="text-xs text-muted-foreground">{personalInfo.title}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {personalInfo.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-adaptive rounded-2xl p-5 text-center group hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-gradient-cyan mb-1">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Text Content */}
          <div className="space-y-8">
            {/* Bio paragraphs */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {personalInfo.about.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-adaptive rounded-2xl p-5 space-y-3"
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">Education</span>
              </div>
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold text-sm">{edu.degree} in {edu.field}</p>
                  <p className="text-sm text-cyan-400">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-muted-foreground">{edu.duration}</span>
                    {edu.gpa && <span className="text-xs text-muted-foreground">CGPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-adaptive rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">What I&apos;m After</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m looking to join a team that cares deeply about craft — where design and engineering are treated as one discipline. I want to work on products that millions of people use daily and that solve genuinely hard problems.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <motion.span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/50 hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-200 cursor-default"
                    whileHover={{ scale: 1.05, y: -1 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
