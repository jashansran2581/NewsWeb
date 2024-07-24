// const apiKey = '3489fd0801msha75862415b0f9b9p1c734ejsnd4568352ee13'; // Replace with your actual API key
// const baseUrl = 'https://google-news13.p.rapidapi.com/business';
// const languageRegion = 'en-US'; // Set the desired language region

// let lastRequestTime = 0;
// const requestInterval = 1000; // 1 second

// // Function to display news articles
// function displayNews(articles) {
//     const newsContainer = document.getElementById('news-container');
//     newsContainer.innerHTML = '';
//     articles.forEach(article => {
//         const newsItem = document.createElement('div');
//         newsItem.className = 'news-item';
//         newsItem.innerHTML = `
//             <h2>${article.title}</h2>
//             <p>${article.description}</p>
//             <a href="${article.url}" target="_blank">Read more</a>
//         `;
//         newsContainer.appendChild(newsItem);
//     });
// }

// // Function to display error messages
// function displayError(message) {
//     const errorMessage = document.getElementById('error-message');
//     errorMessage.textContent = message;
// }

// // Function to search for news articles
// function searchNews() {
//     const now = Date.now();
//     if (now - lastRequestTime < requestInterval) {
//         displayError('Please wait before making another request.');
//         return;
//     }
//     lastRequestTime = now;

//     const query = document.getElementById('search-query').value;
//     if (!query) {
//         displayError('Please enter a search query.');
//         return;
//     }

//     fetch(`${baseUrl}?q=${query}&apiKey=${apiKey}&lr=${languageRegion}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === 'error') {
//                 displayError(data.message);
//             } else {
//                 displayNews(data.articles);
//             }
//         })
//         .catch(error => {
//             displayError('Failed to fetch articles. Please try again.');
//         });
// }
