# Image Assets Guide

This folder contains all image assets for your portfolio website.

## 📁 Folder Structure

```
public/images/
├── profile/          # Profile photos
├── projects/         # Project screenshots and images
├── design/           # Design work showcase (1080x1080 square images)
└── certificates/     # Certificate images
```

## 🖼️ How to Add Images

### Profile Image (About Section)

1. **Add your profile photo:**
   - Place your profile image in `public/images/profile/`
   - Name it `profile.jpg` (or `.png`, `.webp`)
   - Recommended size: **800x800px** (square aspect ratio)
   - Maximum file size: **500KB** for optimal loading

2. **If using a different filename:**
   - Update the path in `src/components/sections/About.jsx` line ~119:
   ```jsx
   src="/images/profile/your-image-name.jpg"
   ```

### Project Images

1. **Add project images:**
   - Place images in `public/images/projects/`
   - Use descriptive names: `ecommerce-1.jpg`, `ecommerce-2.jpg`, etc.
   - Recommended size: **1200x800px** (3:2 aspect ratio)
   - Maximum file size: **800KB** per image

2. **Update Projects section:**
   - Edit `src/components/sections/Projects.jsx`
   - Replace the Unsplash URLs with local paths:
   ```jsx
   image: "/images/projects/ecommerce-1.jpg"
   images: [
     "/images/projects/ecommerce-1.jpg",
     "/images/projects/ecommerce-2.jpg",
     "/images/projects/ecommerce-3.jpg"
   ]
   ```

### Design Images

1. **Add design work images:**
   - Place images in `public/images/design/`
   - Use descriptive names: `brand-identity.jpg`, `mobile-app-ui.jpg`, etc.
   - **Required size: 1080x1080px** (1:1 square aspect ratio)
   - Maximum file size: **800KB** per image

2. **Update Design section:**
   - Edit `src/components/sections/Design.jsx`
   - Replace the placeholder paths with your images:
   ```jsx
   image: "/images/design/brand-identity.jpg"
   ```

### Certificate Images

1. **Add certificate images:**
   - Place certificate images in `public/images/certificates/`
   - Use descriptive names: `aws-certificate.jpg`, `react-certificate.jpg`, etc.
   - Recommended size: **1920x1080px** (16:9 aspect ratio) or actual certificate resolution
   - Maximum file size: **1MB** per certificate

2. **Update Certificates section:**
   - Edit `src/components/sections/Certificates.jsx`
   - Replace the Unsplash URLs with local paths:
   ```jsx
   image: "/images/certificates/aws-certificate.jpg"
   ```

## 💡 Best Practices

### Image Optimization
- Use **JPG** for photos (better compression)
- Use **PNG** for images with transparency or text
- Use **WebP** for modern browsers (better quality + smaller size)
- Optimize images before uploading using tools like:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/)

### Naming Conventions
- Use **lowercase** and **hyphens** for file names
- Be **descriptive**: `ecommerce-homepage.jpg` instead of `image1.jpg`
- Add **numbers** for multiple images: `project-1.jpg`, `project-2.jpg`

### Recommended Sizes
| Type | Dimensions | Aspect Ratio | File Size |
|------|------------|--------------|-----------|
| Profile Photo | 800x800px | 1:1 | < 500KB |
| Project Images | 1200x800px | 3:2 | < 800KB |
| Design Images | 1080x1080px | 1:1 | < 800KB |
| Certificates | 1920x1080px | 16:9 | < 1MB |

## 🚀 Quick Start Example

1. **Add your profile photo:**
   ```
   public/images/profile/profile.jpg
   ```

2. **Add project images:**
   ```
   public/images/projects/ecommerce-1.jpg
   public/images/projects/ecommerce-2.jpg
   public/images/projects/task-app-1.jpg
   ```

3. **Add design images:**
   ```
   public/images/design/brand-identity.jpg
   public/images/design/mobile-app-ui.jpg
   public/images/design/portfolio-design.jpg
   ```

4. **Add certificates:**
   ```
   public/images/certificates/aws-developer.jpg
   public/images/certificates/react-meta.jpg
   ```

5. **The portfolio will automatically load these images!**

## 🔧 Troubleshooting

**Image not showing?**
- Check the file path is correct (case-sensitive)
- Ensure the file is in the `public/images/` folder
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console for errors

**Image too large?**
- Compress the image using online tools
- Resize to recommended dimensions
- Convert to WebP format for better compression

**Need placeholder images?**
- The code has fallback placeholders if images fail to load
- You can use free stock photos from [Unsplash](https://unsplash.com/) temporarily
