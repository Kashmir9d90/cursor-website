# Setup Instructions

## Prerequisites

Before running this project, you need to install Node.js and npm:

### Installing Node.js

1. **Download Node.js**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS version (recommended)
   - Run the installer and follow the setup wizard

2. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```

## Project Setup

Once Node.js is installed, follow these steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

1. **Update Personal Information**
   Edit `src/data/personalInfo.ts` with your details

2. **Update Content**
   - Skills: `src/data/skills.ts`
   - Experience: `src/data/experience.ts`
   - Projects: `src/data/projects.ts`
   - Education: `src/data/education.ts`

3. **Add Images**
   Place images in the `public/` directory and reference them in your data files

## Deployment

### AWS Amplify

1. Push your code to GitHub
2. Connect your repository to AWS Amplify
3. The build settings are already configured in `amplify.yml`
4. Amplify will automatically deploy your site

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your web server

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   - Change the port in `vite.config.ts`
   - Or kill the process using port 3000

2. **Dependencies not found**
   - Delete `node_modules/` and `package-lock.json`
   - Run `npm install` again

3. **TypeScript errors**
   - Make sure all dependencies are installed
   - Check that TypeScript is properly configured

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version is 16 or higher
4. Check the README.md for detailed documentation 