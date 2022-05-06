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


import { footer } from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();

//get item from local storage------>
//append data getting from local storage here------>

const append = () => {
    let product = JSON.parse(localStorage.getItem("SeeDetails"));
    let container = document.getElementById("product");
    container.innerHTML = null;
    product.forEach(({ product_img_src, product_name, product_price, }) => {

        container.innerHTML = `
        <div class="product-left">
                <div class="product-preview">
                    <img src=${product_img_src} alt="">
                </div>
            </div>
            <div class="product-right">
                <div class="product-info">
                    <div class="product-name">
                        <p>Layered</p>
                        <h1>${product_name}</h1>
                        <p>Sold by Layered</p>
                        <p>Write a Review</p>
                    </div>
                    <div class="product-price">
                        <p class="price">${product_price} <span>+$1.60 / 2% <img class="cashback-icon" src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""> Cashback</span></p>
                        <p class="sezzle">or 4 interest-free payments of <span>$${+((product_price.split("$").pop()) / 4).toFixed(2)} </span> with <img src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg" alt=""> ⓘ</p>
                    </div>
                    <div class="free-ship">
                        <p>Free shipping on orders $99 and up from Market America</p>
                        <a href="#">see details</a>
                    </div>
                    <div class="crypto">
                        <img src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg" alt="">
                        <p>Now accepting Crypto at Checkout!</p>
                    </div>
                    <div class="product-detail">
                        <p>${product_name.split(" ").pop()}</p>
                        <p>Code: LNK46Y</p>
                        <a href="https://img.shop.com/Image/PDfs/US-Layered-Size-Guide-v2-web.pdf">Size Guide</a>
                    </div>
                    <div class="addtoCart">
                        <label for="qty">Qty</label>
                        <select name="qty" id="qty">
                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10+</option>
                        </select>
                        <button class="cart-btn" id="cart-btn" >Add to Cart</button>
                    </div>
                    <div class="zip-code">
                        <input type="number" placeholder="zip code">
                        <button class="ship-btn"> Calculate Shipping</button>
                    </div>
                    <div class="product-discription">
                        <p>A ${product_name} that's made to give your everyday look modern edge. Pair this ${product_name} with other ${product_name} to switch up your daily ${product_name} stack.</p>
                        <a href="#">See details</a>
                    </div>
                    <div class="fb-likes">
                        <p><span><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/M-ZBUCzfbNp.png" alt="">Likes</span> Be the first of your friends to like this.</p>
                    </div>
                </div>
            </div>`;

        document.getElementById("product-details").innerHTML = `
        <p>A ${product_name} that's made to give your everyday look modern edge. Pair this ${product_name} with other ${product_name} to switch up your daily ${product_name} stack.</p>
        `
    });
}
append()

//store to cart----

let cart = JSON.parse(localStorage.getItem("myCart")) || []

const addTocart = () => {
    let product = JSON.parse(localStorage.getItem("SeeDetails"));
    // console.log(product[0])
    cart.push(product[0])
    // console.log(cart)
    localStorage.setItem("myCart", JSON.stringify(cart))
    window.location.reload()
}

document.getElementById("cart-btn").addEventListener("click", addTocart);


let length = cart.length;
console.log(length)
localStorage.setItem("cartLength",JSON.stringify(length));