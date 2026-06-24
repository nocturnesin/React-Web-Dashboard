# Professional Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, and TailwindCSS. Designed to impress technical hiring managers with a clean, professional UI/UX.

## Features

- **Animated Hero Section** - Smooth entrance animations with Framer Motion
- **Projects Section** - Fetches data from mock API with loading states and error handling
- **Project Details Modal** - Interactive modal for detailed project information
- **Skills Section** - Animated progress bars organized by category
- **Contact Form** - Full validation with success/error states
- **Dark/Light Mode** - Persistent theme toggle with localStorage
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Scroll Animations** - Elements animate as they enter the viewport
- **Download CV Button** - Easy access to resume
- **GitHub Integration** - Links to GitHub profile and repositories

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to cPanel

### Option 1: Manual Upload

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your cPanel's `public_html` directory using:
   - cPanel File Manager
   - FTP client (FileZilla, etc.)
   - SFTP

3. Ensure your `.htaccess` file (if needed) is in the root

### Option 2: Git Deployment (Recommended)

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab

3. In cPanel, use Git Version Control to clone your repository

4. Set up deployment hooks or manually pull changes

### Important Notes for cPanel

- The project uses client-side routing (React Router), so you may need to configure your server to handle SPA routing
- Add this to your `.htaccess` file in the `public_html` directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

- Ensure your hosting supports Node.js if you want to use server-side features (optional for this static site)

## Customization

### Update Personal Information

Edit the following files to personalize your portfolio:

1. **Projects**: `src/data/projects.ts` - Add your own projects with images, descriptions, and links
2. **Skills**: `src/data/skills.ts` - Update your skill levels and categories
3. **Contact**: Update the email in `src/components/sections/Contact.tsx`
4. **Social Links**: Update GitHub, LinkedIn, and Twitter links in:
   - `src/components/layout/Navbar.tsx`
   - `src/components/layout/Footer.tsx`
5. **Resume**: Add your resume PDF as `resume.pdf` in the `public` folder

### Theme Customization

Edit `tailwind.config.js` to customize:
- Primary colors
- Font families
- Animation timings
- Custom utilities

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Modal.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useModal.ts
├── pages/
│   └── Home.tsx
├── router/
│   └── AppRouter.tsx
├── utils/
│   └── cn.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Minimal bundle size with Vite
- CSS purging with TailwindCSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Credits

- Icons by [Lucide](https://lucide.dev/)
- Images by [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/)
