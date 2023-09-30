// //console.log("web development")

// //Declaring variables


// var subtitle="Frontend web development";
// subtitle ="Bounty";

// console.log(subtitle);

// const name="esther";


// console.log(name)

let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

setInterval(function(){
    let currentTime = new Date()
    hrs.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

},1000)

console.log(currentTime)