import { navbar2 } from "../components/navbar2.js";
document.getElementById('navbar2').innerHTML=navbar2();


let details=JSON.parse(localStorage.getItem('details'));
// console.log(details1.first_name);
// details1.map(function(e){
    // console.log(e);
    let first_name=details.first_name;
    // console.log(first_name)
    let last_name=details.last_name;
    let p1=document.createElement('p');
    p1.innerText=first_name+' '+last_name;
    let p2=document.createElement('p');
    p2.innerText=details.address;
    let p3=document.createElement('p');
    p3.innerText=details.city+', '+details.state+', '+details.zip;
    // box4.append(p1,p2,p3);
    document.getElementById('box4').append(p1,p2,p3);
// })
