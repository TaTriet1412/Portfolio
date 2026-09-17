# Project Overview
This is a professional Developer Portfolio web application built to showcase technical skills, education, experience, and specific software projects. The layout follows a Single Page Application (SPA) design with scrollable sections.

# Tech Stack
- Framework: Angular (v16+)
- Component Architecture: Standalone Components ONLY
- Styling: Tailwind CSS & SCSS
- Language: TypeScript

# Project Structure & Architecture (Feature-Driven)
- `src/app/core/`: Application-wide singleton services (e.g., `ScrollSpyService` for active navbar links, `ThemeService` for Dark/Light mode).
- `src/app/shared/`: Reusable UI elements (e.g., `<app-section-heading>`, `<app-tech-badge>`, `<app-project-card>`).
- `src/app/features/`: Domain-specific components representing sections on the page:
  - `home/`: Hero section with dynamic typing effect and CTA buttons.
  - `about/`: Personal introduction and educational background.
  - `skills/`: Technical stack categorized into groups (e.g., Backend, Frontend, Database, Tools).
  - `experience/`: Vertical timeline component for internships, jobs, and certifications.
  - `projects/`: Grid layout of projects with filtering capabilities.
  - `contact/`: Contact details and social links.
- `src/app/layouts/`: Structural components like `NavbarComponent` (sticky, responsive) and `FooterComponent`.
- `src/app/models/`: TypeScript interfaces (e.g., `Project.ts`, `SkillItem.ts`, `Experience.ts`).
- `src/app/data/`: Contains `portfolio-data.ts`, acting as the single source of truth (mock database) for all content on the site.

# Coding Guidelines
1. **Component Design:** 
   - All components must use `standalone: true`.
   - Feature components (`features/`) should act as containers. They retrieve data from `portfolio-data.ts` (via a Service) and pass it down to `shared/` components via `@Input()`.
2. **Styling (Tailwind & SCSS):**
   - Use Tailwind CSS for 95% of styling (flexbox, grid, spacing, typography).
   - Use `.scss` ONLY for complex animations (e.g., floating elements, custom scrollbars) or abstracting extremely long Tailwind class lists.
3. **TypeScript & Data Handling:**
   - Strictly type all data structures in the `models/` folder. For instance, a `Project` must have attributes like `title`, `description`, `techStack` (array of strings), `githubLink`, and `demoLink`.
   - Use Angular Signals (`signal()`, `computed()`) to manage state, especially for features like the active section in the Navbar or the currently selected project filter.

src/
└── app/
    ├── core/
    │   ├── interceptors/
    │   └── services/
    │       ├── seo.service.ts
    │       └── theme.service.ts
    ├── data/
    │   └── mock-data.ts
    ├── features/
    │   ├── about/
    │   ├── contact/
    │   ├── experience/
    │   ├── home/
    │   ├── projects/
    │   └── skills/
    ├── layouts/
    │   ├── footer/
    │   ├── main-layout/
    │   └── navbar/
    ├── models/
    │   ├── experience.model.ts
    │   ├── project.model.ts
    │   └── skill.model.ts
    └── shared/
        └── components/
            ├── project-card/
            ├── section-title/
            ├── social-links/
            ├── tech-badge/
            └── timeline-item/
