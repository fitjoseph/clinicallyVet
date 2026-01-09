# ClinicallyVeti - cPanel Deployment Instructions

## 📁 Files to Upload

After running `npm run build`, upload the contents of the `dist` folder to your cPanel hosting:

### Required Files:
- `index.html` (main entry point)
- `assets/` folder (contains all CSS, JS, and other assets)
- `favicon.ico` (main favicon)
- `favicon.svg` (modern SVG favicon)
- `apple-touch-icon.png` (iOS home screen icon)

## 🚀 cPanel Deployment Steps

### Step 1: Access cPanel File Manager
1. Log into your cPanel account
2. Open "File Manager"
3. Navigate to `public_html` (or your domain's document root)

### Step 2: Upload Files
1. Upload all contents from the `dist` folder to `public_html`
2. Make sure `index.html` is in the root of `public_html`
3. Ensure the `assets` folder and favicon files are uploaded with all their contents

### Step 3: Set Permissions (if needed)
- Files: 644
- Folders: 755

### Step 4: Configure URL Rewriting (for React Router)
Create a `.htaccess` file in your `public_html` directory with the following content:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 🌐 Domain Configuration

### Custom Domain Setup:
1. Point your domain to your hosting server
2. Update DNS records if needed
3. Ensure SSL certificate is installed

### Subdomain Setup:
1. Create subdomain in cPanel
2. Point subdomain to the folder containing your files

## ✅ Testing Your Site

After deployment:
1. Visit your domain
2. Test all navigation links
3. Verify images load correctly
4. Check responsive design on mobile
5. Test contact form functionality

## 🔧 Troubleshooting

### Common Issues:
- **404 errors on page refresh**: Make sure `.htaccess` is properly configured
- **Images not loading**: Check file paths and permissions
- **CSS/JS not loading**: Verify `assets` folder uploaded correctly

### File Structure Should Look Like:
```
public_html/
├── index.html
├── .htaccess
├── vite.svg
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    └── [other asset files]
```

## 📞 Support

If you encounter issues:
1. Check cPanel error logs
2. Verify file permissions
3. Ensure all files uploaded correctly
4. Contact your hosting provider if needed

---

**Your ClinicallyVeti site is now ready for production! 🎉**