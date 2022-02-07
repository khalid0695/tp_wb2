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
window.addEventListener()
function dawon(){
document.title=`${min}min et ${sec}sec online pomodoro`;
   
    display();  
    sec--;
    if(sec<0)   
    {
    sec=59;
    min--} 
if(min<5)
    document.getElementById("container").style.boxShadow="-10px 10px 10px #f44040";
    else document.getElementById("container").style.boxShadow="-10px 10px 10px #4070f4";
    if(min<0){
    clearInterval(t); 
    document.getElementById('fin').play();
    document.getElementById("mybtn").style.display = 'inline block'; 
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
