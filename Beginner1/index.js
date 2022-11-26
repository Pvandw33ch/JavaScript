//console.log("Pvandw33ch")

//window.alert("Retard Alert")

/*
let birth   = 2001;
let year    = 2022;
let age     = year - birth;

age += 1

let firstName   = "Pv";
let student     = true;
firstName += "andw33ch";
*/

/*
console.log(age);
console.log(firstName, typeof firstName);
console.log(typeof age);
window.alert(student);
*/

/*
document.getElementById("p1").innerHTML = "Hello, my name is " + firstName;
document.getElementById("p2").innerHTML = "I am " + age + " years old";
document.getElementById("p3").innerHTML = "Student : " + student;
#body <p id="p1"></p>
*/

/*
let username = window.prompt("What's your name?");
console.log(username)
*/

let username;
let age;
const E = Math.E;
const PI = Math.PI;
console.log("\u03C0 = " + PI)
console.log("e = " + E)

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myInput").value;
    age = Number(document.getElementById("myInput2").value) + 1;
    console.log(username)
    console.log(age)
    document.getElementById("myText").innerHTML = "Hello, I am " + username
    document.getElementById("myText2").innerHTML = "I am " + age + " years old next year"
}

/*
Math.round(n);
Math.floor(n);
Math.ceil(n);
Math.pow(n, 2);
Math.sqrt(n);
Math.abs(n);
Math.max(narray);
Math.min(narray);
Math.PI;
*/