const dropdown = document.querySelector('.dropdown');
const minus = document.querySelector('.mius');
const plus = document.querySelector('.plus');
let addonemiusone = document.querySelector('.addonemiusone').innerHTML;
console.log(addonemiusone);
dropdown.style.display="none"
function closem() {
    dropdown.style.display="none"
}
function displaymanybar() {
    dropdown.style.display="flex"
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
