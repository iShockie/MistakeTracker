const sheetUrl = 'https://script.google.com/macros/s/AKfycbz5xuyg7PIZod7yqm0UX0fJkQqfsUzzt3f_YwcMJ8cX9ops2z_F0pMTidqgnZSc7ECnnw/exec'; // Replace with your web app URL

// Show a loading message
document.getElementById('data').innerHTML = 'Loading data...';

fetch(sheetUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        let htmlContent = ''; // Start with an empty string

        // Check if data exists and is properly structured
        if (data.length > 0 && data[0].length > 0) {
            const amount = data[0][0]; // Access the amount directly
            htmlContent += `${amount} €`; // Format as "4820 €"
        } else {
            htmlContent += `No data available`; // Display a message if no data is found
        }

        document.getElementById('data').innerHTML = htmlContent; // Set innerHTML once
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data: ' + error.message;
        console.error('Error fetching data:', error);
    });
