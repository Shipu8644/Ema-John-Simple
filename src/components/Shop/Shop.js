import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {

        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {

                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])

    useEffect(() => {

        const savedCart = getStoredCart();
        //*** */ Object.keys returns an array of key from an object
        // const key = Object.keys(savedCart);
        // console.log(key);
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                    // console.log(storedCart);
                }
                setCart(storedCart);
            }
            // setCart(storedCart);
        }

    }, [products])

    const handleAddTocart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product);
        // Save to local storage for now
        addToDb(product.key);
    }
    const handleSearch = (event) => {
        const searchText = (event.target.value);
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);
        // console.log(matchProducts.length);

    }

    return (
        <>

            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text" placeholder='Search Product' />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h3>Products: {products.length}</h3> */}
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddTocart={handleAddTocart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>

                </div>
            </div>
        </>
    );
};

export default Shop;