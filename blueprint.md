# Project Blueprint

## Overview

A simple "Hello World" web page with modern styling, including a responsive card-based layout, light/dark mode support, a custom font, and a reusable navigation bar component. The application is a single-page application (SPA) that uses a simple router to load different pages without a full page reload.

## Project Structure

- `index.html`: Main application shell. The content is dynamically loaded into this file.
- `pages/`: Folder for additional pages.
  - `home.html`: The home page content.
  - `project.html`: Page for showcasing projects.
  - `resume.html`: Page for displaying a resume.
  - `about.html`: Page with information about me.
  - `404.html`: The 404 error page.
- `styles/`: Folder for stylesheets.
  - `style.css`: CSS for styling.
- `scripts/`: Folder for JavaScript files.
  - `main.js`: Main JavaScript file (imports other components).
  - `router.js`: A simple client-side router.
- `components/`: Folder for reusable Web Components.
  - `navbar.js`: Defines the `<main-navbar>` custom element.
- `images/`: Folder for project images.
- `assets/images/`: Folder for asset images.
- `blueprint.md`: This file, documenting the project.

## Styling and Design

- **Layout**:
    - A fixed, responsive navigation bar at the top of the page.
    - Centered, responsive card layout for the main content.
- **Color Palette**:
    - Uses `oklch` for modern, vibrant colors.
    - Supports both light and dark color schemes via `@media (prefers-color-scheme: dark)`.
- **Typography**:
    - Uses the 'Inter' font from Google Fonts.
    - Responsive font sizes using `clamp()`.

## Components

- **`<main-navbar>` (Web Component)**:
    - A reusable, encapsulated navigation bar.
    - Defined in `components/navbar.js`.
    - Includes a brand name and links.
    - Responsive design that collapses into a hamburger menu on smaller screens.
- **Card**: A container with a background, padding, border-radius, and shadow.
- **Button**: Styled with a primary color, hover effects, and transitions.
- **Project Gallery**: A grid of cards to showcase projects, with images and titles.

## Features Implemented

- **Initial Setup**: Basic HTML, CSS, and JS files.
- **Modern Styling**: Implemented a modern design with a card-based layout, light/dark mode, and custom fonts.
- **Navbar Refactoring (Web Component)**:
    - Replaced the static navbar with a reusable `<main-navbar>` Web Component.
- **Project Gallery**: Created a responsive grid-based gallery on the `project.html` page.
- **File Structure**: Organized files into `pages`, `styles`, `scripts`, `components`, and `images` folders for better maintainability.
- **Client-Side Routing**: 
    - Implemented a simple client-side router in `scripts/router.js` to create a single-page application (SPA).
- **"About Me" Page**: Created a new page at `/about` with personal information.
- **SPA Routing Fix**: Corrected relative asset paths to work with the client-side router, preventing 404 errors on refresh.

---

## **Current Plan: Website Modernization (v2)**

### **Objective:**
To transform the existing website into a visually stunning, modern, and professional personal portfolio. The update will focus on a bold aesthetic, improved user experience, and the incorporation of advanced design elements.

### **Plan Details:**

1.  **Homepage Revamp (`home.html`):**
    *   **Hero Section:** Introduce a full-width hero section with a captivating headline, a personal introduction, and a clear call-to-action (CTA) button (e.g., "View My Work").
    *   **Personalization:** Integrate the profile image (`assets/images/Poompipat-Phowee.png`) into the hero section to create a strong personal brand.
    *   **Content Sections:** Add structured sections for "About Me," "My Projects," and "Contact," providing a quick overview and linking to the respective pages.

2.  **Global Stylesheet Overhaul (`styles/style.css`):**
    *   **Color Palette:** Implement a new, vibrant, and energetic color palette using `oklch`.
    *   **Background Texture:** Apply a subtle noise texture to the main background for a premium, tactile feel.
    *   **Depth & Shadow:** Utilize multi-layered drop shadows on cards and interactive elements to create a sense of depth and a "lifted" appearance.
    *   **Interactive Glow:** Add a "glow" effect to buttons and other interactive elements on hover/focus to enhance user feedback.
    *   **Typography:** Refine the typographic scale with more expressive and hierarchical font sizes for headings, subheadings, and body text.
    *   **Animation:** Introduce subtle animations and transitions for a smoother, more dynamic user experience.

3.  **Component Enhancements:**
    *   **Project Cards (`project.html`):** Redesign project cards with improved hover effects, cleaner layouts, and the new shadow style.
    *   **Buttons:** Restyle all buttons to be more prominent and interactive, incorporating the new color and glow effects.

4.  **Content Structuring:**
    *   **About Page (`about.html`):** Reformat the page for better readability, potentially including the profile image.
    *   **Resume Page (`resume.html`):** Organize the resume into clear, scannable sections (e.g., Work Experience, Education, Skills, Certifications).

5.  **Accessibility & Responsiveness:**
    *   Ensure all new designs and components are fully responsive across mobile, tablet, and desktop screens.
    *   Verify that the color contrast ratios and keyboard navigation meet a11y standards.
