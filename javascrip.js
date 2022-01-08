let menuBtn = document.getElementById("btn_menu");
let cancelBtn = document.getElementById("cancel_btn");
let navBar= document.getElementById("navbar");
console.log(menuBtn);

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
if (document.documentElement.scrollTop > 50)
	nav.classList.add("sticky");
	else
	nav.classList.remove("sticky");
	
  });
