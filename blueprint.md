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
  - `navbar.html`: HTML structure for the navigation bar.
  - `navbar.js`: Defines the `<main-navbar>` custom element.
- `images/`: Folder for project images.
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
    - Fetches its HTML from `components/navbar.html` and styles from `styles/style.css`.
    - Includes a brand name and links.
    - Responsive design that collapses into a hamburger menu on smaller screens.
- **Card**: A container with a background, padding, border-radius, and shadow.
- **Button**: Styled with a primary color, hover effects, and transitions.
- **Project Gallery**: A grid of cards to showcase projects, with images and titles.

## Features Implemented

- **Initial Setup**: Basic HTML, CSS, and JS files.
- **Modern Styling**: Implemented a modern design with a card-based layout, light/dark mode, and custom fonts.
- **Navbar Refactoring (Web Component)**:
    - Replaced the static navbar in all HTML files with a reusable `<main-navbar>` Web Component.
    - Created `components/navbar.js` to define the custom element and its behavior (including the hamburger menu toggle).
    - Separated the navbar's HTML into `components/navbar.html`.
    - This makes the navbar easier to maintain and update across the entire site from a single source.
- **Project Gallery**: Created a responsive grid-based gallery on the `project.html` page.
- **File Structure**: Organized files into `pages`, `styles`, `scripts`, `components`, and `images` folders for better maintainability.
- **Client-Side Routing**: 
    - Implemented a simple client-side router in `scripts/router.js` to create a single-page application (SPA).
    - The router dynamically loads page content into the `index.html` shell without full page reloads.
    - The router handles browser history (back/forward buttons) using the History API.
- **"About Me" Page**: Created a new page at `/about` with personal information. Added a link to this page in the main navigation bar.