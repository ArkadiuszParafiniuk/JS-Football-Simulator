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

    //ball
    x=x+dirX;
    y=y+dirY;

    //player1
    pl01x+=dirPl01x;
    pl01y+=dirPl01y;
    pl01diffX = (pl01x - x)*Player.speed*(Math.random()*(4/10)+0.80);
    pl01diffY = (pl01y - y)*Player.speed*(Math.random()*(4/10)+0.80);
    distance01 = Math.sqrt((pl01x - x )*(pl01x - x )+(pl01y - y)*(pl01y - y));
    dirPl01x=(-1/distance01)*pl01diffX;
    dirPl01y=(-1/distance01)*pl01diffY;

    //player2
    pl02x+=dirPl02x;
    pl02y+=dirPl02y;
    pl02diffX = (pl02x - x)*Player.speed*(Math.random()*(4/10)+0.80);
    pl02diffY = (pl02y - y)*Player.speed*(Math.random()*(4/10)+0.80);
    distance02 = Math.sqrt((pl02x - x )*(pl02x - x )+(pl02y - y)*(pl02y - y));
    dirPl02x=(-1/distance02)*pl02diffX;
    dirPl02y=(-1/distance02)*pl02diffY;

    //out mirror
    if(y<Pitch.out+Ball.radius||y>Pitch.height+Pitch.out-Ball.radius){
      dirY = -dirY;
    }
    if(x<Pitch.out+Ball.radius||x>Pitch.width+Pitch.out-Ball.radius){
      dirX = -dirX;
    }

    //Take over the ball
    // if(Math.abs(pl01x-x)<=100&&Math.abs(pl01y-y)<=100){
    //   dirX=10;
    //   dirY=0;
    // }

    drawLoop();
    goalsCounter();
    outsCounter();
    timer();
  }
}
