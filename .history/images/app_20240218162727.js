const cartBtn = document.querySelector(".cart-btn")
const closeCartBtn = document.querySelector(".close-cart")
const clearCartBtn = document.querySelector(".clear-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartItems = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-center")

let cart=[]

// getting the products
class Products{
    async getProducts(){
    try {
        let result = await fetch("products.json");
        let data = await result.json();
        let products = data.items 
        products = products.map(item =>{
            const {title, price} = item.fields
            const {id} = item.sys
            const image = item.fields.image.fields.fil
        })
    }
    catch (error) {
        console.log(error);
    }
}
}
// display products
class UI{}
// local storage
class Storage{}

document.addEventListener("DOMContentLoaded", () => {
    const products = new Products();
    const ui = new UI();
    // get all products
    products.getProducts().then(data => console.log(data));
})