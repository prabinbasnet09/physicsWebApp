


function calcHeight(gravity, velocity, time){
     var  height = parseFloat(velocity)*parseFloat(time) - 0.5 * parseFloat(gravity) * Math.pow(parseFloat(time), 2);
     alert(height);
     document.getElementById("height").innerHTML = height;
}

function calcFinalVelocity() {
     let finalVelocity = Math.sqrt(Math.pow(velocity,2) - 2 * gravity * height);
     return finalVelocity;
}

