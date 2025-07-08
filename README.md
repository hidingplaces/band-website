# Hiding Places Band Website

Official website for the Hiding Places band.

## Project Structure

```
band-website/
├── index.html                 # Main homepage
├── assets/                    # All static assets
│   ├── css/
│   │   └── styles.css        # Main stylesheet
│   ├── js/
│   │   └── analytics.js      # Analytics and cookie consent
│   └── images/
│       ├── hiding-places-logo-2025.webp
│       └── hiding-places-portrait-2025.webp
├── music/                     # Music section
│   └── index.html            # Music streaming platforms
├── shows/                     # Shows section
│   └── index.html            # Tour dates and Bandsintown widget
├── merch/                     # Merchandise section
│   └── index.html            # Shopify store integration
├── README.md                  # This file
└── .gitignore                # Version control exclusions
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **GDPR Compliant**: Cookie consent management for EU visitors
- **Analytics**: Google Analytics and Facebook Pixel integration
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and semantic structure
- **Music Integration**: Direct links to Spotify, Apple Music, and Bandcamp
- **Tour Management**: Bandsintown widget for show listings
- **E-commerce**: Shopify integration for merchandise sales

## Technical Details

### Analytics & Privacy
- Automatically detects user location for GDPR compliance
- Shows cookie consent banner for EU visitors
- Loads tracking scripts only after consent (where required)
- Supports notice-only states (California, Virginia, etc.)

### Browser Support
- Modern browsers with ES6+ support
- Responsive design for all screen sizes
- Progressive enhancement approach

### Performance
- Optimized WebP images
- Minified external scripts
- Efficient CSS organization
- Shared assets across all pages

### Third-Party Integrations
- **Bandsintown**: Tour date management and ticket sales
- **Shopify**: E-commerce platform for merchandise
- **Google Analytics**: Website analytics
- **Facebook Pixel**: Social media tracking

## Development

To work on this website locally:

1. Clone or download the files
2. Open `index.html` in a web browser
3. For live development, use a local server (recommended)

### Local Server Setup
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Descriptions

- **index.html**: Main homepage with navigation and hero image
- **music/index.html**: Music streaming platform links with styled buttons
- **shows/index.html**: Tour dates with Bandsintown widget integration
- **merch/index.html**: Merchandise store with Shopify integration
- **styles.css**: All styling including responsive design, cookie banner, and page-specific styles
- **analytics.js**: Handles cookie consent and loads tracking scripts
- **Images**: Band logo and portrait in WebP format for optimal performance

## Page-Specific Features

### Music Page
- Styled platform buttons for Spotify, Apple Music, and Bandcamp
- Hover effects and responsive design
- Direct links to streaming platforms

### Shows Page
- Bandsintown widget for tour management
- Customizable widget styling
- Ticket sales and RSVP functionality

### Merchandise Page
- Shopify Buy Button integration
- Product collection display
- Shopping cart and checkout functionality

## Contact

For website issues or updates, contact: elijah@mtnlaurelrecordingco.com 