# Constellation Project - Interactive Globe

A 3D interactive globe implementation using Mapbox GL JS for visualizing constellations and celestial data.

## Features

- 🌍 **3D Globe Projection**: Uses Mapbox GL JS globe projection for realistic Earth visualization
- 🛰️ **Satellite Imagery**: High-quality satellite imagery from Mapbox
- 🎮 **Interactive Controls**: Zoom, pan, and navigate the globe with mouse/touch
- 🧭 **Navigation Controls**: Built-in zoom buttons, compass, and fullscreen mode
- 📏 **Scale Control**: Distance measurement reference
- 🌌 **Atmospheric Effects**: Realistic atmosphere and space background
- ⚡ **Performance Optimized**: Smooth 60fps rendering with WebGL

## Getting Started

### Prerequisites

1. Sign up for a free Mapbox account at [mapbox.com](https://account.mapbox.com/)
2. Get your access token from the [access tokens page](https://account.mapbox.com/access-tokens/)

### Setup

1. Clone this repository
2. Open `script.js` and replace `YOUR_MAPBOX_ACCESS_TOKEN_HERE` with your actual Mapbox access token
3. Serve the files using any web server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
4. Open your browser to `http://localhost:8000`

### Configuration

The globe is configured with:
- **Center**: `[0, 0]` (global view)
- **Zoom Level**: `1.5` (appropriate for viewing the entire Earth)
- **Style**: `mapbox://styles/mapbox/satellite-v9` (satellite imagery)
- **Projection**: `globe` (3D spherical projection)

## File Structure

```
constellation-project/
├── index.html          # Main HTML page with Mapbox GL JS includes
├── script.js           # Globe initialization and configuration
└── README.md           # This documentation
```

## Technical Implementation

### HTML Structure
- Mapbox GL JS v3.0.1 CSS and JavaScript from CDN
- Responsive viewport meta tag
- Full-screen map container with ID `map`

### JavaScript Features
- Error handling for missing API tokens
- Globe projection with atmospheric effects
- Interactive navigation controls
- Scale and fullscreen controls
- Console logging for debugging

### Browser Support
- Modern browsers with WebGL support
- Chrome 51+, Firefox 53+, Safari 10+, Edge 79+

## Next Steps

This basic globe implementation serves as the foundation for:
- Constellation overlay visualization
- Star catalog integration
- Interactive celestial object selection
- Real-time astronomical data display

## License

This project is part of the Constellation Project educational initiative.
