# Hearwell Speech & Hearing Centre

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, highly interactive digital platform engineered for **Hearwell Speech & Hearing Centre**. This application is designed with a patient-first focus, bridging clinical excellence with state-of-the-art web engineering to deliver a flawless user experience.

---

## 🩺 Overview

Hearwell is a leading diagnostic and therapeutic centre specializing in comprehensive hearing care and speech therapy, with a legacy dating back to 2014. The platform serves as a modern digital gateway for new and returning patients to explore specialized services, meet the clinical team, and seamlessly gain access to clinic routing.

> [!IMPORTANT]
> The site implements our bespoke **"Editorial Precision"** design system. By relying on organic `framer-motion` animations, an `Outfit`/`Inter` font duo, and fluid HSL color tokens, the UI communicates absolute medical trust without feeling generic.

---

## ✨ Key Platform Features

### 👨‍⚕️ Clinical Team Showcase
A dedicated **Our Specialists** section highlighting the clinic’s multidisciplinary team. Features the Chief Audiologist and Speech Language Pathologist alongside dedicated Audiologists and Special Educators. Profiles structurally highlight CRR numbers, clinical tenure, and core specializations.

### 🗺️ Multi-Branch Navigation
Integrated smart **Location Cards** strategically route users. With 1-click Google Maps **"Get Directions"** and native **"Call Clinic"** (`tel:`) hooks, users seamlessly switch between the **Perumbavoor** and **Perinjanam** branches without friction.

### 👂 Audiology & Diagnostics
Detailed service landing pages breaking down:
- Pure Tone Audiometry and specialist OAE (Newborn Screening).
- Precision fitting for next-generation digital hearing aid technologies. 
- Integrated tinnitus assessments.

### 🗣️ Pediatric & Speech Development
Dedicated architectural spaces addressing Child Development Programs:
- Occupational Therapy and Individualized Education Programs (IEP).
- AVT (Auditory Verbal Therapy) interventions for speech restoration.

---

## 🛠️ Technical Architecture

This repository leverages the cutting edge of the modern web ecosystem to guarantee maximal performance and stellar SEO:

* **Engine:** [React 19](https://react.dev/) running atop [Vite 8](https://vitejs.dev/).
* **Styling Engine:** Custom-configured [Tailwind CSS v4](https://tailwindcss.com/) handling dynamic theming and utility constraints.
* **Animation Hub:** [Framer Motion v12](https://motion.dev/) orchestrating "Living UI" micro-interactions (`SectionReveal`, `StaggerContainer`, custom float routines).
* **Asset Optimization:** Integrated [Vite Imagetools](https://github.com/JonasKruckenberg/imagetools) resolving raw photography to perfectly sized, responsive `webp` `srcSets` dynamically to prevent Cumulative Layout Shifts (CLS).
* **Navigation:** Pure SPA routing handled natively by [React Router v7](https://reactrouter.com/).
* **Iconography:** Feather-light, crisp vector SVGs implemented via [Lucide React](https://lucide.dev/).

---

## 📁 Repository Structure

```bash
src/
├── assets/           # Raw images automatically processed by Vite Imagetools
├── components/       # Heavy lifters: OptimizedImage, GoogleReviews, Motion primitives
├── pages/            # Core routing: Home, Services, Teams (Doctor.tsx), Booking
├── utils/            # Shared logic: image manifest registries and motion variants
├── index.css         # Tailwind V4 layers and global resets
└── App.tsx           # Global React Router and scroll-aware logic layouts
```

---

## 🚀 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- `npm` or `yarn`

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/UmerRizwan03/Hearwell-2.0.git
   ```
2. **Install exact dependencies:**
   ```bash
   npm install
   ```
3. **Boot the Dev Server (with HMR):**
   ```bash
   npm run dev
   ```

### Production Build
To spin out the heavily minified, cache-basted static assets for final CDN deployment:
```bash
npm run build
```

---

## 📬 Contact & Links
**Hearwell Speech & Hearing Centre**  
📧 **Official Email:** [hearwellspeechandhearing@gmail.com](mailto:hearwellspeechandhearing@gmail.com)  
📞 **Primary Contact:** +91 9633626656 / +91 9947314906  

*(Internal Project Repository. All rights reserved by Hearwell Speech & Hearing Centre).*
