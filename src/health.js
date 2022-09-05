let health_Nutrition=[
    {
      product_img_src:"https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?size=750x750" ,
      product_name:"Isotonix OPC-3®",
       soldBy:"Sold by Isotonix®",
       product_price:71.95,
       strikedOffPrice:"$88.00 ",
       Cashback:"+  up to $1.44 / 2% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?size=750x750" ,
      product_name:"Ultimate Aloe™",
       soldBy:"Sold by Ultimate Aloe™",
       product_price:27.95,
       strikedOffPrice:"$48.00",
       Cashback:"+   up to $0.54 / 6% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/210000/214100/214196/products/935461732.jpg?size=750x750" ,
      product_name:"Isotonix® Daily Essentials Packets",
       soldBy:"Sold by Isotonix®",
       product_price:77,
       strikedOffPrice:"$89.00",
       Cashback:"+  $0.60 / 2% Cashback",
       free:"Free shipping",
    },

    {
      product_img_src:"https://img.shop.com/Image/210000/214100/214196/products/561800352.jpg?size=750x750" ,
      product_name:"Isotonix® Calcium Plus",
       soldBy:"Sold by Isotonix®",
       product_price:22.95,
       strikedOffPrice:"$29.50",
       Cashback:"+ $0.46 / 2% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/210000/214100/214199/products/561800368.jpg?size=750x750" ,
      product_name:"Heart Health™ Essential Omega III Fish Oil with Vitamin E",
       soldBy:"Sold by Heart Health™",
       product_price:64.95,
       strikedOffPrice:"$78.00",
       Cashback:"+ up to $1.30 / 2% Cashback",
       free:"Free shipping",
    },

    {
      product_img_src:"https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?size=750x750" ,
      product_name:"Probiotics-10",
       soldBy:"Sold by Probiotics-10",
       product_price:36.95,
       strikedOffPrice:"$49.00",
       Cashback:"+  $2.82 / 3% Cashback",
       free:"Free shipping",
    },
    {
      product_img_src:"https://img.shop.com/Image/270000/275200/275287/products/1730212091.jpg?size=750x750" ,
      product_name:"MochaTonix® Single Canister",
       soldBy:"Sold by Mochatonix®",
       product_price:39.95,
       strikedOffPrice:"$49.00",
       Cashback:"+ $0.80 / 2% Cashback",
       free:"Free shipping",
    },
   
]




import { navbar, sidenav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("mySidenav").innerHTML = sidenav()


import { footer } from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()




let SeeDetailsArr=[] 



health_Nutrition.map((el)=>{

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
    window.location.href="ProductDetails.html"
    SeeDetails(el)
  });


  let btn2=document.createElement("button")
  btn2.innerHTML="Buying Options"
  btn2.setAttribute("id","btn2")
  btn2.addEventListener("click",function(){
    window.location.href="productDetails.html"
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