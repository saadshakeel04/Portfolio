'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  children: React.ReactNode;
  minDuration?: number;
}

const MESSAGES = [
  'Crafting clean, scalable code…',
  'Building full stack experiences…',
  'Turning ideas into products…',
  'Almost ready…',
];

export function SplashScreen({ children, minDuration = 3500 }: SplashScreenProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      // Ease-out curve so it feels like it's "settling" rather than linear
      const t = Math.min(elapsed / minDuration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 300);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDuration]);

  // Cycle through messages while loading
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, minDuration / MESSAGES.length);
    return () => clearInterval(interval);
  }, [loading, minDuration]);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-cyan-400/25 blur-2xl"
                />
                <Image
                  src="/logo.svg"
                  alt="Saad Shakeel logo"
                  width={180}
                  height={180}
                  priority
                  className="relative object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <h1 className="text-lg font-bold tracking-tight text-foreground">
                  Saad Shakeel
                </h1>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">
                  Full Stack Software Engineer
                </p>
              </motion.div>

              <div className="h-4 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={messageIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[11px] text-muted-foreground/80 tracking-wide"
                  >
                    {MESSAGES[messageIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center gap-2 w-48"
              >
                <div className="w-full h-[3px] rounded-full bg-foreground/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
                <span className="text-[11px] text-muted-foreground tabular-nums tracking-wider">
                  {progress}%
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={loading ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: loading ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}