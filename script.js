const redLight = document.getElementById("first-light")
const yellowLight = document.getElementById("second-light")
const greenLight = document.getElementById("third-light")

 
function changeTrafficLight(){
    if(yellowLight.className == "light yellow-light"){
        redLight.className = "light red-light"
        yellowLight.className = "light light-off"
    }else if(redLight.className == "light red-light"){
        greenLight.className = "light green-light"
        redLight.className = "light light-off"
    }else{
        yellowLight.className = "light yellow-light"
        greenLight.className = "light light-off"
    }
}