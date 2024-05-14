import React, { createContext, useEffect, useState } from 'react';
import { addToDb, addToFavDb, deleteShoppingCart, getFavCart, getShoppingCart } from '../cartManagement/cartManagement';
import { toast } from 'react-hot-toast';

export const ProductContext = createContext([]);

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [searchedItem, setSearchedItem] = useState([]);


    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const storedFav = getFavCart();
        const savedFav = [];
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === parseInt(id));
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        for (const id in storedFav) {
            const addedItem = products.find(item => item.id === parseInt(id));
            if(addedItem){
                const quantity = storedCart[id];
                addedItem.quantity = quantity;
                savedFav.push(addedItem);
            }
        }
        setCartProducts(savedCart);
        setSavedProducts(savedFav);
    },[products])

    const addToCart = (selectedProduct) =>{
        let newCart =[];
        const exists = cartProducts.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cartProducts, selectedProduct];
        }
        else{
            const remaining = cartProducts.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, exists];
        }
        toast.success("Item added successfully")
        setCartProducts(newCart);
        addToDb(selectedProduct.id);
    }

    const addToFav = (selectedItem) =>{
        let newCart = [];
        const exists = savedProducts.find(product => product.id === selectedItem.id);
        if(!exists){
            toast.success("Item added successfully")
            selectedItem.quantity = 1;
            newCart = [...savedProducts, selectedItem];
        }
        else{
            toast.error("Item already added");
            const remaining = savedProducts.filter(product => product.id !== selectedItem.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, exists];
        }
        setSavedProducts(newCart);
        addToFavDb(selectedItem.id);
    }

    const handleClearCart = (key) => {
        if(key === "clear"){
            alert("Are you sure to clear cart?")
        }
        setCartProducts([]);
        deleteShoppingCart();
    }

    const handleMenuProduct = (category) => {
        setCategoryProducts(products.filter(p => p.category === category));
    }

    const handleSearchProduct = () => {
        const searchBox = document.getElementById("searchBox");

        const searchCardStyle = document.getElementById("search-item-card").style;

        const searchAlert = document.getElementById("search-bar-alert");

        const newItem = (products.find(p => p.name.toLowerCase().match(searchBox.value.toLowerCase())));

        if (searchBox.value && newItem) {
            searchAlert.style.display = "none";
            setSearchedItem(newItem);
            searchCardStyle.display = "block";
        }
        else {
            searchAlert.style.display = "block";
            if (searchBox.value === "") {
                searchAlert.innerHTML = `<p>Warning: Search box can not be empty !!!</p>`;
            }
            else {
                searchAlert.innerHTML = `<p>Item not found !!!<br/>Please try another item.</p>`;
            }
            searchCardStyle.display = "none";
        }
        searchBox.value = '';
    }

    const value = {
        products,
        cartProducts,
        setCartProducts,
        savedProducts,
        setSavedProducts,
        handleMenuProduct,
        categoryProducts,
        handleSearchProduct,
        searchedItem,
        addToCart,
        addToFav,
        handleClearCart
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;