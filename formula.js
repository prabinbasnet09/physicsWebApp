// variables need to compute result
// Need to be changed with getElementBYID from HTML instead of given value
var gravity = 9.8;
var velocity = 0;
var height = 20.39;
var time = 1.99;
const time_points = [];

try
{
    // Calculates result based on the given data
    function results()
    {
        // if value of acceleration due to gravity is not provided by the user
        if(!gravity==0)
        {
            // Calculates max height and time when velocity is given
            if(velocity!=0 && height==0 && time==0)
            {
                time = velocity/gravity;
                height = velocity * time - 0.5 * gravity * Math.pow(time,2);
                console.log(gravity, velocity, height, time);
            }
            // calculates time needed to reach the given height
            if(velocity!=0 && height!=0 && time==0)
            {
                let final_velocity = Math.sqrt(velocity * velocity - 2 * gravity * height);
                time = (velocity - final_velocity)/gravity;
                console.log(gravity, velocity, height, time);
            }
            // calculates height at given poitn of time
            if (velocity!=0 && height==0 && time!=0)
            {
                height = velocity * time - 0.5 * gravity * Math.pow(time,2);
                console.log(gravity, velocity, height, time);
            }
            // calculates initial velocity when height and time is given
            if(velocity==0 && height!=0 && time!=0)
            {
                velocity = (height + 0.5 * gravity * Math.pow(time,2))/time;
                console.log(gravity, velocity, height, time);

            }
        }

        else
        {
            gravity = 9.8;
            velocity = 0;
            height = 0;
            time = 0;
        }
    }
}
// resets value incase of exception
catch(exception)
{
    gravity = 9.8;
    velocity = 0;
    height = 0;
    time = 0;
}

// creates array for the given range of time to reach max velocity/height
function time_plots()
{
    results();
    let time_range = 2 * velocity/gravity;
    let init_time = 0;
    for(let i=0; i<2 * time_range; i++)
    {
        time_points[i] = init_time;
        init_time += 0.5;
    }
    console.info(time_points);
    console.log(time_points[1]);
}
time_plots();

// creates array of points of height at diffferent instance of time
function height_plots()
{
    const height_points = [];
    for(let i=0; i< time_points.length; i++)
    {
        height_points[i] = velocity * time_points[i] - 0.5 * gravity * Math.pow(time_points[i],2);
    }
    console.info(height_points);
    return height_points;
}
height_plots();

// creates array of points of velocity at different isntance of time
function velocity_plots()
{
    const velocity_points = [];
    for(let i=0; i<time_points.length; i++)
    {
        let points = velocity - gravity * time_points[i];
        velocity_points[i] = Math.abs(points);
    }

    console.info(velocity_points);
    return velocity_points;
}
velocity_plots();

