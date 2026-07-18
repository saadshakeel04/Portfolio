'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Play, ArrowRight, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { SectionHeader } from '@/components/common/SectionHeader';
import { VideoModal } from '../ui/VideoModal';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative glass-adaptive rounded-3xl overflow-hidden hover:border-cyan-400/20 transition-all duration-300"
      >
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className={cn(
              'object-cover transition-transform duration-700',
              hovered ? 'scale-110' : 'scale-100'
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          {/* Category + Featured badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 backdrop-blur">
              {project.category}
            </span>
          </div>

          {/* Hover overlay with quick links */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center gap-3"
              >
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0.8, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0.8, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-foreground/10 hover:bg-foreground/20 border border-border text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
                {project.demoVideo && (
                  <motion.button
                    type="button"
                    initial={{ scale: 0.8, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-violet-500 text-white hover:bg-violet-400 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setVideoOpen(true);
                    }}
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.shortDescription}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/50">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/50">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Links row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              {project.demoVideo && (
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-violet-400 hover:bg-violet-400/10 transition-all"
                  aria-label="Demo Video"
                >
                  <Play className="w-4 h-4" />
                </button>
              )}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-cyan-400 transition-colors group/link"
            >
              Explore Detail
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.article>

      {project.demoVideo && (
        <VideoModal
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={project.demoVideo}
          title={project.title}
        />
      )}
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-foreground/[0.02]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Featured"
          titleHighlight="Projects"
          description="A selection of my most impactful work. Each project represents a real challenge solved with thoughtful engineering."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            These are just a few highlights. Explore my GitHub for a deeper dive into my work.
          </p>
          <motion.a
            href="https://github.com/saadshakeel04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-border hover:border-cyan-400/50 hover:bg-cyan-400/5 text-foreground hover:text-cyan-400 transition-all duration-200"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="w-4 h-4" />
            View All on GitHub
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}