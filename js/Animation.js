AnimationSettings = {
  fps: 30
}

function animationLoop(time){
  requestAnimationFrame(animationLoop);

  if(time-lastTime>=1000/fps){

    lastTime = time;

    //ball saver
    if(y<Pitch.out+Ball.radius-25||y>Pitch.height+Pitch.out-Ball.radius+25){
      x = Pitch.out+Pitch.width/2;
      y = Pitch.height/2;
    }
    if(x<Pitch.out+Ball.radius-25||x>Pitch.width+Pitch.out-Ball.radius+25){
      x = Pitch.out+Pitch.width/2;
      y = Pitch.height/2;
    }

    x=x+dirX;
    y=y+dirY;

    if(y<Pitch.out+Ball.radius||y>Pitch.height+Pitch.out-Ball.radius){
      dirY = -dirY*(Math.random()*0.4+0.8);
    }
    if(x<Pitch.out+Ball.radius||x>Pitch.width+Pitch.out-Ball.radius){
      dirX = -dirX*(Math.random()*0.4+0.8);
    }

    drawLoop();
    goalsCounter();
    outsCounter();
    timer();
  }
}
