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
        let htmlContent = '<ul>';

        // Check if data exists and is properly structured
        if (data.length > 0 && data[0].length > 0) {
            const amount = data[0][0]; // Access the amount directly
            htmlContent += `<li>Amount: €${amount}</li>`; // Add euro sign to the amount
        } else {
            htmlContent += `<li>No data available</li>`;
        }

        htmlContent += '</ul>';
        document.getElementById('data').innerHTML = htmlContent; // Set innerHTML once
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data: ' + error.message;
        console.error('Error fetching data:', error);
    });
