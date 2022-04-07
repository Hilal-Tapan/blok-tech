// // API

const containerElement = document.getElementById('reviews')
fetch('https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json')
.then(res => res.json())
.then(res => {
    const {data} = res;
    data.slice(0, 3).map(item => {
        console.log(item)

        const reviewContainer = document.createElement('div');

        const name = document.createElement("p");
        name.className = "review-name";
        name.textContent = item.reviewed_by;
        reviewContainer.appendChild(name);

        const rating = document.createElement("p");
        rating.className = "review-rating";
        rating.textContent = item.rating;
        reviewContainer.appendChild(rating);

        const description = document.createElement("p");
        description.className = "review-description";
        description.textContent = item.review;
        reviewContainer.appendChild(description);
        containerElement.appendChild(reviewContainer);
    })
})