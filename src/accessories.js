  // ---------------------json data-----------------//




  //     fetch("../data/accessories_1.json")
  // .then(res=>res.json())
  // .then(data=>console.log(data))
  // append(data)


  import { navbar, sidenav } from "../components/navbar.js";
  document.getElementById("navbar").innerHTML = navbar()
  document.getElementById("mySidenav").innerHTML = sidenav()


  import { footer } from "../components/footer.js"
  document.getElementById("footer").innerHTML = footer()





  fetch("../data/accessories_1.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      // console.log(res)
      appendData(res)

    }).catch(function (err) {
      console.log(err)
    })



  let SeeDetailsArr = []




  function appendData(data) {
    console.log(data)
    data.map((el) => {

      let div = document.createElement("div")

      let image = document.createElement("img")
      image.src = el.product_img_src
      // image.src=el.product_img-src

      let h2 = document.createElement("p")
      h2.innerHTML = el.product_name
      h2.setAttribute("id", "title")

      let p1 = document.createElement("p")
      p1.innerHTML = "Sold by Ranch & Home"
      p1.setAttribute("id", "soldBy")

      let div1 = document.createElement("div")
      div1.setAttribute("id", "div1")


      let div2 = document.createElement("div")
      div2.setAttribute("id", "div2")


      let p2 = document.createElement("p")
      p2.innerHTML = el.product_price
      p2.setAttribute("id", "price")

      let p21 = document.createElement("p")
      p21.innerHTML = "$"
      p21.setAttribute("id", "p21")


      let p3 = document.createElement("p")
      p3.innerHTML = "$109.00"
      p3.setAttribute("id", "strick")

      let p4 = document.createElement("p")
      p4.innerHTML = "+ $1.56 / 6% Cashback"
      p4.setAttribute("id", "p4")

      let p5 = document.createElement("p")
      p5.innerHTML = "Free shipping"
      p5.setAttribute("id", "free")


      let div3 = document.createElement("div")
      div3.setAttribute("id", "div3")

      let btn1 = document.createElement("button")
      btn1.innerHTML = "See Details"
      btn1.setAttribute("id", "btn1")
      btn1.addEventListener("click", function () {
        SeeDetails(el)
      });


      let btn2 = document.createElement("button")
      btn2.innerHTML = "Buying Options"
      btn2.setAttribute("id", "btn2")
      btn2.addEventListener("click", function () {
        SeeDetails(el)
      });


      div1.append(p2, p3)
      div2.append(div1)
      div3.append(btn1, btn2)
      div.append(image, h2, p1, div2, p4, p5, div3)
      document.getElementById("container").append(div)

    })

  }

  let SeeDetails = (el) => {
    SeeDetailsArr.push(el)
    localStorage.setItem("SeeDetails", JSON.stringify(SeeDetailsArr))
    window.location.href = "productDetails.html"
  }






  // ------------------------sidenav-----------------

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
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