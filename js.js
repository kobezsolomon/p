const dropdown = document.querySelector('.dropdown');
const minus = document.querySelector('.mius');
const plus = document.querySelector('.plus');
const menubar = document.querySelector('.menumobile');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');
 
let index = 0;
let intef = 0;
let images = [image1,image2,image3,image4];

image1.style.display="block";
image2.style.display="none";
image3.style.display="none";
image4.style.display="none";

function next(){
 if(index<=2){index++;} else {index=0};


image1.style.display="none";
image2.style.display="none";
image3.style.display="none";
image4.style.display="none";

images[index].style.display="block";

}
function prev(){
 if(index>0){index--;} else {index=3} ;


image1.style.display="none";
image2.style.display="none";
image3.style.display="none";
image4.style.display="none";

images[index].style.display="block";

}

let addonemiusone = document.querySelector('.addonemiusone').innerHTML;
console.log(addonemiusone);
dropdown.style.display="none"
function closem() {
    dropdown.style.display="none";
    menubar.style.display="inline";
}
function displaymanybar() {
    dropdown.style.display="flex";
    menubar.style.display="none";
    
}
let stoerer = 0;
function addone(){
 
    stoerer++;
    console.log(stoerer);
    document.querySelector('.addonemiusone').innerHTML = stoerer
    
  
}
function miusone(){
 
    if(stoerer>=0){stoerer--}
    else{stoerer=0};
    console.log(stoerer);
    if(stoerer>=0){
    document.querySelector('.addonemiusone').innerHTML = stoerer}
    else {
    document.querySelector('.addonemiusone').innerHTML = 0}
    
  
}
