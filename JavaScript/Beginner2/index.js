let count = document.getElementById("countLabel").innerText;
const reset = Number(document.getElementById("countLabel").innerText);
count = Number(count);

document.getElementById("doubleDownButton").onclick = function(){
    count += Number(document.getElementById("doubleDownButton").innerText);
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("downButton").onclick = function(){
    count += Number(document.getElementById("downButton").innerText);
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetButton").onclick = function(){
    count = reset;
    document.getElementById("countLabel").innerHTML = count;
    document.getElementById("inspectLabel").innerHTML = "Reset";
}
document.getElementById("upButton").onclick = function(){
    count += Number(document.getElementById("upButton").innerText);
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("doubleUpButton").onclick = function(){
    count += Number(document.getElementById("doubleUpButton").innerText);
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("inspectButton").onclick = function(){
    const inspectLabel = document.getElementById("inspectLabel");
    switch(true){
        case count > 100:
            inspectLabel.innerHTML = "Greater than 100";
            break;
        case count < -100:
            inspectLabel.innerHTML = "Less than 100";
            break;
        case count == 0:
            inspectLabel.innerHTML = "Is 0";
            break;
        case (count <= 100 && count >= -100):
            inspectLabel.innerHTML = "Between -100 and 100, not 0";
            break;
        default:
            inspectLabel.innerHTML = "Default";
    };
}

/*
let username = "Bro Code";
let othername = "    Bro  Code   ";
let phoneNumber = "123-456-789";

console.log("username length : " + username.length);
console.log("othername length : " + othername.length)
console.log("username index 0 : " + username.charAt(0));
console.log("username index of 'o' : " + username.indexOf("o"));
console.log("username last index of 'o' : " + username.lastIndexOf("o"));
console.log("othername trim : " + othername.trim())
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(phoneNumber.replaceAll("-", "/"));
*/

