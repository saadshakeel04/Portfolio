"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";
export function PortfolioNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Saad Shakeel home">
        saad<span>®</span>
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="site-nav"
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Main navigation"
      >
        <Link href="/#about" onClick={() => setOpen(false)}>
          About <span>01</span>
        </Link>
        <Link href="/#projects" onClick={() => setOpen(false)}>
          Selected work <span>02</span>
        </Link>
        <Link href="/#skills" onClick={() => setOpen(false)}>
          Toolkit <span>03</span>
        </Link>
        <a href={personalInfo.resume} target="_blank" rel="noreferrer">
          Résumé <ArrowUpRight size={13} />
        </a>
        <Link
          href="/#contact"
          className="nav-contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={17} />
        </Link>
      </nav>
    </header>
  );
}
export function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="wordmark">
        saad<span>®</span>
      </Link>
      <p>© {new Date().getFullYear()} Saad Shakeel</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
