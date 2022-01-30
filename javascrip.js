let menuBtn = document.getElementById("btn_menu");
let cancelBtn = document.getElementById("cancel_btn");
let navBar= document.getElementById("navbar");
let scrollButton= document.getElementById("scrollButton");
let anchor=document.getElementsByClassName('menu');
console.log(menuBtn);
scrollButton.style.opacity=0;

menuBtn.onclick = function(){
	menuBtn.style.opacity = 0;
	menuBtn.style.pointerEvents = "none" ;
	navBar.classList.add("active");
} 
cancelBtn.onclick = function(){
	menuBtn.style.opacity = 1;
	menuBtn.style.pointerEvents = "auto" ;
	navBar.classList.remove("active");
}
let nav= document.getElementById("nav");
let val;
window.addEventListener ( "scroll" , function () {
if (document.documentElement.scrollTop > 50){
	nav.classList.add("sticky");
	scrollButton.style.opacity=1;
	console.log(scrollButton.style.opacity);
}
else
	nav.classList.remove("sticky");
	div.scroll-button.classList.remove("scroll-button");
	console.log(scrollButton.style.opacity);
  });
  function f(){
	navBar.classList.remove("active"); 
	menuBtn.style.opacity = 1;
	menuBtn.style.pointerEvents = "auto" ;
 }
	


