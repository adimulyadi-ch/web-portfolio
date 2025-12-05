# 🌟 Adi Mulyadi - Digital Wordsmith Portfolio

A modern, cyberpunk-themed personal portfolio website showcasing writing, tech articles, and creative fiction. Built with Next.js 15, React 19, and powered by a markdown-based blog system.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

🌐 **Live Demo**: [Coming Soon]

---

## ✨ Features

### 🎨 Stunning Visual Design
- **Cyberpunk Aesthetic** - Neon colors, animated galaxy backgrounds with 600+ stars
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Responsive Design** - Mobile-first approach, works beautifully on all devices
- **Smooth Animations** - Nebulas, UFOs, shooting stars, and interactive elements

### 📝 Markdown-Based Blog System
- **Easy Content Management** - Write blog posts in simple markdown files
- **No Database Required** - File-based content with frontmatter metadata
- **Category Filtering** - Blog, Fiction, Tech Writing, Creative categories
- **Featured Posts** - Highlight your best work
- **Tags System** - Organize and discover content easily
- **Auto-Generated** - Posts automatically appear on the website

### 📧 Contact Integration
- **EmailJS Integration** - Functional contact form with email notifications
- **Form Validation** - Client-side validation for better UX
- **Social Links** - GitHub, Twitter, LinkedIn, Email

### 🛡️ Security & Performance
- Security headers configured
- Environment variables for sensitive data
- Optimized for production deployment
- See [SECURITY.md](./SECURITY.md) for details

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adimulyadi-ch/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📝 Adding Blog Posts

### Quick Guide

1. Navigate to `content/blog/` folder
2. Create a new file: `my-post-name.md`
3. Add frontmatter and content:

```markdown
---
title: "My Blog Post Title"
date: "2024-12-05"
category: "blog"
tags: ["Tag1", "Tag2"]
featured: false
readTime: "5 min"
description: "Brief description"
---

# My Blog Post

Your content here...
```

4. Save the file - it will automatically appear on your website!

📚 **Full Guide**: See [content/HOW_TO_ADD_BLOG_POSTS.md](./content/HOW_TO_ADD_BLOG_POSTS.md)

📋 **Template**: Use [content/blog/_template.md](./content/blog/_template.md) as a starting point

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🏗️ Project Structure

```
├── content/
│   ├── blog/                      # Markdown blog posts
│   │   ├── _template.md           # Blog post template
│   │   └── *.md                   # Your blog posts
│   └── HOW_TO_ADD_BLOG_POSTS.md   # Blog documentation
├── public/
│   ├── am-logo.svg                # Custom logo
│   └── profil.png                 # Profile image
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── blog/              # Blog API endpoint
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page
│   ├── components/
│   │   ├── ui/                    # Shadcn/ui components
│   │   ├── theme-provider.tsx     # Theme context
│   │   └── mode-toggle.tsx        # Dark/Light toggle
│   └── lib/
│       └── blog.ts                # Blog utilities
├── .env.example                   # Environment variables template
├── .env.local                     # Your environment variables (gitignored)
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
├── SECURITY.md                    # Security documentation
└── README.md                      # This file
```

---

## 🎨 Customization

### Update Personal Information

Edit `src/app/page.tsx`:
- Name and title
- Bio and about section
- Social media links
- Contact information

### Change Colors

Edit `src/app/globals.css`:
- Cyan: `#22d3ee`
- Purple: `#a855f7`
- Pink: `#ec4899`

### Replace Logo

Replace `public/am-logo.svg` with your own logo.

### Replace Profile Image

Replace `public/profil.png` with your profile photo.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

📚 **Full Guide**: See [deployment_guide.md](./deployment_guide.md) in the artifacts

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Configure build settings
5. Deploy!

---

## 🔧 Tech Stack

### Core
- **Next.js 15.3.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling

### Blog System
- **gray-matter** - Parse markdown frontmatter
- **remark** - Markdown processor
- **remark-html** - Convert markdown to HTML

### UI Components
- **Shadcn/ui** - Component library
- **Radix UI** - Headless accessible components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Integrations
- **EmailJS** - Contact form email delivery
- **next-themes** - Dark/Light mode

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Adi Mulyadi** - Digital Wordsmith

- Website: [adimulyadi.com](https://adimulyadi.com)
- GitHub: [@adimulyadi-ch](https://github.com/adimulyadi-ch)
- Email: adimulyadi.ch@gmail.com

---

## 🙏 Acknowledgments

- Design inspiration from cyberpunk aesthetics and modern portfolio websites
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

## 📝 Changelog

### Version 1.1.0 (2024-12-05)
- ✅ Markdown-based blog system
- ✅ Blog post template and documentation
- ✅ API endpoint for blog posts
- ✅ EmailJS integration for contact form
- ✅ Updated GitHub username to adimulyadi-ch

### Version 1.0.0 (2024-12-02)
- ✅ Initial release
- ✅ Dark/Light mode
- ✅ Responsive design
- ✅ Security headers
- ✅ Animated galaxy backgrounds
- ✅ Complete portfolio sections

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/adimulyadi-ch/my-portfolio/issues).

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Made with ❤️ and ☕ by Adi Mulyadi**
