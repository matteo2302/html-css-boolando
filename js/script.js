const Heart1 = document.getElementById("heart1");

let heart1 = Heart1;
heart1.addEventListener("click", function (e){ 
if(heart1.style.color==="black"){
    heart1.style.color="red";
}else{
    heart1.style.color="black";
}
});