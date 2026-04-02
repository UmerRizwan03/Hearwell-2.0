# Hearwell Speech & Hearing Centre

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-11.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, modern healthcare application for **Hearwell Speech & Hearing Centre**, designed with a focus on clinical excellence and patient-first digital experiences.

## 🩺 Overview

Hearwell is a leading diagnostic and therapeutic centre specializing in comprehensive hearing care and speech therapy. This platform serves as a digital gateway for patients to explore specialized services, learn about advanced audiological technology, and schedule professional consultations.

> [!IMPORTANT]
> This project implements the **"Editorial Precision"** design system, prioritizing clean typography, organic animations, and a harmonious clinical color palette.

---

## ✨ Key Features

### 👂 Audiology & Hearing Diagnostics
- **Comprehensive Testing**: Pure Tone Audiometry, Tympanometry, and specialist OAE (Newborn Screening).
- **Digital Hearing Aids**: Advanced fitting and programming for cutting-edge digital hearing solutions.
- **Tinnitus Management**: Professional evaluations for hearing-related conditions.

### 🗣️ Speech & Language Therapy
- **Therapeutic Intervention**: Articulation, stuttering, and voice disorder management.
- **AVT (Auditory Verbal Therapy)**: Specialized structured programs for hearing-impaired children.
- **School Readiness**: Transitional programs for early childhood development.

### 🧩 Child Development
- **Occupational Therapy**: Fine motor skills and sensory processing support.
- **Individualized Education Programs (IEP)**: Tailored developmental strategies for unique needs.

---

## 🎨 Design Philosophy: "Editorial Precision"

The application adheres to a high-end design language:
- **Typography**: Utilizing `Outfit` for headings and `Inter` for body text to balance modern aesthetics with readability.
- **Fluid Motion**: Implementing "Living UI" elements using Framer Motion (floating heroes, organic entrance animations).
- **Color Palette**: Sophisticated HSL-tailored greens (`#1D544F`, `#82CFB0`) reflecting clinical trust and vitality.
- **Imagery**: High-resolution, custom-generated clinical photography ensuring a consistent premium feel.

---

## 🛠️ Technical Stack

- **Frontend**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Asset Optimization**: Custom `OptimizedImage` component for CLS prevention and blur-up effects.

---

## 📁 Project Structure

```bash
src/
├── assets/           # Optimized images and static assets
├── components/       # Reusable UI components (Motion, OptimizedImage, etc.)
├── hooks/            # Custom React hooks
├── pages/            # Page-level components (Home, About, Services, etc.)
├── utils/            # Helper functions, motion variants, and image registry
└── index.css         # Global styles and Tailwind directives
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Launch the development server with HMR:
```bash
npm run dev
```

### Production
Build for production:
```bash
npm run build
```

---

## 📄 License

Internal Project for Hearwell Speech & Hearing Centre. All rights reserved.
