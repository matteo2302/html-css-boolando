/*const Heart1 = document.getElementById("heart1");

let heart1 = Heart1;
heart1.addEventListener("click", function (e){ 
if(heart1.style.color==="black"){
    heart1.style.color="red";
}else{
    heart1.style.color="black";
}
});*/

/* qui proviamo a rendere la funzione funzionante per tutti i bottoni*/
const Hearts = document.querySelectorAll(".heart");

Hearts.forEach(function(heart){
    heart.addEventListener("click", function(){
        if(heart.style.color==="black"){
            heart.style.color="red";
        }else{
            heart.style.color="black";
        }
    });
});