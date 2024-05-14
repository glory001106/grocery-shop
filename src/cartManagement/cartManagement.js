const addToDb = id => {
    let shoppingCart = getShoppingCart();

    // set item to cart
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

const addToFavDb = id =>{
    let favCart = getFavCart();

    const quantity = favCart[id];
    if(!quantity){
        favCart[id] = 1;
    }
    localStorage.setItem("fav-cart", JSON.stringify(favCart));
}

// get fav cart
const getFavCart =()=>{
    let favCart = {};
    const savedItem = localStorage.getItem("fav-cart");
    if(savedItem){
        favCart = JSON.parse(savedItem);
    }
    return favCart;
}

// get existing cart
const getShoppingCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = (id, type) => {
    if(type === "cart"){
        const shoppingCart = getShoppingCart();
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
    else if(type === "fav"){
        const favCart = getFavCart();
        if(id in favCart){
            delete favCart[id];
            localStorage.setItem('fav-cart', JSON.stringify(favCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { 
    addToDb, 
    getShoppingCart, 
    removeFromDb, 
    addToFavDb, 
    getFavCart, 
    deleteShoppingCart
};