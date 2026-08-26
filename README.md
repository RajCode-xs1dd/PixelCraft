# PixelCraft

PixelCraft is a private, browser-based image toolkit by RajCode. It compresses, resizes, crops, converts, rotates, upscales, watermarks, and edits images without uploading them to a server.

## Live Demo

[Open PixelCraft](https://pixelcraft-rajcode.netlify.app/)

## Features

- Compress JPG, PNG, and WEBP images with quality presets or a target size in KB.
- Increase file size for upload portals and submission requirements.
- Resize images by exact pixels or percentage while preserving aspect ratio.
- Crop images with free selection and 1:1, 4:3, and 16:9 presets.
- Convert images to JPG, PNG, or WEBP.
- Rotate images by 90, 180, or 270 degrees.
- Upscale images by 2x or 4x.
- Add text watermarks with position and opacity controls.
- Edit photos with filters, transforms, drawing, text, stickers, frames, backgrounds, and rounded corners.
- Process multiple images and download results individually or as a ZIP archive.

All image processing happens locally in the browser. Files are not sent to a backend.

## How to Use

1. Open the live demo or open `index.html` in a modern browser.
2. Choose a tool from the navigation menu.
3. Select or drag and drop one or more images.
4. Adjust the tool settings and select the processing action.
5. Preview the results and download individual files or the ZIP archive.

## Project Structure

```text
image-compress-tool/
├── index.html              # Main PixelCraft application
├── README.md               # Project documentation
├── LICENSE                 # MIT license
├── preview.png             # Social sharing preview image
├── site.webmanifest        # Web app metadata
├── robots.txt              # Crawler rules
├── sitemap.xml             # SEO route map
├── favicon.ico             # Browser favicon
├── favicon-16x16.png       # Small favicon
├── favicon-32x32.png       # Standard favicon
├── apple-touch-icon.png    # Apple home-screen icon
├── css/
│   └── style.css           # Shared styles for SEO entry pages
├── js/
│   └── app.js              # Redirects entry pages to the main app
├── compress-image/         # Compression entry page
├── increase-size/          # File-size increase entry page
├── resize-image/           # Resize entry page
├── crop-image/             # Crop entry page
├── convert-to-jpg/         # JPG conversion entry page
├── convert-to-png/         # PNG conversion entry page
├── convert-to-webp/        # WEBP conversion entry page
├── rotate-image/           # Rotation entry page
├── upscale-image/          # Upscaling entry page
├── watermark-image/        # Watermark entry page
└── photo-editor/           # Photo editor entry page
```

The SEO entry pages provide dedicated URLs and redirect to the corresponding tool in the single-page application using a URL hash.

## Technology

- HTML5, CSS3, and modern JavaScript
- [Cropper.js](https://github.com/fengyuanchen/cropperjs) for image cropping
- [JSZip](https://github.com/Stuk/jszip) for ZIP downloads
- [Bootstrap Icons](https://icons.getbootstrap.com/) for interface icons
- CDN-hosted dependencies; no build step or backend is required

## Author

- GitHub: [RajCode-xs1dd](https://github.com/RajCode-xs1dd)
- Portfolio: [rajcode-portfolio.netlify.app](https://rajcode-portfolio.netlify.app/)

## License

This project is licensed under the [MIT License](LICENSE). You may use, modify, and distribute it under the terms of that license.

