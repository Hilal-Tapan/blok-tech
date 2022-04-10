// // // API
// Fetchen van de API
fetch('https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json')
    .then(res => res.json())
    .then(data => {
        // Slicen, ik wil er maar 3 zien.
        const threeReviews = data.data.slice(0, 3);

         // Loopen met forEach
        threeReviews.forEach(review => {

            const reviewHtml =
                `   
                <h2 class="review-name">${review.reviewed_by}</h2>
                <p class="review-description">${review.review}</p>  
                `
            // Een container voor in de HTML aanmaken
            const reviewContainer = document.getElementById('apiReviews')
            reviewContainer.innerHTML += reviewHtml
        });
    });