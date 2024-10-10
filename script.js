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
        // Process the returned data
        let htmlContent = '<ul>';
        data.forEach(row => {
            console.log(row); // Log each row to see its contents
            htmlContent += `<li>${row[0]}: ${row[1]}</li>`; // Adjust based on your data structure
        });
        htmlContent += '</ul>';
        document.getElementById('data').innerHTML = htmlContent;
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data: ' + error.message;
        console.error('Error fetching data:', error);
    });

