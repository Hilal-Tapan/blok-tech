// // // API

// //Optie 1

// const containerElement = document.getElementById('reviews')
// // const containerElement = document.body;

// fetch('https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json')
// .then(res => res.json())
// .then(res => {
//     const {data} = res;
//     data.slice(0, 3).map(item => {
//         console.log(item)

//         const reviewContainer = document.createElement('div');

//         const name = document.createElement("p");
//         name.className = "review-name";
//         name.textContent = item.reviewed_by;
//         reviewContainer.appendChild(name);

//         const rating = document.createElement("p");
//         rating.className = "review-rating";
//         rating.textContent = item.rating;
//         reviewContainer.appendChild(rating);

//         const description = document.createElement("p");
//         description.className = "review-description";
//         description.textContent = item.review;
//         reviewContainer.appendChild(description);
//         containerElement.appendChild(reviewContainer);
//     })
// })

// //Optie 2
fetch('https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json')
.then(res => res.json())
.then(data => {
    const threeReviews = data.data.slice(0, 3);

    threeReviews.forEach(review => {

    const reviewHtml =
    `   
    <p class="review-name">${review.reviewed_by}</p>
    <p class="review-description">${review.review}</p>  
   `

   const reviewContainer = document.getElementById('apiReviews')
   reviewContainer.innerHTML += reviewHtml


    });
});





//     function review(data) {
//         const review = document.getElementById("reviews")
//         review.innerHTML +=
 
//    return data.map(data => { 
//         reviews.innerHTML += 
     
//     })}}}