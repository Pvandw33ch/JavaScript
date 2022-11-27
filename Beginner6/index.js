const imagePath     = "images"
const imageArray    = [
    "Anya\ Forger.jpg",
    "Anya\ Forger\ \(1\).jpg",
    "Anya\ Forger\ \(5\).jpg",
    "Anya\ Forger\ \(6\).jpg",
    "Anya\ Forger\ \(7\).jpg",
]
let counter = 1

document.getElementById("myButton").onclick = function(){
    document.body.style.backgroundImage = `url('${imagePath}/${imageArray[counter]}')`
    counter = counter == (imageArray.length - 1)? 0 : (counter + 1)
}