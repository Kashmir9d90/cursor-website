# AWS Amplify Deployment Guide

This guide will walk you through deploying your resume website to AWS Amplify hosting.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, Bitbucket, etc.)
3. **Node.js**: Ensure you have Node.js installed locally for testing

## Step 1: Prepare Your Code

### 1.1 Test Locally First
```bash
# Install dependencies
npm install

# Test the build locally
npm run build

# Test the development server
npm run dev
```

### 1.2 Commit Your Changes
```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Ready for deployment to AWS Amplify"

# Push to your repository
git push origin main
```

## Step 2: Set Up AWS Amplify

### 2.1 Access AWS Amplify Console
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Sign in with your AWS account
3. Click **"New app"** → **"Host web app"**

### 2.2 Connect Your Repository
1. Choose your Git provider (GitHub, GitLab, Bitbucket, etc.)
2. Authorize AWS Amplify to access your repositories
3. Select your repository containing the website code
4. Choose the branch you want to deploy (usually `main` or `master`)

### 2.3 Configure Build Settings
AWS Amplify will auto-detect your React app, but you can customize the build settings:

**Build settings should be:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 2.4 Review and Deploy
1. Review the build settings
2. Click **"Save and deploy"**
3. Wait for the build to complete (usually 2-5 minutes)

## Step 3: Configure Custom Domain (Optional)

### 3.1 Add Custom Domain
1. In your Amplify app, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain name (e.g., `yourname.com`)
4. Follow the DNS configuration instructions

### 3.2 DNS Configuration
You'll need to add CNAME records to your domain provider:
- **Name**: `www` (or subdomain of your choice)
- **Value**: Your Amplify app URL (provided by AWS)

## Step 4: Environment Variables (If Needed)

If your app uses environment variables:

1. Go to **"Environment variables"** in your Amplify app
2. Add any required variables (API keys, etc.)
3. Redeploy the app

## Step 5: Continuous Deployment

### 5.1 Automatic Deployments
- Every push to your main branch will automatically trigger a new deployment
- You can configure branch-specific deployments

### 5.2 Manual Deployments
- Go to **"All builds"** in your Amplify app
- Click **"Redeploy this version"** for manual deployments

## Step 6: Monitoring and Maintenance

### 6.1 Monitor Builds
- Check build logs for any errors
- Monitor deployment status
- Set up notifications for build failures

### 6.2 Performance Monitoring
- Use AWS CloudWatch for performance monitoring
- Monitor page load times and user experience

## Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check build logs for specific errors
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **404 Errors**
   - Ensure your `amplify.yml` is correctly configured
   - Check that the `baseDirectory` points to the correct build output

3. **Environment Variables**
   - Make sure all required environment variables are set in Amplify
   - Redeploy after adding new environment variables

### Build Commands Reference:
```bash
# Install dependencies
npm ci

# Build the project
npm run build

# Test locally
npm run dev

# Lint code
npm run lint
```

## Cost Considerations

- **Free Tier**: AWS Amplify offers a generous free tier
- **Pricing**: After free tier, you pay for build minutes and bandwidth
- **Custom Domains**: SSL certificates are free with Amplify

## Security Best Practices

1. **Environment Variables**: Never commit sensitive data to your repository
2. **Access Control**: Use IAM roles and policies to control access
3. **HTTPS**: Always use HTTPS in production (automatic with Amplify)

## Next Steps

1. **SEO Optimization**: Add meta tags and optimize for search engines
2. **Analytics**: Add Google Analytics or AWS Analytics
3. **Performance**: Optimize images and implement lazy loading
4. **Backup**: Set up regular backups of your code and configuration

## Support Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
- [AWS Support](https://aws.amazon.com/support/)

---

**Your website should now be live and accessible via the provided Amplify URL!** 