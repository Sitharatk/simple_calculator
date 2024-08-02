var index = 0;

function changeColor() {
    var arr = ["blue", "red", "green", "violet"];
    document.getElementById("demo").style.backgroundColor = arr[index];
    index = (index + 1) % arr.length; // Increment index and wrap around
}