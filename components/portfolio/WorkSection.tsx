"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { personalInfo, projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { techIcons } from "./icons";
import { EASE, MaskLines, Reveal, staggerChild, staggerParent } from "./motion";

type Meta = {
  title: string;
  kind: string;
  description: string;
  highlight: string;
  accent: string;
  device: "browser" | "phone";
  span: "wide" | "narrow" | "half" | "full";
};

const meta: Record<string, Meta> = {
  internhub: {
    title: "InternHub",
    kind: "Dashboard",
    description:
      "A clearer view of the hiring process. Applications, candidates, and recruitment insights in one dashboard.",
    highlight: "Reusable Recharts components that stay readable from phone to desktop.",
    accent: "#7b5cff",
    device: "browser",
    span: "wide",
  },
  sketchwise: {
    title: "SketchWise",
    kind: "Mobile app",
    description:
      "From a photograph to a pencil sketch. A mobile art tutor with step-by-step drawing videos.",
    highlight: "Async image-to-video pipeline with FFmpeg, Redis queues and token credits.",
    accent: "#a23cff",
    device: "phone",
    span: "narrow",
  },
  notely: {
    title: "Notely",
    kind: "Productivity",
    description:
      "A little space for your big ideas. Notes, search, categories, and a workspace that stays out of the way.",
    highlight: "Instant CRUD synced with Supabase, plus pinning, archive and trash recovery.",
    accent: "#f2b33d",
    device: "browser",
    span: "half",
  },
  tripverse: {
    title: "TripVerse",
    kind: "Travel platform",
    description:
      "Less planning, more exploring. A travel platform connecting destination discovery with booking.",
    highlight: "ASP.NET MVC with a normalised schema built for concurrent reservations.",
    accent: "#19b5a5",
    device: "browser",
    span: "half",
  },
  "canada-prepsolution": {
    title: "Canada Prep Solution",
    kind: "Logistics",
    description:
      "Keeping the warehouse moving. Inventory, package preparation, and shipment workflows in one place.",
    highlight: "Server-rendered EJS views on Express and MongoDB, built to cut processing errors.",
    accent: "#ff5a47",
    device: "browser",
    span: "full",
  },
};

const order = ["internhub", "sketchwise", "notely", "tripverse", "canada-prepsolution"];

function hostOf(url?: string) {
  if (!url) return "localhost:3000";
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export function WorkSection() {
  const list = order.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as Project[];
  const [playing, setPlaying] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="projects" className="work-section wrap" aria-labelledby="work-title">
      <Reveal className="section-kicker">
        <span>02 / SELECTED WORK</span>
        <span>A FEW THINGS I’VE BUILT</span>
      </Reveal>
      <div className="section-heading">
        <MaskLines id="work-title" lines={["Less talk.", <em key="e">More shipped.</em>]} />
        <Reveal delay={0.2}>
          <p>
            Different problems. Different platforms.
            <br />
            The same attention to the details.
          </p>
        </Reveal>
      </div>

      <div className="bento">
        {list.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onPlay={(src) => setPlaying({ src, title: meta[project.id].title })}
          />
        ))}
      </div>

      <Reveal>
        <a href={personalInfo.github} className="github-link" target="_blank" rel="noreferrer">
          <SiGithub size={18} /> More experiments live on GitHub <ArrowUpRight size={18} />
        </a>
      </Reveal>

      <VideoPlayer clip={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onPlay,
}: {
  project: Project;
  index: number;
  onPlay: (src: string) => void;
}) {
  const m = meta[project.id];
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preview = project.gifs?.[0];
  const demo = project.demoVideo ?? project.gifs?.[0];

  // Gentle parallax: the device drifts as the card moves through the viewport.
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [14, -14]);

  function track(e: MouseEvent<HTMLElement>) {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  function enter() {
    const v = videoRef.current;
    if (v && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.play().catch(() => {});
    }
  }
  function leave() {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }

  return (
    <motion.article
      ref={cardRef}
      className={`pcard pcard-${m.span} pcard-${m.device}`}
      style={{ "--accent": m.accent } as CSSProperties}
      onMouseMove={track}
      onMouseEnter={enter}
      onMouseLeave={leave}
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.12, ease: EASE }}
    >
      <div className="pcard-media">
        <motion.div className="frame-wrap" style={{ y: drift }}>
          {m.device === "browser" ? (
            <div className="frame-browser">
              <div className="frame-bar">
                <i />
                <i />
                <i />
                <span>{hostOf(project.liveDemo)}</span>
              </div>
              <div className="frame-screen">
                <Image
                  src={project.thumbnail}
                  alt={`${m.title} interface`}
                  fill
                  sizes="(max-width: 700px) 90vw, (max-width: 1050px) 70vw, 560px"
                  className="frame-img"
                />
                {preview && (
                  <video
                    ref={videoRef}
                    className="frame-video"
                    src={preview}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="frame-phone">
              <span className="phone-notch" />
              <div className="frame-screen">
                <Image
                  src={project.thumbnail}
                  alt={`${m.title} app screen`}
                  fill
                  sizes="170px"
                  className="frame-img"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        className="pcard-body"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="pcard-meta" variants={staggerChild}>
          <span className="pcard-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="pcard-kind">{m.kind}</span>
        </motion.div>
        <motion.h3 variants={staggerChild}>
          {m.title}
          <ArrowUpRight className="pcard-arrow" aria-hidden="true" />
        </motion.h3>
        <motion.p className="pcard-desc" variants={staggerChild}>
          {m.description}
        </motion.p>
        <motion.p className="pcard-highlight" variants={staggerChild}>
          <span aria-hidden="true" />
          {m.highlight}
        </motion.p>
        <motion.ul className="pcard-stack" aria-label="Built with" variants={staggerParent}>
          {project.techStack.slice(0, 5).map((t) => {
            const Icon = techIcons[t];
            return (
              <motion.li key={t} variants={staggerChild}>
                {Icon && <Icon aria-hidden="true" />}
                {t.replace(" JS", "").replace(" Web", "")}
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.div className="pcard-actions" variants={staggerChild}>
          {project.liveDemo && (
            <a className="pbtn pbtn-primary" href={project.liveDemo} target="_blank" rel="noreferrer">
              Live site <ArrowUpRight size={15} />
            </a>
          )}
          {demo && (
            <button className="pbtn" onClick={() => onPlay(demo)}>
              <Play size={13} /> Watch demo
            </button>
          )}
          {project.github && (
            <a
              className="pbtn pbtn-icon"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${m.title} source code on GitHub`}
            >
              <SiGithub size={15} />
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

function VideoPlayer({
  clip,
  onClose,
}: {
  clip: { src: string; title: string } | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!clip) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [clip, onClose]);

  return (
    <AnimatePresence>
      {clip && (
        <motion.div
          className="player-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="player"
            role="dialog"
            aria-modal="true"
            aria-label={`${clip.title} demo video`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="player-head">
              <span>{clip.title} · demo</span>
              <button ref={closeRef} onClick={onClose} aria-label="Close video">
                <X size={18} />
              </button>
            </div>
            <video src={clip.src} controls autoPlay playsInline />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
