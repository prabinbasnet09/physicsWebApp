const g = 9.8;
let height, time, initialVelocity;
let velocity = 5.0;


function calcHeight(gravity, velocity, height, time){
    height = velocity*time - 0.5 * gravity * Math.pow(time, 2);
    console.log(height);
}


