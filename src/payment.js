import { navbar2 } from "../components/navbar2.js";
document.getElementById('navbar2').innerHTML=navbar2();



let box4=document.createElement('div');
box4.id="box4";
let details=JSON.parse(localStorage.getItem('details'));
let first_name=details.first_name;
// console.log(first_name)
let last_name=details.last_name;
let p1=document.createElement('p');
p1.id="p1";
p1.innerText=first_name+' '+last_name;
let p2=document.createElement('p');
p2.innerText=details.address;
p2.id="p2";
let p3=document.createElement('p');
p3.id="p3";
p3.innerText=details.city+', '+details.state+', '+details.zip;
let box5=document.createElement('div');
box5.id='box5';
let p4=document.createElement('p');
p4.id="p4";
p4.innerText='This address is indicated as a PO Box';
let p5=document.createElement('a');
p5.innerText="Change";
p5.href='#';
p5.id="p5";
box5.append(p4,p5);
box4.append(p1,p2,p3,box5);
document.getElementById('bottom-left').append(box4);

let total=JSON.parse(localStorage.getItem("CartTotal"));
document.getElementById('line1b').innerText="Order total:$"+total;
document.getElementById('right2ab').innerText="$"+total;
document.getElementById('right3b').innerText="$"+total;

document.querySelector('#right7b').addEventListener('click',place);
function place(){
    alert('Your order has been successfully placed!!');
}

