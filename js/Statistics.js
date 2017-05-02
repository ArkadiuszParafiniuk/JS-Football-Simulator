function goalsCounter(){
  if(x<=Pitch.out+Ball.radius&&y>=Pitch.height/2-Goal.width/2+1&&y<=Pitch.height/2+Goal.width/2-1){
    goalA++; outs--;
    document.getElementById("scoreA").innerHTML = goalA;
    x = Pitch.out+Pitch.width/2;
    y = Pitch.height/2;
    dirX = Ball.speed* Math.random()*2-1;
    dirY = Ball.speed* Math.random()*2-1;
  }
  if(x>=Pitch.width+Pitch.out-Ball.radius&&y>=Pitch.height/2-Goal.width/2+1&&y<=Pitch.height/2+Goal.width/2-1){
    goalB++; outs--;
    document.getElementById("scoreB").innerHTML = goalB;
    x = Pitch.out+Pitch.width/2;
    y = Pitch.height/2;
    dirX = Ball.speed* Math.random()*2-1;
    dirY = Ball.speed* Math.random()*2-1;
  }
}

function outsCounter(){
  if(y<=Pitch.out+Ball.radius||y>=Pitch.height+Pitch.out-Ball.radius||x<=Pitch.out+Ball.radius||x>=Pitch.width+Pitch.out-Ball.radius){
    outs++;
    document.getElementById("outs").innerHTML = "Outs: " + outs;
  }
}

function timer(){
  var now = Date.now();
  distance = now - startTime;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(seconds<10){
    seconds = "0"+seconds;
  }
  if(minutes<10){
    minutes = "0"+minutes;
  }
  document.getElementById("timer").innerHTML = minutes + " : " + seconds;


}
