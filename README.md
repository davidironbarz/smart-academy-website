# Smart Academy Website

A modern, responsive website for Smart Academy, a school in Bong County, Liberia. Built with Next.js 14 and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with blue and white theme
- **Complete Pages**: Home, About, Academics, Admissions, Student Life, and Contact
- **Interactive Elements**: Contact form, tabbed navigation, and responsive components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

1. **Home**: Hero banner, about snippet, academics highlight, contact info
2. **About**: History, mission, vision, leadership message, faculty information
3. **Academics**: Teaching philosophy, academic programs (Nursery, Kindergarten, Primary)
4. **Admissions**: Requirements, enrollment steps, tuition information
5. **Student Life**: Sports, clubs, activities, gallery placeholder, testimonials
6. **Contact**: Contact information, contact form, map placeholder, FAQ

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: JavaScript (React)
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
smart-academy/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── about/
│   │   └── page.js
│   ├── academics/
│   │   └── page.js
│   ├── admissions/
│   │   └── page.js
│   ├── student-life/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Customization

### Colors
The website uses a blue and white theme. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
    600: '#2563eb', // Main blue
    // ... more shades
  }
}
```

### Content
- Update school information in each page component
- Replace placeholder images with actual photos
- Modify contact information in Footer.js and Contact page
- Update tuition fees and admission requirements

### Styling
- Modify `app/globals.css` for global styles
- Use Tailwind utility classes for component-specific styling
- Custom components are defined in the `@layer components` section

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

This project is created for Smart Academy, Bong County, Liberia.
