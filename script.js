const sheetUrl = 'https://script.google.com/macros/s/AKfycbz5xuyg7PIZod7yqm0UX0fJkQqfsUzzt3f_YwcMJ8cX9ops2z_F0pMTidqgnZSc7ECnnw/exec'; // Replace with your web app URL

fetch(sheetUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Check if the data is being retrieved
        let htmlContent = '<ul>';
        
        data.forEach(row => {
            htmlContent += `<li>${row[0]}: ${row[1]}</li>`; // Adjust based on your data structure
        });

        htmlContent += '</ul>';
        document.getElementById('data').innerHTML = htmlContent;
    })
    .catch(error => {
        document.getElementById('data').innerHTML = 'Error loading data';
        console.error('Error fetching data:', error);
    });
