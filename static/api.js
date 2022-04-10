// // // API
fetch('https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json')
    .then(res => res.json())
    .then(data => {
        const threeReviews = data.data.slice(0, 3);

        threeReviews.forEach(review => {

            const reviewHtml =
                `   
                <h2 class="review-name">${review.reviewed_by}</h2>
                <p class="review-description">${review.review}</p>  
                `

            const reviewContainer = document.getElementById('apiReviews')
            reviewContainer.innerHTML += reviewHtml


        });
    });