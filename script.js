const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/XXXXXX/pub?output=csv';
fetch(proxyUrl + sheetUrl)
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Process and display your data
    })
    .catch(error => console.error('Error:', error));
