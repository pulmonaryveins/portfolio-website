# Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy React applications.

### Steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Production Deployment:**
   ```bash
   vercel --prod
   ```

### Using Vercel Dashboard:

1. Go to [vercel.com](https://vercel.com)
2. Sign up or login
3. Click "New Project"
4. Import your Git repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

**Custom Domain:** Add your custom domain in Project Settings → Domains

---

## Option 2: Netlify

### Using Netlify CLI:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy
   ```

4. **Production deployment:**
   ```bash
   netlify deploy --prod
   ```

### Using Netlify Dashboard:

1. Go to [netlify.com](https://netlify.com)
2. Sign up or login
3. Drag and drop your `dist` folder
4. Or connect your Git repository for auto-deployment

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

---

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default {
     base: '/repository-name/',
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

## Option 4: Firebase Hosting

### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

4. **Configuration:**
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Automatic builds: `No`

5. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Option 5: AWS S3 + CloudFront

### Steps:

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket:**
   - Go to AWS S3 console
   - Create a new bucket
   - Enable static website hosting

3. **Upload files:**
   - Upload contents of `dist` folder to S3
   - Make files public

4. **Configure CloudFront (Optional but recommended):**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure SSL certificate

5. **Update bucket policy:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

---

## Pre-Deployment Checklist

- [ ] Build the project and test locally: `npm run build && npm run preview`
- [ ] Update all personal information
- [ ] Test all links (projects, social media, email)
- [ ] Add your resume PDF to the `public` folder
- [ ] Update meta tags in `index.html`
- [ ] Test responsive design on multiple devices
- [ ] Test dark mode functionality
- [ ] Check for console errors
- [ ] Optimize images (use WebP format if possible)
- [ ] Test contact form
- [ ] Update favicon
- [ ] Add Google Analytics (optional)

---

## Performance Optimization

### 1. Image Optimization

Use optimized images:
- Convert to WebP format
- Compress images (try [TinyPNG](https://tinypng.com/))
- Use appropriate sizes (max 800x600 for project images)
- Consider lazy loading for images below the fold

### 2. Enable Gzip/Brotli Compression

Most hosting platforms enable this automatically. For custom servers, configure compression.

### 3. Add Analytics (Optional)

**Google Analytics:**

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

---

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

### DNS Records (General):
- Type: `A` or `CNAME`
- Name: `@` or `www`
- Value: (provided by hosting platform)
- TTL: `Auto` or `3600`

---

## SSL Certificate

Most modern hosting platforms provide free SSL certificates automatically via Let's Encrypt.

---

## Continuous Deployment

### Using Git Hooks:

Most platforms support automatic deployment when you push to your repository:

1. Connect your Git repository (GitHub, GitLab, Bitbucket)
2. Configure branch for deployment (usually `main` or `master`)
3. Every push to that branch triggers automatic deployment

---

## Troubleshooting

### Build fails:
- Check Node.js version (should be v18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for missing dependencies

### 404 errors on refresh:
- Configure SPA redirects on your hosting platform
- For Netlify, create `public/_redirects`:
  ```
  /* /index.html 200
  ```

### Images not loading:
- Check image URLs are correct
- Use absolute paths for images in `public` folder
- Ensure images are included in build

---

## Environment Variables

If you use environment variables (like API keys):

1. **Vercel:** Add in Project Settings → Environment Variables
2. **Netlify:** Add in Site Settings → Build & Deploy → Environment
3. **GitHub Pages:** Not recommended for sensitive data

---

## Monitoring

After deployment, monitor your site:
- Use Google Search Console
- Set up uptime monitoring (e.g., UptimeRobot)
- Check Core Web Vitals in PageSpeed Insights

---

## Need Help?

- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

Happy deploying! 🚀
