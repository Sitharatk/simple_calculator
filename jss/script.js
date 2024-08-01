var heading = document.getElementById("hii");
var btn = document.getElementById("btn");

btn.addEventListener("click",changeColor);
heading.addEventListener("mouseover",changeBG)

function changeColor(){
    heading.style.color="red";
}
function changeBG(){
    heading.style.backgroundColor="blue";
} 