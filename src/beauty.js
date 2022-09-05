let beauty=[
    {
      product_img_src:"https://img.shop.com/Image/240000/248600/248698/products/1887211680.jpg?size=500x500" ,
      product_name:"Lumière de Vie® Hydrate x 3 (Hyaluronic Acid Serum)",
               soldBy:"Sold by Lumière de Vie®",
               product_price:40,
               strikedOffPrice:"$53.95",
               Cashback:"+  $0.80 / 2% Cashback",
               free:"Free shipping",
            },
            {
              product_img_src:"https://img.shop.com/Image/240000/243300/243380/products/1932836050.jpg?size=500x500" ,
              product_name:"Motives® Sculpting Concealer",
               soldBy:"Sold by Market America",
               product_price:22,
               strikedOffPrice:"$35.00",
               Cashback:"+   $0.26 / 2% Cashback",
               free:"Free shipping",
            },
            {
              product_img_src:"https://img.shop.com/Image/240000/243300/243380/products/1869987733.jpg?size=500x500" ,
              product_name:"Motives® Liquid Lipstick",
               soldBy:"Sold by Motives® Cosmetics",
               product_price:20,
               strikedOffPrice:"$34.78",
               Cashback:"+ $0.48 / 3% Cashback",
               free:"Free shipping",
            },
    
            {
              product_img_src:"https://img.shop.com/Image/240000/248600/248698/products/1865413643.jpg?size=500x500" ,
              product_name:"Lumière de Vie® Renewal Gelée (Astaxanthin Treatment))",
               soldBy:"Sold by Lumière de Vie®",
               product_price:65,
               strikedOffPrice:"$69.99",
               Cashback:"+  $1.30 / 2% Cashback",
               free:"Free shipping",
            },
            {
              product_img_src:"https://img.shop.com/Image/240000/243300/243380/products/1332818486.jpg?size=500x500" ,
              product_name:"Motives® Complexion Perfection Face Primer",
               soldBy:"StoreSold by Motives® Cosmetics",
               product_price:27.95,
               strikedOffPrice:"$42.00",
               Cashback:"+  $0.48 / 3% Cashback",
               free:"Free shipping",
            },
    
            {
              product_img_src:"https://img.shop.com/Image/210000/214200/214202/products/1392418288.jpg?size=500x500" ,
              product_name:"Fixx™ Argan Oil Intensive Hair Mask",
               soldBy:"Sold by Fixx™",
               product_price:24.95,
               strikedOffPrice:"$45.00 ",
               Cashback:"+  $0.50 / 2% Cashback",
               free:"Free shipping",
            },
            {
              product_img_src:"https://img.shop.com/Image/240000/243300/243380/products/536366079.jpg?size=500x500" ,
              product_name:"Motives® Lip Crayon",
               soldBy:"Sold by Motives® Cosmetics",
               product_price:16.95,
               strikedOffPrice:"$29.00",
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
    
    
    beauty.map((el)=>{
    
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