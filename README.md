# Resume/Profile Website

A modern, responsive resume and portfolio website built with React, TypeScript, and Tailwind CSS. Designed for deployment on AWS Amplify with automated CI/CD pipeline.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessible**: WCAG 2.1 AA compliant design

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: AWS Amplify

## 📁 Project Structure

```
resume-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/               # Data files
│   │   ├── personalInfo.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── education.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── amplify.yml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd resume-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Customization

1. **Update Personal Information**
   Edit `src/data/personalInfo.ts` with your details:
   ```typescript
   export const personalInfo: PersonalInfo = {
     name: "Your Name",
     title: "Your Title",
     email: "your.email@example.com",
     // ... other details
   };
   ```

2. **Update Skills**
   Modify `src/data/skills.ts` to reflect your skills and proficiency levels.

3. **Update Experience**
   Edit `src/data/experience.ts` with your work history.

4. **Update Projects**
   Modify `src/data/projects.ts` with your portfolio projects.

5. **Update Education**
   Edit `src/data/education.ts` with your academic background.

6. **Customize Styling**
   - Update colors in `tailwind.config.js`
   - Modify component styles in individual component files
   - Update global styles in `src/index.css`

## 🚀 Deployment

### AWS Amplify Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository
   - Select the main branch

3. **Configure Build Settings**
   - Build settings are already configured in `amplify.yml`
   - Amplify will automatically detect the React app

4. **Deploy**
   - Amplify will automatically build and deploy your app
   - You'll get a unique URL for your website

### Custom Domain (Optional)

1. **Add Custom Domain**
   - In Amplify Console, go to "Domain management"
   - Add your custom domain
   - Follow the DNS configuration instructions

2. **SSL Certificate**
   - Amplify automatically provisions SSL certificates
   - Your site will be accessible via HTTPS

## 📝 Content Management

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Updating Content

- **Personal Info**: Edit `src/data/personalInfo.ts`
- **Skills**: Modify `src/data/skills.ts`
- **Experience**: Update `src/data/experience.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Education**: Modify `src/data/education.ts`

### Adding Images

1. Place images in the `public/` directory
2. Reference them in your data files:
   ```typescript
   avatar: "/your-image.jpg"
   ```

## 🎨 Customization Guide

### Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your colors
  }
}
```

### Typography

The website uses Inter font by default. To change:
1. Update Google Fonts link in `index.html`
2. Modify font family in `tailwind.config.js`

### Animations

Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  // ... add your custom animations
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable UI components
- **Data**: Centralized data management
- **Types**: TypeScript type definitions
- **Styles**: Tailwind CSS utilities and custom styles

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## 🚀 Performance

- Lazy loading for images
- Optimized bundle size
- Efficient animations
- Fast loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Contact me through the website contact form

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS** 