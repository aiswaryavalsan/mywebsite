const text=document.getElementById("textarea");
const totalcount=document.getElementById("total-counter");
const remains=document.getElementById("remaining-counter");
text.addEventListener("keyup",()=>{
   updatecounter();
})
updatecounter();
function updatecounter(){
    totalcount.innerText=text.value.length;
    remains.innerText=text.getAttribute("maxLength")-text.value.length;
}