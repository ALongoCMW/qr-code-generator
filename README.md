# QR Code Web App

This project is a simple web application that allows users to generate QR codes from text or URLs. It utilizes the Uniqode API to create dynamic QR codes and provides options for downloading them in various formats.

## Project Structure

```
qr-code-web-app
├── public
│   ├── index.html         # HTML structure of the web app
│   ├── styles
│   │   └── main.css       # CSS styles for the web app
│   └── scripts
│       └── app.js         # JavaScript functionality for QR code generation
├── package.json           # npm configuration file
└── .gitignore             # Git ignore file
```

## Getting Started

To set up and run the QR Code Web App locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd qr-code-web-app
   ```

2. **Install dependencies:**
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application:**
   You can use a local server to serve the `public` directory. For example, you can use the `http-server` package:
   ```bash
   npx http-server public
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080` (or the port specified by your server) to access the QR Code Generator.

## Usage

- Enter the text or URL you want to encode in the input field.
- Select the desired download format (PNG, JPEG, SVG).
- Click the "Generate and Download" button to create and download your QR code.

## Dependencies

- [Uniqode API](https://uniqode.com) for QR code generation.
- Any other libraries you may choose to include in the `package.json`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.