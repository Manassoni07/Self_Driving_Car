const canvas = document.getElementById("myCanvas");

// canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new Car(road.getLaneCenter(1),100,30,50); // x,y,width,height
car.draw(ctx);// drawing car using this context 
// but we don't have a car so we define car object by import new file car.js in index.html

animate();

function animate(){
    car.update(road.borders);

    canvas.height = window.innerHeight; // this will solve car issue of extend 
    
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate); // it make loop 
}
