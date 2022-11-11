
function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");


}
function draw() {
  background(220);

    if(mouseX < width / 2){
    console.log('left'); //write somthing in console
    ellipse(200, 200, 200, 200)
    fill('red');
    arc(200, 250, 100, 100, PI, TWO_PI);
    
    } else{
      console.log('right');
      ellipse(200, 200, 200, 200)
    fill('green');
    
    arc(200, 200, 100, 100, TWO_PI, PI);
   
    }
  }