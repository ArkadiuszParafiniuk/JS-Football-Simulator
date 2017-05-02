function drawLoop(time){
  //grass
  ctx.fillStyle = "rgba(75, 178, 60,1 )";
  ctx.fillRect(0,0,my_canvas.width,my_canvas.height);
  ctx.fillStyle = 'green';
  var i = 0;
  while(i<=my_canvas.width){
    if(i%100==0){
      ctx.fillRect(i,0,50,my_canvas.height);
    }
    i = i + 50;
  }

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
  //penalty marks
  ctx.moveTo(110+Pitch.out,Pitch.height/2);
  ctx.arc(110+Pitch.out,Pitch.height/2,2,Math.PI/2,3*Math.PI);
  ctx.moveTo(Pitch.width-110+Pitch.out,Pitch.height/2);
  ctx.arc(Pitch.width-110+Pitch.out,Pitch.height/2,2,Math.PI/2,3*Math.PI);
  //penalty circle
  ctx.moveTo(Pitch.out+160,Pitch.height/2);
  ctx.arc(Pitch.out+110,Pitch.height/2,91.5,-Math.PI/2+Math.PI/5.3,Math.PI/2-Math.PI/5.3);
  ctx.moveTo(Pitch.out+Pitch.width-160,Pitch.height/2);
  ctx.arc(Pitch.out+Pitch.width-110,Pitch.height/2,91.5,Math.PI/2+Math.PI/5.3,-Math.PI/2-Math.PI/5.3);
  //center point
  ctx.moveTo(Pitch.width/2+Pitch.out,Pitch.height/2);
  ctx.arc(Pitch.width/2+Pitch.out,Pitch.height/2,2,Math.PI/2,3*Math.PI);
  //corner circles
  ctx.moveTo(Pitch.width+Pitch.out,Pitch.out);
  ctx.arc(Pitch.width+Pitch.out,Pitch.out,10,Math.PI/2,Math.PI);
  ctx.moveTo(Pitch.width+Pitch.out,Pitch.out+Pitch.height);
  ctx.arc(Pitch.width+Pitch.out,Pitch.out+Pitch.height,10,Math.PI,Math.PI*1.5);
  ctx.moveTo(Pitch.out,Pitch.out+Pitch.height);
  ctx.arc(Pitch.out,Pitch.out+Pitch.height,10,Math.PI*1.5,Math.PI*2);
  ctx.moveTo(Pitch.out,Pitch.out);
  ctx.arc(Pitch.out,Pitch.out,10,0,Math.PI/2);
  //half line
  ctx.moveTo(Pitch.out+Pitch.width/2,Pitch.out);
  ctx.lineTo(Pitch.out+Pitch.width/2,Pitch.out+Pitch.height);
  //half circle
  ctx.moveTo(Pitch.out+Pitch.width/2,Pitch.height/2+91.4/2);
  ctx.arc(Pitch.out+Pitch.width/2,Pitch.height/2,91.4,Math.PI/2,3*Math.PI);
  //goals
  ctx.rect(5,Pitch.height/2-Goal.width/2,20,Goal.width);
  ctx.rect(Pitch.width+Pitch.out,Pitch.height/2-Goal.width/2,20,Goal.width);
  ctx.stroke();

  //goal lines
  // ctx.strokeStyle = 'green';
  // ctx.beginPath();
  // ctx.moveTo(Pitch.out,Pitch.height/2-Goal.width/2+2);
  // ctx.lineTo(Pitch.out,Pitch.height/2+Goal.width/2-2);
  // ctx.moveTo(Pitch.width+Pitch.out,Pitch.height/2-Goal.width/2+2);
  // ctx.lineTo(Pitch.width+Pitch.out,Pitch.height/2+Goal.width/2-2);
  // ctx.stroke();
  // ctx.closePath();

  //ball
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(x,y,Ball.radius,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}
