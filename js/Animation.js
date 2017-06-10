AnimationSettings = {
  fps: 30
}

function animationLoop(time) {
  requestAnimationFrame(animationLoop);

  if (time - lastTime >= 1000 / fps) {

    lastTime = time;

    //ball
    x = x + dirX;
    y = y + dirY;

    //player1
    pl01x += dirPl01x;
    pl01y += dirPl01y;
    pl01diffX = (pl01x - x) * Player.speed * (Math.random() * (4 / 10) + 0.80);
    pl01diffY = (pl01y - y) * Player.speed * (Math.random() * (4 / 10) + 0.80);
    distance01 = Math.sqrt((pl01x - x) * (pl01x - x) + (pl01y - y) * (pl01y - y));
    dirPl01x = (-1 / distance01) * pl01diffX;
    dirPl01y = (-1 / distance01) * pl01diffY;

    //player2
    pl02x += dirPl02x;
    pl02y += dirPl02y;
    pl02diffX = (pl02x - x) * Player.speed * (Math.random() * (4 / 10) + 0.80);
    pl02diffY = (pl02y - y) * Player.speed * (Math.random() * (4 / 10) + 0.80);
    distance02 = Math.sqrt((pl02x - x) * (pl02x - x) + (pl02y - y) * (pl02y - y));
    dirPl02x = (-1 / distance02) * pl02diffX;
    dirPl02y = (-1 / distance02) * pl02diffY;

    //player3
    pl03x += dirPl03x;
    pl03y += dirPl03y;
    //player 3 control
    window.addEventListener('keyup', function(event) {
      switch (event.keyCode) {
        case 37: // Left
          dirPl03x = 0;
          break;
        case 38: // Up
          dirPl03y = 0;
          break;
        case 39: // Right
          dirPl03x = 0;
          break;
        case 40: // Down
          dirPl03y = 0;
          break;
      }
    }, false);
    window.addEventListener('keydown', function(event) {
      switch (event.keyCode) {
        case 37: // Left
          dirPl03x = -Player.speed;
          break;
        case 39: // Right
          dirPl03x = Player.speed;
          break;
        case 38: // Up
          dirPl03y = -Player.speed+Math.abs(0.5*dirPl03x);
          break;
        case 40: // Down
          dirPl03y = Player.speed-Math.abs(0.5*dirPl03x);
          break;
      }
    }, false);

    //out mirror
    if (y < Pitch.out + Ball.radius || y > Pitch.height + Pitch.out - Ball.radius) {
      dirY = -dirY;
    }
    if (x < Pitch.out + Ball.radius || x > Pitch.width + Pitch.out - Ball.radius) {
      dirX = -dirX;
    }

    //ball taken by player 03
    if(Math.abs(pl03x-x)<20&&Math.abs(pl03y-y)<20){
      x=pl03x;
      y=pl03y;
    }

    //ball saver
    if (y < Pitch.out + Ball.radius - 25 || y > Pitch.height + Pitch.out - Ball.radius + 25) {
      x = Pitch.out + Pitch.width / 2;
      y = Pitch.height / 2;
      pl03x=200;
      pl03t=200;
    }
    if (x < Pitch.out + Ball.radius - 25 || x > Pitch.width + Pitch.out - Ball.radius + 25) {
      x = Pitch.out + Pitch.width / 2;
      y = Pitch.height / 2;
      pl03x=200;
      pl03t=200;
    }

    drawLoop();
    goalsCounter();
    outsCounter();
    timer();
  }
}
