let menuBtn = document.getElementById("btn_menu");
let cancelBtn = document.getElementById("cancel_btn");
let navBar= document.getElementById("navbar");
let scrollButton= document.getElementById("btns");
let anchor=document.getElementsByClassName('menu');
const newLocal = "cp";
let serv=document.getElementsByClassName(newLocal);


serv[0].onclick=function(){
	navBar.classList.remove('active');
	menuBtn.style.opacity = 1;
	menuBtn.style.opacity = 1;
	menuBtn.style.pointerEvents = "auto" ;
	document.body.style.overflow="auto";
	scrollButton.style.pointerEvents="auto";

	
}
serv[1].onclick=function(){
	navBar.classList.remove('active');
	menuBtn.style.opacity = 1;
	menuBtn.style.pointerEvents = "auto" ;
	document.body.style.overflow="auto";
	scrollButton.style.pointerEvents="auto";

}	
menuBtn.onclick = function(){
	menuBtn.style.opacity = 0;
	menuBtn.style.pointerEvents = "none" ;
	navBar.classList.add("active");
	document.body.style.overflow="hidden";
	scrollButton.style.pointerEvents="none";
} 
cancelBtn.onclick = function(){
	menuBtn.style.opacity = 1;
	menuBtn.style.pointerEvents = "auto" ;
	document.body.style.overflow="auto";
	scrollButton.style.pointerEvents="auto";
	navBar.classList.remove("active");
}
let nav= document.getElementById("nav");
let val;
scrollButton.style.opacity=0;
window.addEventListener ( "scroll" , function () {
if (document.documentElement.scrollTop > 50){
	nav.classList.add("sticky");
	scrollButton.style.opacity=1;
}
else
	{nav.classList.remove("sticky");
	scrollButton.style.opacity=0;
	scrollButton.style.color="white";}

  });
  function f(){
	navBar.classList.remove("active"); 
	menuBtn.style.opacity = 1;
	menuBtn.style.pointerEvents = "auto" ;
	document.body.style.overflow="auto";
	scrollButton.style.pointerEvents="auto";


 }
	


