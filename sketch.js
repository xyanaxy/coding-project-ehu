let scene = 1;
// let circles = [];
// let numCircles = 5;




function windowResized() {
  console.log("resized");
  let width = document.querySelector("#sketch-div").clientWidth;
  console.log(width);
  let height = document.querySelector("#sketch-div").clientHeight;
  console.log(height);
  resizeCanvas(width, windowHeight);
  
}

function setup() {
 
 frameRate(10);
  var canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('sketch-div')
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  background(255,255,0);

  noStroke();

  // for (let i = 0; i < numCircles; i++) {
  //   circles.push({
  //     x: random(width),
  //     y: random(height),
  //     speedX: random(-2, 2),
  //     speedY: random(-2, 2),
  //     baseSize: random(20, 50),
  //     pulseOffset: random(TWO_PI)
  //   });
  // }
}




function draw() {
  if (frameCount % 50 ==0) {
    if (scene < 2) {
      scene++;
    } else {
      scene = 1;
    }
  }

  if (scene == 1) {
    scene1();
  }
  if (scene == 2) {
    scene2();
  }

}

function scene1() {
  background(0);
  //rectMode(CENTER);
  
  if (frameCount % 1 == 0) {  
    
    for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      
      push();
      translate(x + 50, y + 50); 
      for (let i = 0; i < 5; i++) {
        push();
        rotate(radians(i * 5* frameCount));
       
         if (i % 10 == 0) {
          fill(random(0,255), random(0,255), random(0,255));
          rect(0, 0, 50, 50);
        } else {
          rect(0, 0, 50, 50);
        }
        pop();
      }
      pop();
      
    }
  }
}
}
function scene2(){
  push();
  background(255, 255, 0); // Keep a yellow background

  background(0); // Keep the background black

  for (let x = 50; x < width; x += 100) { // Start from 50 to center grid
    for (let y = 50; y < height; y += 100) {
      push();
      translate(x, y);
      fill(random(255), random(255), random(255)); // Assign a new random color
      rect(0, 0, 50, 50); // Draw a centered rectangle
      pop();
    }
  }
  pop();
}
// function scene2(){
//   for (let i = 0; i < circles.length; i++) {
//     fill(random(0,255),random(0,255),random(0,255));
//     let c = circles[i];
//     let size = c.baseSize + sin(frameCount * 0.1 + c.pulseOffset) * 20;
    
//     c.x += c.speedX;
//     c.y += c.speedY;
    
//     if (c.x < 0 || c.x > width) c.speedX *= -1;
//     if (c.y < 0 || c.y > height) c.speedY *= -1;
    
//     ellipse(c.x, c.y, size, size);
//   }
// }