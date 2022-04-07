// API
const containerElement = document.getElementById('container');
fetch("https://www.fakerestapi.com/datasets/api/v1/mnc-companies-reviews.json")
.then(response => response.json())
.then(data => { 
const item = document.createElement("p");
item.className = "item-class";
item.textContent = data[0].name;
containerElement.appendChild(item);
})

const item1 = document.createElement("p");
item1.className = "item-class";
item1.textContent = data[0].name;
containerElement.appendChild(item1);

const item2 = document.createElement("p");
item2.className = "item-class";
item2.textContent = data[0].name;
containerElement.appendChild(item2);

const item1 = document.createElement('“p”');
item3.className = '“item-class”';
item3.textContent = data[0].name;
containerElement.appendChild(item3);