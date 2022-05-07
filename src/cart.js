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
    if (q == "") {
        alert("Enter Valid Input")
    }
    else {
        window.location.href = `${q}.html`
    }
}
document.getElementById("q").addEventListener("keydown", serchenter)

function serchenter(e) {
    if (e.key == "Enter") {
        let q = document.getElementById("q").value
        if (q == "") {
            alert("Enter Valid Input")
        }
        else {
            window.location.href = `${q}.html`
        }
    }
}
// -----------search function end---------->

// helper function---------->
// 1. getElementById----->
let get = (x) => {
    return document.getElementById(x);
}
// 2. createElement
let create = (x) => {
    return document.createElement(x);
}




let cart = JSON.parse(localStorage.getItem("myCart"));

let cart_left = get("product-info");

cart.forEach((elem, idx) => {
    console.log(cart)
    // cart_left.innerHTML = null;
    let heading = create("h2");
    console.log(heading)
    heading.innerText = "Shipment from Market America";
    console.log(heading)
    let truck = create("p");
    truck.className = "truck"
    let span1 = create("span");
    let i1 = create("i");
    i1.setAttribute("class", "fa-solid fa-truck")
    span1.append(i1);
    let span2 = create("span");
    span2.innerHTML = `Add $24.05 in Market America products to qualify for Free Shipping ! `;
    let span3 = create("span");
    let a1 = create("a");
    a1.innerText = ` > Learn More 🛈`;
    span3.append(a1);
    truck.append(span1, span2, span3)

    //-----productdiv--->
    let cart_product = create("div");
    cart_product.classList.add("cart-product");

    //-----productdiv > cart_product_img --->
    let cart_product_img = create("div");

    cart_product_img.classList.add("cart-product-img");
    let product_img = create("img");
    product_img.src = `${elem.product_image_src}`;

    cart_product_img.append(product_img);

    //-----productdiv > cart_product_info --->
    let cart_product_info = create("div");

    cart_product_info.classList.add("cart-product-info");
    let h3 = create("h3");
    h3.innerText = `${elem.product_name}`;
    let price = create("p");
    price.innerText = `${elem.product_price}`;
    price.classList.add("price");
    let cashback = create("p")
    //  `<span>+$1.60 / 2% <img class="cashback-icon" src="" alt=""> Cashback</span>`;
    let span4 = create("span");
    span4.innerHTML = `+$1.60 / 2%`;

    let span5 = create("span");
    let cashback_icon = create("img");
    cashback_icon.src = `https://img.shop.com/Image/resources/images/cashback-icon.svg`;
    cashback_icon.className = "cashback-icon";
    span5.append(cashback_icon);
    let span6 = create("span");
    span6.innerHTML = "Cashback"
    cashback.append(span4, span5, span6)
    let itemID = create("p");
    itemID.innerText = `Item#: LRI44W6`;
    let size = create("p");
    size.innerText = `size: `;

    cart_product_info.append(h3, price, cashback, itemID, size);

    //-----productdiv > cart-btns --->
    let cart_btns = create("div");
    cart_btns.classList.add("cart-btns");

    let saveLater = create("button");
    saveLater.classList.add("save-later");
    saveLater.setAttribute("id", "save-later");
    saveLater.innerText = "Save for Later";

    let remove = create("button");
    remove.classList.add("remove");
    remove.setAttribute("id", "remove");
    remove.innerText = "Remove";
    remove.addEventListener("click", () => {
        removeItem(elem, idx)
    });

    cart_btns.append(saveLater, remove);

    //-----append to cart_product------>

    cart_product.append(cart_product_img, cart_product_info, cart_btns)

    cart_left.append(heading, truck, cart_product);
});
//-----Remove from cart--------->
function removeItem(elem, idx) {
    cart.splice(idx, 1);

    localStorage.setItem("myCart", JSON.stringify(cart));
    // localStorage.clear()
    window.location.reload();
}


let length = cart.length;
console.log(length)
localStorage.setItem("cartLength", JSON.stringify(length));

var total = cart.reduce(function (sum, elem) {
    return sum + +(elem.product_price.split('$').join(''))
}, 0)

// console.log(total)
let cartP = get("cartLength");
cartP.innerText = `${length}`;


get("total-price").innerText = `$${total}`;

get("total-price-right").innerText = `$${total}`;

get("int").innerText = `$${(total / 4).toFixed(2)}`;

// get("qty2").value;

// <------Shippping Charges-------->

function shippingCharge() {
    let zip = get("ent_zip").value;
    if (zip.length === 6) {
        get("shipping").innerText = "Shipping: $0.00";
    }
    else {
        get("shipping").innerText = "Enter Valid Zipcode";
    }
}

// <------Checkout page-------->

get("estimate").addEventListener("click", shippingCharge)

get("checkout").addEventListener("click", checkout)
// document.getElementById("checkout").addEventListener("click", checkout)

function checkout() {
    // console.log("yes")
    localStorage.setItem("CartTotal", JSON.stringify([total]));
    window.location.href = "address.html"
}

