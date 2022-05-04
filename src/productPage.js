//import nav nad footer here------->


//get item from local storage------>


//append data getting from local storage here------>



//store to cart----

document.getElementById("cart-btn").addEventListener("click", addTocart);

let cart = JSON.parse(localStorage.getItem("myCart"))||[]

const addTocart = (el)=>{
    cart.push(el)
    localStorage.setItem("myCart",JSON.stringify(cart))
    window.location.reload()
}