# 🚀 Deployment Guide - Roots & Harvest

Your site is configured and ready to deploy to Vercel!

## ✅ Deployment Checklist

- [x] `.gitignore` created (node_modules, .next, .env files excluded)
- [x] `vercel.json` configured (build, dev, install commands set)
- [x] Git repository initialized
- [x] Initial commit created

## 📋 Next Steps

### Option 1: Deploy via Vercel CLI (Quickest)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. From the project directory, run:
cd /root/food-site-deploy
vercel

# 3. Follow the prompts:
#    - Confirm project name
#    - Link to new Vercel project
#    - Allow Vercel to modify package.json (if asked)

# Your site will be live in ~2 minutes!
```

### Option 2: Deploy via GitHub (Recommended for Teams)

```bash
# 1. Create a new GitHub repository at github.com/new

# 2. Push this code:
cd /root/food-site-deploy
git remote add origin https://github.com/YOUR_USERNAME/food-site.git
git branch -M main
git push -u origin main

# 3. Go to vercel.com/new
#    - Select "Import Git Repository"
#    - Paste your GitHub repo URL
#    - Click "Import"
#    - Vercel will detect it's a Next.js project
#    - Click "Deploy"

# Your site will be live in ~2 minutes!
```

## 🎯 Before Deploying, Customize:

1. **Edit `content.ts`:**
   - Brand name, tagline, WhatsApp number
   - Replace placeholder text with real content
   - Update YouTube video IDs

2. **Add Real Images:**
   - Create `/public/images/` folder
   - Add: `hero-bg.jpg`, `about-farmer.jpg`, `product-*.jpg`
   - Reference them in components (see README.md for examples)

3. **Test Locally:**
   ```bash
   npm install
   npm run dev
   # Visit http://localhost:3000
   ```

## 📝 Environment Variables (Optional)

If using Supabase for persistent likes:

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Vercel will ask for these during setup.

## 🔍 Verify After Deploy

1. Visit your Vercel URL
2. Test all sections scroll smoothly
3. Test WhatsApp CTA button (opens WhatsApp)
4. Test Like + Share buttons
5. Test responsive design on mobile

## 🆘 Troubleshooting

**Build fails?**
- Check `package.json` has all dependencies
- Ensure no TypeScript errors: `npm run build`

**Site is slow?**
- Add real images instead of placeholders
- Enable image optimization in `next.config.js`

**Need custom domain?**
- Go to Vercel project settings
- Add domain name
- Follow DNS instructions

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- See README.md for customization details
