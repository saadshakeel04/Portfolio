'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, Code2, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { personalInfo } from '@/app/lib/data';

const HeroScene = dynamic(() => import('@/components/three/HeroScene').then((m) => ({ default: m.HeroScene })), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const titles = [
  'Full Stack Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Open Source Contributor',
];

function TypewriterTitle() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const title = titles[current];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < title.length) {
      timeout = setTimeout(() => setDisplayed(title.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === title.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrent((c) => (c + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, current]);

  return (
    <span className="text-gradient-cyan inline-block min-w-[280px]">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: personalInfo.twitter, label: 'X' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const badges = [
  { icon: Code2, text: '4+ Years Experience' },
  { icon: Zap, text: '20+ Projects Built' },
  { icon: Sparkles, text: 'Open to Work' },
];

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background grid-pattern"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">

          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6 w-fit"
            >
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-4">
                Hi, I&apos;m{' '}
                <span className="text-gradient-cyan block sm:inline">{personalInfo.name}</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl md:text-3xl font-semibold mb-5 h-10 flex items-center"
            >
              <TypewriterTitle />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/50"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 20px 40px -10px rgba(6,182,212,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.button>

              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-border hover:border-cyan-400/50 hover:bg-cyan-400/5 text-foreground transition-all duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Connect
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-2"
            >
              <span className="text-xs text-muted-foreground mr-1">Find me on</span>
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.07 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D Scene + Photo */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            {/* 3D Background */}
            <div className="absolute inset-0 w-full h-full min-h-[400px]">
              <HeroScene />
            </div>

            {/* Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
              className="relative z-10 float-animation"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-3xl animated-border p-[2px]">
                  <div className="w-full h-full rounded-3xl bg-background" />
                </div>

                {/* Inner glow */}
                <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />

                {/* Photo */}
                <div className="absolute inset-2 rounded-2xl overflow-hidden">
                  <Image
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-background border border-border rounded-2xl px-3 py-2 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Open to work</span>
                  </div>
                </motion.div>

                {/* Top badge */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-background border border-border rounded-2xl p-2.5 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring' }}
                >
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ y: -2 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
