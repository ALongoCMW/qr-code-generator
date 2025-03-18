function generateQRCode(text) {
    if (!uniqodeApiKey) {
        alert("Please provide your Uniqode API key in the code.");
        return;
    }

    const format = formatSelect.value;
    const apiUrl = `https://api.uniqode.com/api/2.0/qrcodes/`;

    const requestBody = {
        name: "Custom URL", // Name for the QR code
        organization: parseInt(uniqodeOrganizationId), // Organization ID
        qr_type: 2, // QR code type (dynamic)
        campaign: {
            content_type: 1, // Content type (e.g., URL)
            custom_url: text // The URL or text to encode
        },
        location_enabled: false, // Disable location tracking
        attributes: {
            color: "#2595ff",
            colorDark: "#2595ff",
            margin: 80,
            isVCard: false,
            frameText: "UNIQODE",
            logoImage: "https://d1bqobzsowu5wu.cloudfront.net/15406/36caec11f02d460aad0604fa26799c50",
            logoScale: 0.1992,
            frameColor: "#2595FF",
            frameStyle: "banner-bottom",
            logoMargin: 10,
            dataPattern: "square",
            eyeBallShape: "circle",
            gradientType: "none",
            eyeFrameColor: "#2595FF",
            eyeFrameShape: "rounded"
        }
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Token ${uniqodeApiKey}`, // Updated header format
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
    })
    .then(blob => {
        const url = URL.createObjectURL(blob);
        qrcodeImage.src = url;
        qrcodeImage.style.display = 'block';
        qrcodeCanvas.style.display = 'none';
        downloadQRCode(url, format);
    })
    .catch(error => {
        console.error("Error generating QR code:", error);
        alert("Failed to generate QR code. Please check your input and API key.");
        qrcodeImage.style.display = 'none';
        qrcodeCanvas.style.display = 'none';
    });
}