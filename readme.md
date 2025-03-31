DogBreed Frenzy
A fun single-page web app that fetches and displays a random dog breed and image from the Dog CEO API. Built with HTML, CSS, and JavaScript, it features a purple background with cute paw print animations, a "Puppy Mode" toggle, and a clean, modern design.

Features
Fetch a random dog breed and image with a button click.
Displays the breed name and image in a centered card with a bounce-in animation.
Toggle "Puppy Mode" for a playful purple/pink theme.
Purple gradient background with animated paw prints.
Technologies
HTML: Structure and layout.
CSS: Styling with animations (Google Fonts: Poppins, Comic Neue).
JavaScript: Async fetch from https://dog.ceo/api/breeds/image/random.
API: Dog CEO API (no auth required).
Setup
Clone or Download:
Copy the files (index.html, styles.css, script.js) into a folder (e.g., DogBreedFrenzy).
Serve Locally:
You must run the app via a local server for images to load (due to CORS):
VS Code: Install "Live Server" extension, right-click index.html → "Open with Live Server" (http://127.0.0.1:5501).
Terminal:
bash

Collapse

Wrap

Copy
cd DogBreedFrenzy
npx http-server -p 8080
Open http://localhost:8080 in your browser.
Dependencies:
No external dependencies beyond a browser and internet connection. Fonts are loaded via Google Fonts CDN.
Usage
Open the app in a browser via a local server.
Click "Get New Dog Breed" to fetch a new dog image and breed name.
Toggle "Puppy Mode" checkbox for a whimsical theme change.
Enjoy the animated purple background with moving paw prints!
Files
index.html: Main structure with font links.
styles.css: Styling with purple gradient and animations.
script.js: Logic for fetching and rendering dog breeds.
Troubleshooting
Images Not Showing: Ensure you’re using a local server (not file://). Check the console (F12) for fetch errors.
Breed Name Missing: Some API responses may lack clear breed names; defaults to "Unknown".
Credits
Built with ❤️ by [Sarah].
Dog images from Dog CEO API.
