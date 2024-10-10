const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/XXXXXX/pub?output=csv';
const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(sheetUrl);

fetch(proxyUrl)
    .then(response => response.text())
    .then(data => {
        console.log(data);  // Log the CSV data to check
        // Parse and display the data here
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data';
        console.error('Error fetching data:', error);
    });
