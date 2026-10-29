"use client";
import { useState, type CSSProperties, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  LoaderCircle,
} from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { PortfolioNav, PortfolioFooter } from "./Chrome";
import { AboutSection } from "./AboutSection";
import { WorkSection } from "./WorkSection";
import { toolkit } from "./icons";
import { MaskLines, Reveal, ScrollProgress, staggerChild, staggerParent } from "./motion";
import { Splash } from "./Splash";
import "./sections.css";

export function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
    <div id="top">
      <Splash />
      <ScrollProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <PortfolioNav />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <span>SAAD SHAKEEL / SOFTWARE ENGINEER</span>
            <span>BASED IN PAKISTAN ↗</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Code with
                <br />
                <em>character.</em>
                <br />
                Built to <span className="outline-word">work.</span>
              </h1>
              <div className="hero-intro">
                <span className="intro-line" />
                <p>
                  I’m Saad, a full stack engineer turning complex problems into
                  thoughtful web and mobile experiences.
                </p>
              </div>
              <a className="button button-cobalt" href="#projects">
                Explore my work <ArrowDown size={18} />
              </a>
            </div>
            <div className="portrait-composition">
              <Image
                src="/portrait.png"
                alt="Saad Shakeel"
                fill
                sizes="(max-width: 700px) 90vw, 390px"
                preload
                className="portrait-image"
              />
            </div>
          </div>
          <div className="hero-bottom">
            <span>GOOD INTERFACES. SOLID FOUNDATIONS.</span>
            <a href="#projects">
              SCROLL TO DISCOVER <ArrowDown size={14} />
            </a>
            <span>PORTFOLIO / 2026</span>
          </div>
        </section>
        <div className="discipline-strip" aria-hidden="true">
          <div className="discipline-track">
            {[0, 1].map((repeat) => (
              <div className="discipline-group" key={repeat}>
                {['FULL STACK DEVELOPMENT', 'WEB & MOBILE', 'REACT & NEXT.JS', 'API DEVELOPMENT', 'RESPONSIVE INTERFACES', 'DATABASE DESIGN', 'BUILT WITH INTENTION'].map((specialty) => (
                  <span className="discipline-item" key={specialty}><span>{specialty}</span><Asterisk /></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <AboutSection />
        <WorkSection />
        <section
          id="skills"
          className="toolkit-section"
          aria-labelledby="toolkit-title"
        >
          <div className="wrap">
            <Reveal className="section-kicker">
              <span>03 / THE TOOLKIT</span>
              <Asterisk size={20} />
            </Reveal>
            <div className="section-heading">
              <MaskLines id="toolkit-title" lines={["Good tools.", <em key="e">Better possibilities.</em>]} />
              <Reveal delay={0.2}>
                <p>
                  From the first interaction to the last API call.
                  <br />
                  Here’s what I build with.
                </p>
              </Reveal>
            </div>
            <div className="toolkit-groups">
              {toolkit.map((group, i) => (
                <div className="toolkit-group" key={group.title}>
                  <Reveal className="toolkit-group-title">
                    <span>0{i + 1}</span>
                    <h3>{group.title}</h3>
                    <p>{group.note}</p>
                  </Reveal>
                  <motion.div
                    className="tool-grid"
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {group.tools.map(({ name, icon: Icon, color }) => (
                      <motion.div key={name} variants={staggerChild}>
                        <div
                          className="tool"
                          style={{ "--brand": color } as CSSProperties}
                        >
                          <Icon aria-hidden="true" />
                          <span>{name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
    </MotionConfig>
  );
}
function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Message failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section
      id="contact"
      className="contact-section wrap"
      aria-labelledby="contact-title"
    >
      <Reveal className="section-kicker">
        <span>04 / SAY HELLO</span>
        <span>LET’S MAKE SOMETHING MATTER</span>
      </Reveal>
      <div className="contact-layout">
        <Reveal>
          <h2 id="contact-title">
            Have a good
            <br />
            <em>one in mind?</em>
            <ArrowUpRight className="contact-arrow" />
          </h2>
          <a className="email-link" href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
            <ArrowUpRight size={20} />
          </a>
          <div className="social-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={personalInfo.resume} target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
        <form onSubmit={submit} className="contact-form">
          <div className="form-pair">
            <label htmlFor="name">
              Your name
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={100}
                disabled={status === "sending"}
              />
            </label>
            <label htmlFor="email">
              Email address
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={254}
                disabled={status === "sending"}
              />
            </label>
          </div>
          <label htmlFor="subject">
            What are you thinking?
            <input
              id="subject"
              name="subject"
              placeholder="A website, an app, a conversation…"
              required
              maxLength={200}
              disabled={status === "sending"}
            />
          </label>
          <label htmlFor="message">
            A little more about it
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your idea…"
              required
              minLength={20}
              maxLength={5000}
              rows={3}
              disabled={status === "sending"}
            />
          </label>
          <button
            type="submit"
            className="button button-cobalt"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                Sending <LoaderCircle className="animate-spin" size={18} />
              </>
            ) : (
              <>
                Send a message <ArrowRight size={18} />
              </>
            )}
          </button>
          <div role="status" className="form-status">
            {status === "success" && (
              <>
                <Check size={16} /> Message sent. Thanks for getting in touch.
              </>
            )}
            {status === "error" && (
              <>
                Couldn’t send your message. Please try again or{" "}
                <a href={`mailto:${personalInfo.email}`}>email me directly</a>.
              </>
            )}
          </div>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
