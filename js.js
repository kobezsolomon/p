const dropdown = document.querySelector('.dropdown');
const minus = document.querySelector('.mius');
const plus = document.querySelector('.plus');
const menubar = document.querySelector('.menumobile');
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
 
    stoerer--;
    console.log(stoerer);
    document.querySelector('.addonemiusone').innerHTML = stoerer
    
  
}
