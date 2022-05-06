function navbar() {
    return `  <div id="up">
            <div id="menu">
                <span id="open" style=" font-size:2.5vw;cursor:pointer">&#9776;</span>
            </div>

            <div id="in">
                <div id="inputdiv">
                    <input id="q" type="text" placeholder="Search SHOP.COM">
                </div>
                <div id="i"><i class="fa-solid fa-magnifying-glass"></i></div>

            </div>

            <div id="login">
                <a href="../HTML/login.html"><i class="fa-solid fa-circle-user"></i></a>
                <a href=""><i class="fa-solid fa-arrow-rotate-left"></i></a>
                <a href="../HTML/cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>

        <div id="down">
            <div><a href="../index.html"><img src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"></a></div>

            <div id="anchor">
                <a href="">Exclusive Brands</a>
                <a href="">Stores</a>
                <a href="">Deals</a>
                <a href="">SHOP Travel</a>
                <a href="">Departments</a>
                <a href="">ShopBuddy</a>
                <a href="">SHOP Local</a>
            </div>

            <div id="motives"><img
                    src="https://img.shop.com/Image/header2013/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg"
                    id="img1">
            </div>
        </div>`
}


function sidenav() {
    return ` <a href="javascript:void(0)" class="closebtn" id="close">&times;</a>
        <div id="slidenav1">
            <img src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg">
            <h2>SHOP.COM</h2>
        </div>

        <h3>Categories</h3>

        <a href="#">Mother's Day Gift Idea</a>
        <a href="#">Gift Center</a>
        <a href="#">SHOP.COM Home Warranties</a>
        <a href="#">Onecart Exclusive Deals</a>
        <a href="#">Clothes</a>
        <a href="#">Shoes</a>
        <a href="#">Beauty</a>
        <a href="#">Home</a>
        <a href="#">Electronics</a>
        <a href="#">Health & Nutrition</a>
        <a href="#">Jewelry</a>
        <a href="#">Kids</a>
        <a href="#">Pet Supplies</a>
        <a href="#">Food & Drink</a>
        <a href="#">Sports</a>
        <a href="#">Travel</a>
        <a href="#">SHOP Travel</a>
        <a href="#">All Stores</a>
        <a href="#">Exclusive Brands</a>
        <a href="#">All Departments</a>

        <h3>Account</h3>

        <a href=""><i class="fa-solid fa-truck"></i>Track Orders</a>
        <a href=""><i class="fa-solid fa-arrow-rotate-left"></i>Record Items - updated</a>
        <a href=""><i class="fa-solid fa-question"></i>Help</a>


        <h3>Features</h3>

        <a href=""><i class="fa-solid fa-list"></i>List Manager</a>
        <a href=""><i class="fa-solid fa-gift"></i>Gift Registry</a>
        <a href=""><i class="fa-brands fa-internet-explorer"></i>eGifts</a>
        <a href=""><i class="fa-solid fa-dollar-sign"></i>Price Alerts</a>
        <a href=""><i class="fa-solid fa-bell"></i>Shop Services</a>
        <a href=""><i class="fa-solid fa-location-dot"></i>Shop Local</a>
        <a href=""><i class="fa-solid fa-person"></i>Shopbuddy</a>
        <a href=""><i class="fa-solid fa-bag-shopping"></i>Trends</a>
        <a href=""><i class="fa-solid fa-tag"></i>Deals</a>
        <a href=""><i class="fa-solid fa-car"></i>Carsaver</a>
        <a href=""><i class="fa-solid fa-star"></i>Best of Web</a>
        <a href=""><i class="fa-solid fa-stethoscope"></i>Nutri-Physical</a>`
}


export { navbar, sidenav }