import { navbar2 } from "../checkout/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();

document.getElementById("save").addEventListener('click',save);

function save(){
    // let first_name=document.getElementById("first_name").innerText;
    
    // let last_name=document.getElementById("last_name").value;
    // console.log(first_name,last_name);
    // let address=document.getElementById("address").value;
    // let city=document.getElementById("city").value;
    // let state=document.getElementById("state").value;
    // let zip=document.getElementById("zip").value;

    let details={
        first_name:document.getElementById("first_name").value,
        last_name:document.getElementById("last_name").value,
        address:document.getElementById("address").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        zip:document.getElementById("zip").value,

    };
    
    localStorage.setItem('details',JSON.stringify(details));
    console.log(details);
}