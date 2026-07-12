'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Play, CheckCircle2, Zap, ChevronLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/app/lib/types';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface Props {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetail({ project, prevProject, nextProject }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-6 pb-10 w-full">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Link href="/#projects"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-4"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Projects
                </Link>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-background/60 backdrop-blur text-muted-foreground border border-border/50">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 backdrop-blur">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">{project.shortDescription}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Links + Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-border/50"
          >
            <div className="flex flex-wrap gap-2">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-border hover:border-cyan-400/40 hover:bg-cyan-400/5 text-foreground transition-all">
                  <FaGithub className="w-4 h-4" /> View Code
                </a>
              )}
              {project.demoVideo && (
                <a href={project.demoVideo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-border hover:border-violet-400/40 hover:bg-violet-400/5 text-violet-400 transition-all">
                  <Play className="w-4 h-4" /> Watch Demo
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.overview}</p>
          </motion.div>

          {/* Features + Challenges */}
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges?.map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="glass-adaptive rounded-xl p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{challenge}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className={`grid gap-4 ${project.screenshots.length > 1 ? 'md:grid-cols-2' : ''}`}>
                {project.screenshots.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative aspect-video rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Prev / Next Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 pt-8 border-t border-border/50"
          >
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 glass-adaptive rounded-2xl p-5 hover:border-cyan-400/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 group-hover:-translate-x-1 transition-all" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Previous</p>
                  <p className="text-sm font-semibold truncate group-hover:text-cyan-400 transition-colors">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`}
                className="group flex items-center justify-end gap-3 glass-adaptive rounded-2xl p-5 hover:border-cyan-400/20 transition-all duration-300 text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Next</p>
                  <p className="text-sm font-semibold truncate group-hover:text-cyan-400 transition-colors">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ) : <div />}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
