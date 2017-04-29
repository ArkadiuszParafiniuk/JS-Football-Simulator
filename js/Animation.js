AnimationSettings = {
  fps: 30
}

function animationLoop(time){
  requestAnimationFrame(animationLoop);

  if(time-lastTime>=1000/fps){

    lastTime = time;

    x=x+dirX;
    y=y+dirY;

    if(y<=30+Pitch.out||y>=Pitch.height+Pitch.out){
      dirY = -dirY;
    }
    if(x<=30+Pitch.out||x>=Pitch.width+Pitch.out){
      dirX = -dirX;
    }

    //grass
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,my_canvas.width,my_canvas.height);

    //pitch lines
    ctx.lineWidth="4";
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    //pitch
    ctx.rect(Pitch.out,Pitch.out,Pitch.width,Pitch.height);
    //goal fields
    ctx.rect(Pitch.out,Pitch.height/2-Goal.width/2-55,55,Goal.width+2*55);
    ctx.rect(Pitch.width-55+Pitch.out,Pitch.height/2-Goal.width/2-55,55,Goal.width+2*55);
    //penalty fields
    ctx.rect(Pitch.out,Pitch.height/2-Goal.width/2-160,160,Goal.width+2*160);
    ctx.rect(Pitch.width-160+Pitch.out,Pitch.height/2-Goal.width/2-160,160,Goal.width+2*160);
    //half line
    ctx.moveTo(Pitch.out+Pitch.width/2,Pitch.out);
    ctx.lineTo(Pitch.out+Pitch.width/2,Pitch.out+Pitch.height);
    //half circle
    ctx.moveTo(Pitch.out+Pitch.width/2,Pitch.out+Pitch.height/2+91.4/2);
    ctx.arc(Pitch.out+Pitch.width/2,Pitch.out+Pitch.height/2+91.4/2,91.4,Math.PI/2,3*Math.PI);
    ctx.stroke();

    //goal lines
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(Pitch.out,Pitch.height/2-Goal.width/2);
    ctx.lineTo(Pitch.out,Pitch.height/2+Goal.width/2);
    ctx.moveTo(Pitch.width+Pitch.out,Pitch.height/2-Goal.width/2);
    ctx.lineTo(Pitch.width+Pitch.out,Pitch.height/2+Goal.width/2);
    ctx.stroke();
    ctx.closePath();

    //ball
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x-h/2,y-h/2,Ball.radius,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}
