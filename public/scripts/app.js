const textInput = document.getElementById('text');
const qrcodeContainer = document.getElementById('qrcode-container');
const qrcodeCanvas = document.getElementById('qrcode');
const qrcodeImage = document.getElementById('qrcode-image');
const formatSelect = document.getElementById('format');
const generateButton = document.getElementById('generate');
const uniqodeApiKey = "641fbfc233c119686a62bc32dbeb9657a7521a04";
const uniqodeOrganizationId = "638820"; // Add Organization ID

function generateQRCode(text) {
    if (!uniqodeApiKey) {
        alert("Please provide your Uniqode API key in the code.");
        return;
    }

    const format = formatSelect.value;
    const apiUrl = `https://api.uniqode.com/api/2.0/qrcodes/`;

    const requestBody = {
        name: "Dynamic QR Code", // Required name for the QR code
        text: text, // Text/URL to encode
        format: format // Desired format (png, jpeg, svg)
    };

    fetch(apiUrl, {
        method: 'POST', // Use POST for dynamic QR codes
        headers: {
            'Authorization': `Bearer ${uniqodeApiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody) // Send parameters in the request body
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

function downloadQRCode(blobUrl, format) {
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `qrcode.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
}

generateButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        generateQRCode(text);
    } else {
        alert('Please enter text or URL to generate QR Code.');
    }
});

textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateButton.click();
    }
});