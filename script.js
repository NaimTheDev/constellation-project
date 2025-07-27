// Mapbox access token - Replace with your actual token
// Get your free token at: https://account.mapbox.com/access-tokens/
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN_HERE';

// Check if access token is set
if (mapboxgl.accessToken === 'YOUR_MAPBOX_ACCESS_TOKEN_HERE') {
    console.warn('Please set your Mapbox access token in script.js');
    document.getElementById('map').innerHTML = 
        '<div style="padding: 20px; text-align: center; color: #333;">' +
        '<h2>Mapbox Access Token Required</h2>' +
        '<p>To view the interactive globe, you need to:</p>' +
        '<ol style="text-align: left; max-width: 400px; margin: 0 auto;">' +
        '<li>Sign up for a free account at <a href="https://account.mapbox.com/" target="_blank">mapbox.com</a></li>' +
        '<li>Get your access token from the <a href="https://account.mapbox.com/access-tokens/" target="_blank">access tokens page</a></li>' +
        '<li>Replace "YOUR_MAPBOX_ACCESS_TOKEN_HERE" in script.js with your actual token</li>' +
        '</ol>' +
        '</div>';
} else {
    // Initialize the map with globe projection
    const map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/satellite-v9', // Mapbox style URL
        center: [0, 0], // Starting position [lng, lat] - global view
        zoom: 1.5, // Starting zoom level
        projection: 'globe' // Enable 3D globe projection
    });

    // Add navigation controls (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl());

    // Add scale control
    map.addControl(new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
    }));

    // Optional: Add fullscreen control
    map.addControl(new mapboxgl.FullscreenControl());

    // Add event listener for when the map loads
    map.on('load', () => {
        console.log('Mapbox GL JS globe initialized successfully!');
        
        // Enable globe atmosphere
        map.setFog({
            'color': 'rgb(186, 210, 235)', // Lower atmosphere
            'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
            'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
            'space-color': 'rgb(11, 11, 25)', // Background color
            'star-intensity': 0.6 // Background star brightness (default 0.35 at low zooms)
        });
    });

    // Handle errors
    map.on('error', (e) => {
        console.error('Mapbox GL JS error:', e);
    });
}