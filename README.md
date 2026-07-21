# Saad Shakeel Portfolio

A modern, responsive portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It showcases my projects, skills, experience and provides a way for recruiters and clients to get in touch.

## Features

- Responsive design for mobile, tablet, and desktop
- Dark & light mode with system preference support
- Modern glassmorphism-inspired UI
- Interactive project showcase with live demo and GitHub links
- Dedicated project case study pages
- Contact form with server-side email support (Nodemailer)
- Smooth animations powered by Framer Motion
- SEO optimized with Next.js Metadata API
- Fast performance with App Router and static generation

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Email | Nodemailer |

---

## Sections

- Hero
- About
- Skills
- Experience
- Projects
- Resume
- Contact

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/saadshakeel04/portfolio.git

cd portfolio

npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
EMAIL_FROM=your_email
EMAIL_PASSWORD=email_app_generated_password
```

### Run Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```text
app/
├── api/contact/
├── projects/[id]/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── common/
├── layout/
├── sections/
└── ui/

lib/
├── data.ts
├── types.ts
└── utils.ts

public/
```

---
