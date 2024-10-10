// Google Sheets CSV URL
const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/XXXXXX/pub?output=csv';

// Fetch the CSV data
fetch(sheetUrl)
    .then(response => response.text())
    .then(data => {
        // Parse the CSV data
        const rows = data.split('\n');
        let htmlContent = '<ul>';
        
        rows.forEach((row) => {
            const columns = row.split(',');
            htmlContent += `<li>${columns[0]}: ${columns[1]}</li>`;  // Customize as per your columns
        });

        htmlContent += '</ul>';
        
        // Insert data into the HTML
        document.getElementById('data').innerHTML = htmlContent;
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data';
        console.error('Error fetching data:', error);
    });
