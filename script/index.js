import { footer } from "../components/footer.js";
document.getElementById("footer").innerHTML = footer()



var cleaning = [
    {
        image_url: "https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300",
        discription: "Isotonix® vitamin D with K2",
        price: "$33-$79.95",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "67",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?size=300x300",
        discription: "DNA Miracles Isotonix® Immune",
        price: "$22.50",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "98",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/210000/214200/214267/products/559010729.jpg?size=300x300",
        discription: "Clearshild® Maximum Protection and Hydration",
        price: "$33-$79.95",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "65",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?size=300x300",
        discription: "Isotonix® vitamin C",
        price: "$33",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "67",
        shipping: "Free shiping with $99 order",
    },

];

cleaning.map(function (el) {
    let clean2 = document.getElementById('clean2')
    let div = document.createElement("div")
    let des = document.createElement("h4")
    des.innerText = el.discription
    let price = document.createElement("h4")
    price.innerText = el.price
    let img = document.createElement("img")
    img.src = el.image_url
    let reward = document.createElement("p")
    reward.innerText = el.reward
    let ship = document.createElement("p")
    ship.innerText = el.shipping
    div.append(img, des, price, reward, ship)
    clean2.append(div)

})


var top_sellers = [
    {
        image_url: "https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?size=300x300",
        discription: "Altimate Aloe®",
        price: "$21",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "45",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?size=300x300",
        discription: "Isotonix® Digestive",
        price: "$70",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "67",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/210000/214100/214196/products/935461732__175x175__.jpg",
        discription: "Isotonix® Immune",
        price: "$33",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "45",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300",
        discription: "Isotonix® vitamin D with K2",
        price: "$33-$79.95",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "67",
        shipping: "Free shiping with $99 order",
    },
    {
        image_url: "https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?size=300x300",
        discription: "Isotonix® vitamin C",
        price: "$33",
        reward: "+upto $1.60/2 $ Cashback",
        star_url: "https://img.shop.com/Image/resources/images/star_rating.svg",
        feed_count: "67",
        shipping: "Free shiping with $99 order",
    },
];


top_sellers.map(function (el) {
    let sell2 = document.getElementById('sell2')
    let div = document.createElement("div")
    let des = document.createElement("h4")
    des.innerText = el.discription
    let price = document.createElement("h4")
    price.innerText = el.price
    let img = document.createElement("img")
    img.src = el.image_url
    let reward = document.createElement("p")
    reward.innerText = el.reward
    let ship = document.createElement("p")
    ship.innerText = el.shipping
    div.append(img, des, price, reward, ship)
    sell2.append(div)

})

// -----------search function----------

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

