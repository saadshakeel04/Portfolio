"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion } from "framer-motion";
import { EASE } from "./motion";

const NAME = "SAAD SHAKEEL";
const DURATION = 2.1; // seconds the counter takes to reach 100

/**
 * Intro screen shown on first paint. It renders on the server too, so the page
 * never flashes underneath it. When it lifts it sets data-ready on <html>,
 * which releases the hero's entrance animation.
 */
export function Splash() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: reduce ? 0.4 : DURATION,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(() => setDone(true), reduce ? 0 : 250),
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    document.body.style.overflow = "";
    document.documentElement.dataset.ready = "true";
  }, [done]);

  return (
    <>
    <noscript>
      <style>{`.splash{display:none}`}</style>
    </noscript>
    <AnimatePresence>
      {!done && (
        <motion.div
          className="splash"
          role="status"
          aria-label="Loading portfolio"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="splash-grid" aria-hidden="true" />

          <motion.div
            className="splash-center"
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.div
              className="splash-logo"
              initial={{ opacity: 0, scale: 0.7, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <span className="splash-glow" aria-hidden="true" />
              <Image src="/logo.svg" alt="" width={320} height={205} priority />
            </motion.div>

            <div className="splash-name" aria-hidden="true">
              {NAME.split("").map((ch, i) => (
                <span className="splash-char-mask" key={i}>
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: 0.35 + i * 0.035, ease: EASE }}
                  >
                    {ch === " " ? " " : ch}
                  </motion.span>
                </span>
              ))}
            </div>
            <motion.p
              className="splash-role"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            >
              Software Engineer · Pakistan
            </motion.p>
          </motion.div>

          <div className="splash-foot">
            <span>PORTFOLIO / 2026</span>
            <span className="splash-count" aria-hidden="true">
              {String(count).padStart(3, "0")}
            </span>
          </div>
          <div className="splash-bar" aria-hidden="true">
            <span style={{ transform: `scaleX(${count / 100})` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
