# Taghash CSCRF Compliance Platform

A modern, responsive landing page designed for AIF Managers to navigate SEBI's Cyber Security and Cyber Resilience Framework (CSCRF) mandate. This project showcases Taghash's end-to-end compliance platform with a clean, professional UI.

## 🚀 Features

- **Modern UI/UX**: Built with React and Tailwind CSS for a premium, professional look.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Smooth Navigation**: Section-based navigation with smooth scrolling (Overview, Timeline, Requirements, etc.).
- **Interactive Components**:
  - **Hero Section**: High-impact introduction with clear CTA.
  - **Timeline**: Visual breakdown of CSCRF deadlines.
  - **Requirements Checklist**: Interactive list of 11 mandatory controls.
  - **Control Centre**: Overview of platform modules.
- **Consistent Design System**: Unified typography (Inter font), color palette, and button styling.

## 📦 Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory:

    ```bash
    cd CSCRF
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    ```

## 📂 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CSCRFHero.jsx
│   ├── CSCRFTimeline.jsx
│   ├── CSCRFCategory.jsx
│   ├── AIFManager.jsx
│   ├── CSCRFControlCentre.jsx
│   ├── CSCRFDeadline.jsx
│   └── Footer.jsx
├── pages/           # Main page views
│   └── Home.jsx
├── App.jsx          # Main application entry
└── main.jsx         # React DOM rendering
```

---
