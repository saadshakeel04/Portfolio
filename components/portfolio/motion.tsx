"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + lift + un-blur when the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Heading whose lines slide up from behind a mask, one after another. */
export function MaskLines({
  lines,
  id,
  className,
}: {
  lines: ReactNode[];
  id?: string;
  className?: string;
}) {
  return (
    <motion.h2
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.12 }}
    >
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <motion.span
            className="mask-inner"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

/** Thin lime progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Counts up to a number the first time it becomes visible. Non-numeric text is shown as-is. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [shown, setShown] = useState(match ? (match[1].includes(".") ? "0.0" : "0") : value);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const pad = match[1].length;
    const startAt = target >= 1000 ? target - 30 : 0;
    const controls = animate(startAt, target, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => {
        const s = v.toFixed(decimals);
        setShown(decimals ? s : s.padStart(pad, "0"));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref}>
      {shown}
      {match?.[2]}
    </span>
  );
}
