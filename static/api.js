// // API
// const containerElement = document.getElementById('container');
// fetch("https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json")
// .then(response => response.json())
// .then(data => { 
// const item = document.createElement("p");
// item.className = "item-class";
// item.textContent = data[0].name;
// containerElement.appendChild(item);
// })

// const item1 = document.createElement("p");
// item1.className = "item-class";
// item1.textContent = data[0].name;
// containerElement.appendChild(item1);

// const item2 = document.createElement("p");
// item2.className = "item-class";
// item2.textContent = data[0].name;
// containerElement.appendChild(item2);

// const item3 = document.createElement('“p”');
// item3.className = '“item-class”';
// item3.textContent = data[0].name;
// containerElement.appendChild(item3);


const containerElement = document.body
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