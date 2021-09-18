const addItem = ()=>{
    const productField = document.getElementById('product-item');
    const productName  = productField.value;

    // check empty product name
    if(!productName){
        return;
    }

    // display in the UI
    displayProduct(productName);

    // add into localstorage
    addProductToCart(productName);

    // clear vlaue
    productField.value = '';
}


/* display prodcuts in the ui */
const displayProduct = (name) => {
    const productContainer = document.getElementById('product-container');
    const singleProduct = document.createElement('li');
    singleProduct.innerHTML = name;
    productContainer.appendChild(singleProduct);
}

// get current cart item
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if(cart){
        cartObject = JSON.parse(cart);
    }else{
        cartObject = {};
    }
    return cartObject;
}

// add product to cart
const addProductToCart = (name) => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    } else{
        cart[name] = 1;
    }
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

/* display localstorage products */
const displayLocalStorageCart = () => {
    const cartItems = getCart();
    for(const product in cartItems){
        displayProduct(product);
    }
}
displayLocalStorageCart();

// place order
const placeOrder = () => {
    document.getElementById('product-container').textContent = '';
    localStorage.removeItem('cart');
}