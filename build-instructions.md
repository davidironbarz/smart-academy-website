# Build Instructions for Smart Academy Website

## Prerequisites
- Node.js 18+ and npm installed
- Git (optional, for version control)

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Option 3: Manual Build
1. Run `npm run build`
2. Upload the `.next` folder to your hosting provider

## Project Structure
```
smart-academy/
├── app/                 # Next.js 14 App Router
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── README.md           # Documentation
```

## Customization
- Update contact info in Footer.js and Contact page
- Replace placeholder images with real photos
- Modify school information in each page
- Customize colors in tailwind.config.js
