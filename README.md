## Hydro Build (tehrov.in)

Indoor Hydroponic Rescue & Space-Optimized Apartment Builds in India

Production React + Vite + Tailwind CSS web application for tehrov.in. Features practical hydroponic troubleshooting, active DWC conversions, under-₹1,200 to ₹2,000 budget build blueprints, 16 Indian city water TDS/climate profiles, and real first-person build stories.

🛠 Tech Stack

Framework: React 18 + Vite

Styling: Tailwind CSS (Custom Botanical Daylight & Deep Forest Dark Theme via CSS custom properties)

Routing: React Router v6 (SPA routing with .htaccess fallback for Hostinger Apache/LiteSpeed)

Icons: Lucide React

Backend / API Stub: Node.js Express (server/) with endpoints for /api/comments and /api/inquiries (with silent frontend localStorage fallback)

SEO & Structured Data: Dynamic document.title, <meta name="description">, OpenGraph tags, Google JSON-LD (LocalBusiness, BlogPosting, FAQPage), sitemap.xml, and robots.txt

📁 Project Structure

tehrov-web/
├── public/
│   ├── .htaccess                  # Apache/LiteSpeed rewrite rule for Hostinger SPA
│   ├── robots.txt                 # Search crawler rules pointing to sitemap.xml
│   ├── sitemap.xml                # Comprehensive XML sitemap for tehrov.in
│   └── assets/
│       ├── logo.webp              # Universal transparent official HydroBuild logo
│       ├── logo-light.webp        # Light-mode transparent logo
│       ├── logo-dark.webp         # Dark-mode transparent logo
│       └── blog/                  # Blog post webp thumbnails
├── server/                        # Backend API stubs for senior engineer / DB integration
│   ├── index.js                   # Express server entry point (PORT=4000)
│   ├── routes/
│   │   ├── comments.routes.js     # GET & POST /api/comments
│   │   └── inquiries.routes.js    # POST /api/inquiries (consultation form)
│   └── controllers/
│       ├── comments.controller.js # Comment validation & DB hook placeholders
│       └── inquiries.controller.js
├── src/
│   ├── api/
│   │   └── client.js              # Frontend API client with offline fallback
│   ├── config/
│   │   └── siteConfig.js          # Brand metadata, phone, email, and navigation config
│   ├── context/
│   │   └── ThemeContext.jsx       # Light/Dark mode state with localStorage persistence
│   ├── data/
│   │   ├── servicesData.js        # 2 service categories, 4 warning signs & 12 checkpoints
│   │   ├── blogsData.js           # 9 real WordPress articles with HTML, tags & comments
│   │   ├── citiesData.js          # 16 Indian city water TDS & temperature profiles
│   │   ├── faqData.js             # 5 core homeowner FAQs
│   │   └── legalData.js           # Privacy Policy, Disclaimer, and Terms & Conditions
│   ├── components/
│   │   ├── Navbar.jsx             # Header with logo, legal dropdown, sun/moon switch
│   │   ├── Footer.jsx             # Multi-column footer with contact details
│   │   ├── StickyContactBar.jsx   # Mobile & desktop Call / WhatsApp sticky bar
│   │   ├── CommentSection.jsx     # Reader discussion threads & comment form
│   │   └── SeoHead.jsx            # Dynamic page title, meta description & JSON-LD
│   ├── pages/
│   │   ├── HomePage.jsx           # Landing page with interactive triage & city directory
│   │   ├── ServicesPage.jsx       # Categorized service catalog with query filtering
│   │   ├── BlogArchivePage.jsx    # Blog archive with category descriptions & search
│   │   ├── BlogPostPage.jsx       # Full post reader rendering WordPress HTML content
│   │   ├── AboutPage.jsx          # First-person 1BHK build story & beginner roadmap
│   │   ├── ContactPage.jsx        # Consultation booking form + direct contact info
│   │   ├── LegalPage.jsx          # Privacy, Disclaimer & Terms views with sidebar
│   │   └── NotFoundPage.jsx       # 404 fallback page
│   ├── App.jsx                    # Route definitions and scroll restoration
│   ├── main.jsx                   # React DOM root entry
│   └── index.css                  # Tailwind directives and CSS variables
├── index.html                     # HTML shell mounting <div id="root"></div>
├── package.json                   # Project scripts and dependencies
├── postcss.config.js              # PostCSS Tailwind plugins configuration
├── tailwind.config.js             # Tailwind design tokens and theme extensions
├── vite.config.js                 # Vite bundler configuration & /api proxy
└── .gitignore                     # Git ignore rules for node_modules and dist


🚀 Getting Started

Prerequisites

Node.js (v18.0.0 or higher recommended)

npm (comes bundled with Node.js)

Installation

Clone your repository:

git clone https://github.com/<your-username>/tehrov-web.git
cd tehrov-web


Install dependencies:

npm install


Start the Vite development server:

npm run dev


Open http://localhost:5173 in your browser.

📦 Building for Production (Hostinger)

To generate the production bundle for deployment:

npm run build


This compiles and minifies your application into the dist/ directory. Upload the contents of dist/ directly into your Hostinger public_html/ folder. The included .htaccess file ensures that direct URLs and page refreshes route through index.html without 404 errors.

📄 License

All original written build guides, photography, and site branding are the property of Hydro Build (tehrov.in).