//import nav nad footer here------->
import { navbar, sidenav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("mySidenav").innerHTML = sidenav()

//  ----------for menu button, start-------- 

document.getElementById("open").addEventListener("click", openNav)
document.getElementById("close").addEventListener("click", closeNav)

function openNav() {
    document.getElementById("mySidenav").style.width = "25vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//  ----------for menu button, end-------- 


// -----------search function start----------

document.getElementById("i").addEventListener("click", search)


function search() {
    let q = document.getElementById("q").value
    window.location.href = `${q}.html`
}


document.getElementById("q").addEventListener("keydown", serchenter)

function serchenter(e) {
    if (e.key == "Enter") {
        let q = document.getElementById("q").value
        window.location.href = `${q}.html`
    }
}
// -----------search function end----------


let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let cart_left = document.getElementById("product-info");

const append = ()=>{
    cart_left.innerHTML = ""
    cart.forEach((elem,idx) => {
        // console.log(cart)
        cart_left.innerHTML += `
        <h2>Shipment from Market America</h2>
        <p><span><i class="fa-solid fa-truck"></i> </span><span> Add $24.05 </span> in Market America products to qualify for <span>Free Shipping !</span> <span><a href="">Learn More 🛈</a></span></p>
        <div class="cart-product">
            <div class="cart-product-img">
                <img src=${elem.product_img_src} alt="">
            </div>
            <div class="cart-product-info">
                <h3>${elem.product_name}</h3>
                <p class="price">${elem.product_price}</p>
                <p> <span>+$1.60 / 2% <img class="cashback-icon" src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""> Cashback</span></p>
                <p>Item#: LRI44W6</p>
                <p>Size: 6</p>
                <p>Color: Silver with Clear Gem</p>
                <label for="qty2">Quantity: </label>
                <input type="number" name="qty2" id="qty2">
                <a href="#" id="update">Update</a>
            </div>
            <div class="cart-btns">
                <button class="save-later" id="save-later">Save for Later</button>
                <button class="remove" id="remove">Remove</button>
            </div>
        </div>
        `;
        document.getElementById("remove").addEventListener("click", ()=>{
            removeItem(elem,idx)
        })
    });
}
append()


let length = cart.length;
console.log(length)
localStorage.setItem("cartLength",JSON.stringify(length));

var total = cart.reduce(function(sum,elem){
    return sum + +(elem.product_price.split('$').join(''))
},0)

// console.log(total)
document.getElementById("total-price").innerText = `$${total}`;

document.getElementById("total-price-right").innerText = `$${total}`;

document.getElementById("int").innerText = `$${(total/4).toFixed(2)}`;

// document.getElementById("qty2").value;

//-----Remove from cart--------->

function removeItem(elem,idx){
    cart.splice(idx,1)
    localStorage.setItem("myCart",JSON.stringify(cart))
    window.location.reload()
}

// <------Shippping Charges-------->

function shippingCharge(){
    let zip = document.getElementById("ent_zip").value;
    if(zip.length === 6){
        document.getElementById("shipping").innerText = "Shipping: $0.00";
    }
    else{
        document.getElementById("shipping").innerText = "Enter Valid Zipcode"; 
    }
}

// <------Checkout page-------->

document.getElementById("estimate").addEventListener("click", shippingCharge)

function checkout(){
    localStorage.setItem("CartTotal",JSON.stringify([total]));
    window.location.href = ""
}

document.getElementById("checkout").addEventListener("click", checkout)
