
/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
const appDir = path.join(process.cwd(), 'app');
const outputPath = path.join(appDir, 'icon.png');
const appleIconPath = path.join(appDir, 'apple-icon.png');

async function generateIcons() {
    try {
        console.log('Processing logo from:', inputPath);

        if (!fs.existsSync(inputPath)) {
            console.error('Error: Logo file not found at', inputPath);
            process.exit(1);
        }

        // Create a 512x512 icon for the main app icon (Next.js will generate favicons)
        // We ensure it fits within the square with some padding if needed, or contain.
        await sharp(inputPath)
            .resize(512, 512, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
            })
            .toFile(outputPath);

        console.log('Generated app/icon.png');

        // Apple Icon 180x180
        await sharp(inputPath)
            .resize(180, 180, {
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent
            })
            .toFile(appleIconPath);

        console.log('Generated app/apple-icon.png');

        // Remove existing favicon.ico if it exists to avoid confusion
        const faviconPath = path.join(appDir, 'favicon.ico');
        if (fs.existsSync(faviconPath)) {
            fs.unlinkSync(faviconPath);
            console.log('Removed legacy app/favicon.ico');
        }

    } catch (error) {
        console.error('Error generating icons:', error);
        process.exit(1);
    }
}

generateIcons();
