const hour1=document.getElementById("hour");
const minute1=document.getElementById("minutes");
const second1=document.getElementById("seconds");
const ampm1=document.getElementById("ampm");
function updateClock(){

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    
    hour1.innerText=h;
    minute1.innerText=m;
    second1.innerText=s;
    ampm1.innertext=ampm;
    setTimeout(()=>{
        updateClock();

    },1000)
}
updateClock();