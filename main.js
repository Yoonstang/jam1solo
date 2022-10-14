title = "RED JUMP";

description = 
[Tap] Jump
;

characters = [
  
lllll
lllll
l   l
l   l
  
];

options = {

};

let player;

function update() {
  if(!ticks) {
    player = { y: 90, vy: 0 };
  }

  color("green");
  rect(0, 92, 100, 8);

  player.vy += (input.isPressed ? 0.07 : 0.1);

  if (player.y >= 90) {
    player.vy = 0;
  }

  if (input.isJustPressed) {
    if (player.y >= 90) {
      player.vy -= 2;
    }
  }

  player.y += player.vy

  color("red");
  char("a", 15, player.y);
}

addEventListener("load", onLoad);