const imagePath     = "Beginner9/images"
const imageArray    = [
    "KrustyKrab1.webp",
    "KrustyKrab2.webp",
    "Ocean.webp",
    "Neighbors.webp"
]
let counter = 0

document.getElementById("myButton").onclick = function(){
    document.body.style.backgroundImage = `url('${imagePath}/${imageArray[counter]}')`
    counter = counter == (imageArray.length - 1)? 0 : (counter + 1)
    document.getElementById("myButton").disabled = true;
    setTimeout(function(){document.getElementById("myButton").disabled = false;}, 2000);
}
