import { navbar2 } from "../components/navbar2.js";
document.getElementById('navbar2').innerHTML=navbar2();

let box2 = document.createElement('div');
box2.id = "box2";

let box3 = document.createElement('div');
box3.id = "box3";
let radio = document.createElement('input');
radio.type = "radio";
radio.id = "radio";
box3.append(radio);
let box4 = document.createElement('div');
box4.id = "box4";
let details = JSON.parse(localStorage.getItem('details'));
let first_name = details.first_name;
// console.log(first_name)
let last_name = details.last_name;
let p1 = document.createElement('p');
p1.innerText = first_name + ' ' + last_name;
let p2 = document.createElement('p');
p2.innerText = details.address;
let p3 = document.createElement('p');
p3.innerText = details.city + ', ' + details.state + ', ' + details.zip;
let box5 = document.createElement('div');
box5.id = 'box5';
let p4 = document.createElement('p');
p4.id = "p4";
p4.innerText = 'This address is indicated as a PO Box';
let p5 = document.createElement('a');
p5.innerText = "edit address";
p5.href = '#';
p5.id = "p5";
p5.addEventListener('click', open);
function open() {
    window.location.href = "./shipping address form.html"
}
box5.append(p4, p5);
box4.append(p1, p2, p3, box5);

box2.append(box3, box4);
document.getElementById('left').append(box2);

// document.getElementById('right6').addEventListener('click',ship);
// function ship(){
//     window.location.href="shipping.html";
// }
let total = JSON.parse(localStorage.getItem("CartTotal"));
document.getElementById('line1b').innerText = "Order total:$" + total;
document.getElementById('right3b').innerText = '$' + total;