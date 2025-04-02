void scene2(){
  for (let i = 0; i < circles.length; i++) {
    fill(random(0,255),random(0,255),random(0,255));
    let c = circles[i];
    let size = c.baseSize + sin(frameCount * 0.1 + c.pulseOffset) * 20;
    
    c.x += c.speedX;
    c.y += c.speedY;
    
    if (c.x < 0 || c.x > width) c.speedX *= -1;
    if (c.y < 0 || c.y > height) c.speedY *= -1;
    
    ellipse(c.x, c.y, size, size);
  }
}