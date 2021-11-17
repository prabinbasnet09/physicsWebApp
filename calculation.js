function calcHeight(gravity, velocity, height, time){
    height = velocity*time - 0.5 * gravity * Math.pow(time, 2);
}

function calcHeight(gravity, velocity, time){
     var  height = parseFloat(velocity)*parseFloat(time) - 0.5 * parseFloat(gravity) * Math.pow(parseFloat(time), 2);
     alert(height);
     document.getElementById("height").innerHTML = height;
}

function calcFinalVelocity() {
     let finalVelocity = Math.sqrt(Math.pow(velocity,2) - 2 * gravity * height);
     return finalVelocity;
}



let user_time, init_velocity, accDTG, user_height;

init_velocity = 20;
accDTG = 9.8;

let time_range = 2 * (init_velocity/accDTG);

console.log('s');
const time = [0];
function time_points (time_range)
{
    let max_time = time_range;
    let i = 0;

    while(time_range >= -1)
    {
         time[i] = max_time;
         max_time -= 0.5;
    }
    return time;
}

function height_plots (init_velocity, time)
{
    const height = [];

    for(var i =0; i < time.length; i++)
    {
          height[i] = init_velocity * time[i] - 0.5 * accDTG * Math.pow(time[i],2);
    }
    return height;
}

function velocity_points (init_velocity, time)
{
     const velocity = [];
     for(var i =0; i < time.length; i++)
     {
          velocity[i] = init_velocity - accDTG * time[i];
     }
     return velocity;
}

console.log(time_points(init_velocity, time_range));
console.log(velocity_points(init_velocity, time));
console.log(velocity_points(init_velocity, time));