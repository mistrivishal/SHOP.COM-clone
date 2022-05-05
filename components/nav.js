import { navbar, sidenav } from "./navbar.js";
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
