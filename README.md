git remote add origin https://github.com/StephenZepeda/momentum-track-days.git
git branch -M main
git push -u origin main# Momentum Track Days

Premium track day experiences for automotive enthusiasts at California's Thunderhill Raceway.

## Overview

A modern React-based web application for Momentum Track Days, featuring:

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dynamic Slider** - Auto-advancing hero image carousel with manual controls
- **Interactive FAQs** - Smooth accordion interface with categorized questions
- **Contact Form** - Fully functional contact form with validation
- **Mobile Navigation** - Custom hamburger menu for mobile devices

## Tech Stack

- **React 18** - Modern UI library
- **React Router 6** - Client-side routing
- **CSS3** - Responsive styling with mobile-first approach
- **React Scripts 5** - Development and build tooling

## Features

### Pages
- **Home** - Hero section with image slider, track layouts, and ticket information
- **About** - Mission statement, team overview, and company values
- **Contact** - Contact form with location and business information
- **FAQ** - Categorized frequently asked questions with accordion interface

### Responsive Features
- Mobile hamburger navigation
- Touch-friendly interface (44px minimum touch targets)
- Optimized layouts for tablets and phones
- Smooth scroll-to-top on page navigation

### Color Scheme
- Primary: Baby Blue (#89CFF0)
- Secondary: Dark Blue (#4A90A4)
- Background: Dark (#1a1a1a)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/StephenZepeda/momentum-track-days.git
cd momentum-track-days
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` to customize the port or other settings.

4. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the development server with hot reload.

**Custom Port:**
```bash
PORT=5000 npm start
```

This will start the server on `http://localhost:5000` instead of the default port 3000.

### Linux/Ubuntu Quick Start

Use the provided start script for easier development:

```bash
chmod +x start.sh
./start.sh          # Starts on default port 3000
./start.sh 5000     # Starts on custom port 5000
```

### HTTPS Development (Linux/Ubuntu)

To run with HTTPS enabled locally:

**First time setup:**
```bash
chmod +x generate-certs.sh
./generate-certs.sh     # Generate self-signed certificates
chmod +x start-https.sh
./start-https.sh        # Start with HTTPS
```

**Subsequent runs:**
```bash
./start-https.sh          # Starts on port 3000 with HTTPS
./start-https.sh 5000     # Starts on custom port with HTTPS
```

Visit `https://localhost:3000` (accept the SSL warning for self-signed certificate)

**Note:** Self-signed certificates will show a browser warning - this is normal for local development.

### `npm run build`
Creates an optimized production build in the `build/` folder.

### `npm test`
Launches the test runner (if tests are added).

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header with mobile menu
│   └── Footer.jsx      # Footer with links and contact info
├── pages/
│   ├── Home.jsx        # Homepage with slider
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact form page
│   └── FAQ.jsx         # FAQ accordion page
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles
public/
└── index.html          # HTML template
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- CSS animations using hardware acceleration
- Minimal bundle size with React Scripts

## Deployment

To deploy to GitHub Pages or other hosting:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build/` folder to your hosting platform

## License

© 2025 Momentum Track Days. All rights reserved.

## Contact

- Email: info@momentumtrackdays.com
- Location: California Thunderhill Raceway
- Hours: Mon-Sun, 9AM-5PM PST
