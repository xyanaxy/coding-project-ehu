let pixel = 40;


function setup() {
  createCanvas(400, 400);
  background("#DEFF6A");
}

function draw() {
  drawGrid();
  rect(pixel,pixel,pixel,pixel);
}

function drawGrid() {
  textSize(10);
  fill(0);
  for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 40; j++) {
      line(i * pixel, 0, i * pixel, 900);
      text(i * pixel, i * pixel + 3, pixel);
      line(0, j * pixel, 930, j * pixel);
      text(j * pixel, 2, j * pixel + 10);
    }
  }
}