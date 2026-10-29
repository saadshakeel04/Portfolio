"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, GraduationCap, MapPin, Plus } from "lucide-react";
import { education, experiences, personalInfo } from "@/lib/data";
import { CountUp, EASE, MaskLines, Reveal, staggerChild, staggerParent } from "./motion";

const current = experiences.find((e) => e.current) ?? experiences[0];
const firstYear = Math.min(...experiences.map((e) => Number(e.startDate.slice(0, 4))));
const projectsBuilt = personalInfo.stats.find((s) => s.label === "Projects Built")?.value ?? 20;

const stats = [
  { value: String(experiences.length).padStart(2, "0"), label: "Teams I’ve shipped with" },
  { value: `${projectsBuilt}+`, label: "Projects built" },
  { value: String(firstYear), label: "Writing production code since" },
  { value: education[0]?.gpa?.split(" ")[0] ?? "3.4", label: "CGPA, BS Computer Science" },
];

export function AboutSection() {
  const [open, setOpen] = useState<string | null>(current.id);
  const edu = education[0];
  const photoRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="about-section wrap" aria-labelledby="about-title">
      <Reveal className="section-kicker">
        <span>01 / ABOUT</span>
        <span>THE PERSON BEHIND THE PIXELS</span>
      </Reveal>

      <div className="about-grid">
        <motion.figure
          ref={photoRef}
          className="about-photo"
          initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12% round 28px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <motion.div className="about-img-wrap" style={{ y: imgY }}>
            <Image
              src="/about.webp"
              alt="Saad Shakeel at his desk"
              fill
              sizes="(max-width: 700px) 90vw, (max-width: 1050px) 40vw, 420px"
              className="about-img"
            />
          </motion.div>
          <motion.figcaption
            className="about-now"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          >
            <span className="pulse" aria-hidden="true" />
            <span>
              <small>Currently</small>
              {current.position} @ {current.company}
            </span>
          </motion.figcaption>
          <motion.span
            className="about-place"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
          >
            <MapPin size={12} /> Pakistan
          </motion.span>
        </motion.figure>

        <div className="about-copy">
          <MaskLines
            id="about-title"
            lines={["I build the parts", <em key="e">people touch.</em>]}
          />
          <Reveal className="about-text" delay={0.15}>
            <p>
              I’m Saad, a full stack engineer who leans towards the front of the stack. I
              work in React, Next.js and TypeScript day to day, and I’m just as comfortable
              wiring up the GraphQL, Node and PostgreSQL underneath it.
            </p>
            <p>
              Since {firstYear} I’ve worked across {experiences.length} teams, from internships
              building Fastify backends and Twilio integrations to shipping production
              interfaces at {current.company}. Lately I’m exploring AI-assisted products,
              system design and computer vision.
            </p>
          </Reveal>
          <motion.ul
            className="about-interests"
            aria-label="Interests"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {personalInfo.interests.map((i) => (
              <motion.li key={i} variants={staggerChild}>
                {i}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <motion.dl
        className="about-stats"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={staggerChild}>
            <dt>{s.label}</dt>
            <dd>
              <CountUp value={s.value} />
            </dd>
          </motion.div>
        ))}
      </motion.dl>

      <div className="exp">
        <Reveal className="exp-head">
          <h3>
            Where I’ve <em>worked</em>
          </h3>
          <a href={personalInfo.resume} target="_blank" rel="noreferrer">
            Full résumé <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <ol className="exp-list">
          {experiences.map((exp, i) => {
            const isOpen = open === exp.id;
            return (
              <motion.li
                key={exp.id}
                className={`exp-item${isOpen ? " is-open" : ""}${exp.current ? " is-current" : ""}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              >
                <button
                  className="exp-row"
                  aria-expanded={isOpen}
                  aria-controls={`exp-${exp.id}`}
                  onClick={() => setOpen(isOpen ? null : exp.id)}
                >
                  <span className="exp-date">{exp.duration}</span>
                  <span className="exp-role">
                    <strong>{exp.position}</strong>
                    <span>{exp.company}</span>
                  </span>
                  <span className="exp-type">
                    {exp.current ? (
                      <>
                        <span className="pulse" aria-hidden="true" /> Now
                      </>
                    ) : (
                      exp.type
                    )}
                  </span>
                  <span className="exp-toggle" aria-hidden="true">
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`exp-${exp.id}`}
                      className="exp-detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <motion.div
                        className="exp-detail-inner"
                        variants={staggerParent}
                        initial="hidden"
                        animate="show"
                      >
                        <motion.p className="exp-loc" variants={staggerChild}>
                          <MapPin size={12} /> {exp.location}
                        </motion.p>
                        <ul>
                          {exp.description.map((d) => (
                            <motion.li key={d} variants={staggerChild}>
                              {d}
                            </motion.li>
                          ))}
                        </ul>
                        <motion.div className="exp-tech" variants={staggerChild}>
                          {exp.technologies.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>

        {edu && (
          <Reveal className="edu-card">
            <span className="edu-icon">
              <GraduationCap size={20} />
            </span>
            <div className="edu-text">
              <strong>
                {edu.degree.replace("Bachelor's of Science", "BS")} {edu.field}
              </strong>
              <span>{edu.institution}</span>
            </div>
            <span className="edu-meta">
              {edu.duration}
              {edu.gpa && <b>CGPA {edu.gpa.split(" ")[0]}</b>}
            </span>
          </Reveal>
        )}
      </div>
    </section>
  );
}
