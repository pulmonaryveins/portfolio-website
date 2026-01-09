# Modern Portfolio Website

A clean, minimalist portfolio website built with React and Tailwind CSS featuring a black and white UI theme with dark mode support.

## Features

- **Modern Design**: Clean, minimalist black and white UI
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle animations using Framer Motion
- **Floating Navigation**: Modern floating dock navigation from Aceternity UI
- **Sections**:
  - Hero section with introduction and CTAs
  - About Me with Education, Coursework, and Skills
  - Projects showcase with GitHub links
  - Experience timeline
  - Certificates grid
  - Contact form with social links

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd WEB-PORTFOLIO
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/sections/Hero.jsx`):
   - Name
   - Role/Title
   - Tagline
   - Social media links

2. **About Section** (`src/components/sections/About.jsx`):
   - Education details
   - Coursework
   - Skills (technical and soft)

3. **Projects Section** (`src/components/sections/Projects.jsx`):
   - Add your projects with images, descriptions, and GitHub links

4. **Experience Section** (`src/components/sections/Experience.jsx`):
   - Add your work experience

5. **Certificates Section** (`src/components/sections/Certificates.jsx`):
   - Add your certificates with images and links

6. **Contact Section** (`src/components/sections/Contact.jsx`):
   - Update email and location
   - Update social media links

### Colors and Styling

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#1a1a1a',
    border: '#2a2a2a',
  },
  light: {
    bg: '#ffffff',
    card: '#f8f8f8',
    border: '#e5e5e5',
  }
}
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Deployment

You can deploy this portfolio to various platforms:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder to Netlify
- **GitHub Pages**: Use `gh-pages` package

## Project Structure

```
WEB-PORTFOLIO/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Projects.jsx
│   │   └── ui/
│   │       └── FloatingDock.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## License

This project is open source and available under the MIT License.

## Credits

- Floating Dock component inspired by [Aceternity UI](https://ui.aceternity.com/)
- Icons by [Lucide](https://lucide.dev/)
