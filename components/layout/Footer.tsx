'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { navItems, personalInfo } from '@/lib/data';

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

const scrollToTop = () => {
  if (!isHome) {
    sessionStorage.removeItem('pendingSection');
    router.push('/');
    return;
  }
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname);
  }
  window.dispatchEvent(new Event('force-hero-active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  const scrollTo = (href: string) => {
    const sectionId = href.slice(1);

    if (!isHome) {
      sessionStorage.setItem('pendingSection', sectionId);
      router.push('/', { scroll: false });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: personalInfo.instagram, label: 'instagram' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              className="text-2xl font-bold tracking-tight w-fit"
            >
              <span className="text-gradient-cyan">Saad Shakeel</span>
            </motion.div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer crafting elegant digital experiences at the intersection of design and engineering.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm text-muted-foreground hover:text-cyan-400 transition-colors duration-200 w-fit"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400 font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            All rights reserved by Saad Shakeel &copy; {new Date().getFullYear()}
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors group"
            whileHover={{ y: -2 }}
          >
            Back to top
            <span className="p-1 rounded-md border border-border group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all">
              <ArrowUp className="w-3 h-3" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}