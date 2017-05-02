AnimationSettings = {
  fps: 30
}

function animationLoop(time){
  requestAnimationFrame(animationLoop);

  if(time-lastTime>=1000/fps){

    lastTime = time;

    x=x+dirX;
    y=y+dirY;

    if(y<Pitch.out+Ball.radius||y>Pitch.height+Pitch.out-Ball.radius){
      dirY = -dirY;
    }
    if(x<Pitch.out+Ball.radius||x>Pitch.width+Pitch.out-Ball.radius){
      dirX = -dirX;
    }

    drawLoop();
    goalsCounter();
    outsCounter();
    timer();
  }
}
