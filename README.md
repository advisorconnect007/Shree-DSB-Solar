# Shree DSB Solar — React Website

A modern, fully animated solar services website built with:
- ⚛️ **React 18**
- 🎨 **Tailwind CSS**
- 🖼️ **Lucide React** icons
- 📱 **Fully responsive** (mobile, tablet, desktop)

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
  assets/
    hero-solar.jpg        ← Real solar farm photo (hero background + testimonials)
  components/
    Navbar.jsx            ← Sticky nav with mobile hamburger menu
    Hero.jsx              ← Full-screen hero with parallax + count-up stats
    Services.jsx          ← 6 service cards with hover animations
    Calculator.jsx        ← Solar price calculator (kW mode & bill mode)
    Pricing.jsx           ← 6 pricing packages
    Testimonials.jsx      ← 6 reviews with real solar photo
    WhyUs.jsx             ← 6 trust signals on navy gradient bg
    Contact.jsx           ← Lead form + Google Maps
    Footer.jsx            ← Full footer with links
    WhatsApp.jsx          ← Floating WhatsApp button
    useReveal.js          ← Scroll reveal hook
  App.jsx
  index.js
  index.css               ← Tailwind + custom animations
```

## 🔗 Connect Google Sheets (Lead Form)

1. Open [sheets.google.com](https://sheets.google.com) → Create new sheet
2. Add headers in Row 1: `Timestamp | Name | Phone | Service | Location`
3. Click **Extensions → Apps Script** → paste:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.phone, data.service, data.location]);
  return ContentService.createTextOutput('OK');
}
```

4. Click **Deploy → New Deployment → Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the Web App URL
6. Open `src/components/Contact.jsx` and replace:
   ```
   PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE
   ```
   with your URL.

## 📦 Deploy

Upload the `build/` folder to any hosting:
- **Netlify** (drag & drop build folder)
- **Vercel** (connect GitHub repo)
- **GitHub Pages**
- **cPanel** (upload build folder contents to public_html)

---
**Business:** Shree DSB Solar, Bikaner  
**Phone:** +91 9462982929  
**Address:** Y67, Sudarshana Nagar, Bikaner, Rajasthan 334001
