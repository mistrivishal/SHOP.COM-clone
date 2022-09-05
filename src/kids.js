
let kids=[
    {
      product_img_src:"https://img.shop.com/Image/260000/263300/263359/products/1634776773.jpg?size=400x400" ,
      product_name:"Swea Pea & Lilli Baby Girls Ivory Lilac Satin Organza Flower Girl Dress 3-24M",
       soldBy:"Sold by Sophia's Style",
       product_price:52,
       strikedOffPrice:"$69.99",
       Cashback:"+ up to $1.41 / 6% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/260000/266700/266752/products/1923645513.jpg?size=400x400" ,
      product_name:"Koala Kids Baby Girls Happy Easter Tutu Glitter",
       soldBy:"Sold by Authentic Designer Fashion",
       product_price:16.99,
       strikedOffPrice:"$29.00",
       Cashback:"+  $1.14 / 3% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/280000/288000/288080/products/1892927812.jpg?size=400x400" ,
      product_name:"Dino Fun - Baby Kids FeatherSoft Leggings",
       soldBy:"Sold by NotJustLeggings",
       product_price:17.50,
       strikedOffPrice:"$28.00",
       Cashback:"+ $1.40 / 8% Cashback",
       free:"Free shipping",
    },

    {
      product_img_src:"https://img.shop.com/Image/240000/243500/243545/products/1910442884.jpg?size=400x400" ,
      product_name:"Burt's Bees Baby Size 6-9M 2-Piece Vintage Snowflake Tunic And Legging Set In Grey/white",
       soldBy:"Sold by Bed Bath & Beyond",
       product_price:7.29,
       strikedOffPrice:"$9.50",
       Cashback:"+   up to $1.39 / 2% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/240000/243500/243545/products/1908177435.jpg?size=400x400" ,
      product_name:"Carhartt Infant Canvas Cap In Pink",
       soldBy:"Sold by Bed Bath & Beyond",
       product_price:12,
       strikedOffPrice:"$14.00",
       Cashback:"+ $3.12 / 6% Cashback",
       free:"Free shipping",
    },

    {
      product_img_src:"https://img.shop.com/Image/260000/263300/263359/products/1914876866.jpg?size=400x400" ,
      product_name:"Bonnie Jean Baby Girls Red Flocked Matte Satin Pleated Christmas Dress 0-9M",
       soldBy:"Sold by Sophia's Style",
       product_price:41.59,
       strikedOffPrice:"$319.00",
       Cashback:"+ $0.83 / 2% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/260000/268500/268595/products/1907286590.jpg?size=400x400" ,
      product_name:"Boys 4-12 Jammies For Your Families Star Wars The Mandalorian The Child aka Baby Yoda Pajama Set, Boy's, Multicolor",
       soldBy:"Sold by Kohl's",
       product_price:11.40,
       strikedOffPrice:"$19.00",
       Cashback:"+  $2.82 / 3% Cashback",
       free:"Free shipping",
    },
   
]




import { navbar, sidenav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("mySidenav").innerHTML = sidenav()


import { footer } from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()





let SeeDetailsArr=[] 


kids.map((el)=>{

let div=document.createElement("div")

let image=document.createElement("img")
image.src=el.product_img_src

let h2=document.createElement("p")
h2.innerHTML=el.product_name
h2.setAttribute("id","title")

let p1=document.createElement("p")
p1.innerHTML=el.soldBy
p1.setAttribute("id","soldBy")

let div1=document.createElement("div")
div1.setAttribute("id","div1")


let div2=document.createElement("div")
div2.setAttribute("id","div2")


let p2=document.createElement("p")
p2.innerHTML=el.product_price
p2.setAttribute("id","price")

let p21=document.createElement("p")
p21.innerHTML="$"
p21.setAttribute("id","p21")


let p3=document.createElement("p")
p3.innerHTML=el.strikedOffPrice
p3.setAttribute("id","strick")

let p4=document.createElement("p")
p4.innerHTML=el.Cashback
p4.setAttribute("id","p4")

let p5=document.createElement("p")
p5.innerHTML=el.free
p5.setAttribute("id","free")


let div3=document.createElement("div")
  div3.setAttribute("id","div3")

let btn1=document.createElement("button")
  btn1.innerHTML="See Details"
  btn1.setAttribute("id","btn1")
  btn1.addEventListener("click",function(){
    SeeDetails(el)
  });

  let btn2=document.createElement("button")
  btn2.innerHTML="Buying Options"
  btn2.setAttribute("id","btn2")
  btn2.addEventListener("click",function(){
    SeeDetails(el)
  });

  div1.append(p2,p3)
  div2.append(div1)
  div3.append(btn1,btn2)
  div.append(image,h2,p1,div2,p4,p5,div3)
  document.getElementById("container").append(div)






})


let SeeDetails=(el)=>{
SeeDetailsArr.push(el)
localStorage.setItem("SeeDetails",JSON.stringify(SeeDetailsArr))
window.location.href="productDetails.html"
}

// ------------------------sidenav-----------------

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = this.nextElementSibling;
if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
} else {
  dropdownContent.style.display = "block";
}
});
}





/*-------------------navbar js-----------------------*/



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