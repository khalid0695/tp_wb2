var min=25;
let sec=0;
getSec=document.getElementById('sec');
getMin=document.getElementById('min');
var t;
function play(){
   document.getElementById('click').play();
   t=setInterval(dawon,1000);
   document.getElementById("mybtn").style.display = 'none';
}
function dawon(){
   
    display();  
    sec--;
    if(sec<0)   
    {
    sec=59;
    min--}
    if(min<0){
    clearInterval(t); 
    document.getElementById('fin').play();
    document.getElementById("mybtn").style.display = 'inline'; 
     min=25;
     sec=0;
}
}
function display(){
    if(sec<10)
    getSec.innerHTML='0'+sec;
   else
   getSec.innerHTML= sec;
   if(min<10)
   getMin.innerHTML='0'+min;
   else
   getMin.innerHTML=min;
}
function focuss(){
   document.getElementById("mybtn").style.display = 'inline';
   min=25;
    sec=0;
    display();
    clearInterval(t);
}
function breaktime(){
   document.getElementById("mybtn").style.display = 'inline';
    min=05;
    sec=0;
    display();
    clearInterval(t);
    
}
function longbreak(){
    document.getElementById("mybtn").style.display = 'inline';
    min=15;
    sec=0;
    display();
    clearInterval(t);
}


function pause(){
    document.getElementById("mybtn").style.display = 'inline';
    clearInterval(t);   
}
