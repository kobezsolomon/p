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
 
    if(stoerer>=0){stoerer--}
    else{stoerer=0};
    console.log(stoerer);
    if(stoerer>=0){
    document.querySelector('.addonemiusone').innerHTML = stoerer}
    else {
    document.querySelector('.addonemiusone').innerHTML = 0}
    
  
}
