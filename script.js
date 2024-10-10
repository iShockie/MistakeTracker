const sheetUrl = 'https://script.google.com/macros/s/AKfycbz5xuyg7PIZod7yqm0UX0fJkQqfsUzzt3f_YwcMJ8cX9ops2z_F0pMTidqgnZSc7ECnnw/exec'; // Replace with your web app URL

fetch(sheetUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  // Log the entire data object to see its structure
        let htmlContent = '<ul>';

        // Assuming the first element in the data array contains the value
        if (data.length > 0 && data[0].length > 0) {
            const amount = data[0][0]; // Access the amount directly
            htmlContent += `<li>Amount: €${amount}</li>`; // Add euro sign to the amount
        } else {
            console.warn("No data available");
            htmlContent += `<li>No data available</li>`;
        }

        htmlContent += '</ul>';
        document.getElementById('data').innerHTML = htmlContent;
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data: ' + error.message;
        console.error('Error fetching data:', error);
    });

