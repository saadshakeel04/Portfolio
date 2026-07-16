'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { navItems, personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/5'
            : 'py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient-cyan">Saad</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg',
                  activeSection === item.href.slice(1)
                    ? 'text-cyan-400'
                    : 'text-foreground/60 hover:text-foreground'
                )}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, rotate: 180 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Resume Download */}
            <motion.a
              href={personalInfo.resume}
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-background/95 backdrop-blur-2xl border-b border-border/50 py-4 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    'text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    activeSection === item.href.slice(1)
                      ? 'bg-cyan-400/10 text-cyan-400'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-border/50">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/50 hover:text-foreground transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/50 hover:text-foreground transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/50 hover:text-foreground transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resume}
                download
                className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
