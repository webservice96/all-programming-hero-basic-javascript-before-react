
const loadProducts = async () => {
	const URL = `https://fakestoreapi.com/products`;

	const response = await fetch(URL);
	const data = await response.json();
	showProducts(data);
};


// show all product in UI 
const showProducts = (products) => {
	const allProducts = products.map((pd) => pd);
	for (const product of allProducts) {
		const image = product.image;
		const div = document.createElement("div");
		div.classList.add("product");
		div.innerHTML = `<div class="single-product">
      <div>
    <img class="product-image" src=${image}></img>
      </div>
      <h3 class="fs-5">${product.title.substring(0, 20)}...</h3>
      <p>Category: ${product.category}</p>
      <h2 class="fs-4">Price: $ ${product.price}</h2>
      <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-success">add to cart</button>
      <button onclick="productDetails(${product.id})" id="details-btn" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button></div>
      `;
		document.getElementById("all-products").appendChild(div);
	}
};
let count = 0;
const addToCart = (id, price) => {
	count = count + 1;
	updatePrice("price", price);

	updateTaxAndCharge();
	document.getElementById("total-Products").innerText = count;
};

const getInputValue = (id) => {
	const element = document.getElementById(id).innerText;
	const converted = parseFloat(element);
	return converted;
};

// main price update function
const updatePrice = (id, value) => {
	const convertedOldPrice = getInputValue(id);
	const convertPrice = parseFloat(value);
	const total = convertedOldPrice + convertPrice;
	document.getElementById(id).innerText = total.toFixed(2);
};

// set innerText function
const setInnerText = (id, value) => {
	document.getElementById(id).innerText = Math.round(value);
};

// update delivery charge and total Tax
const updateTaxAndCharge = () => {
	const priceConverted = getInputValue("price");
	if (priceConverted > 200) {
		setInnerText("delivery-charge", 30);
		setInnerText("total-tax", priceConverted * 0.2);
	}
	if (priceConverted > 400) {
		setInnerText("delivery-charge", 50);
		setInnerText("total-tax", priceConverted * 0.3);
	}
	if (priceConverted > 500) {
		setInnerText("delivery-charge", 60);
		setInnerText("total-tax", priceConverted * 0.4);
	}
};

//grandTotal update function
const updateTotal = () => {
	const grandTotal =
		getInputValue("price") + getInputValue("delivery-charge") +
		getInputValue("total-tax");
	document.getElementById("total").innerText = grandTotal;
};
loadProducts();

/**
 * productDetails
 * @param {Number} pdId 
 */
const productDetails = async (pdId) => {
	/* dom element settings */
	const productTitle = document.getElementById('detail-title');
	const productDesc = document.getElementById('pd-desc');
	const productImage = document.querySelector('.product-image');
	const ratting = document.getElementById('start-rating');
	const ratingAverage = document.querySelector('.rating-average');
	const ratingCount = document.querySelector('.rating-count');

	productTitle.innerText = 'Loading....';
	productDesc.innerText = 'Loading....';

	/* fetch data */
	const URL = `https://fakestoreapi.com/products/${pdId}`;
	const res = await fetch(URL);
	const product = await res.json();

	/* dom elment valus */
	productTitle.innerText = product.title;
	productImage.src = product.image;
	productDesc.innerText = product.description;
};

