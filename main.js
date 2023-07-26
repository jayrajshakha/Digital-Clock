
// HTML elements thats initalized and store in variables
const hourElement = document.querySelector("#hrs");
const minuteElement = document.querySelector("#min");
const secondElement = document.querySelector("#sec");




// set internal that repeatedly updates the current time and all elements values after 1 second 
setInterval(() => {

    // create a timer
    let currentTime = new Date();

    
    // whole current time converted to hour
    let hour = currentTime.getHours();
    if(hour < 10){
        hourElement.textContent = "0" + hour;
    }
    else{
        hourElement.textContent = hour;
    }
    
     // whole current time converted to mi
    let minute = currentTime.getMinutes();
    if(minute < 10){
        minuteElement.textContent = "0" + minute;
    }
    else{
        minuteElement.textContent = minute;
    }
 
     // whole current time converted to seconds
    let second = currentTime.getSeconds();
    if(second < 10){
        secondElement.textContent = "0" + second;
    }
    else{
        secondElement.textContent = second;
    }
    
}, 1000);