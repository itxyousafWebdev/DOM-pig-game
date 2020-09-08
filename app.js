/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var currentScore = 0;
var total1 = document.querySelector("#score-0");
var total2 = document.querySelector("#score-1");
var t1 = 0;
var t2 = 0;

var plr1 = document.querySelector(".player-0-panel");
var plr2 = document.querySelector(".player-1-panel");
var current1 = document.querySelector("#current-0");
var current2 = document.querySelector("#current-1");
var turn = 1;
var hold = document.querySelector(".btn-hold");
hold.addEventListener("click", function(){
  if(turn === 1)
  {
    plr2.classList.add("active");
    plr1.classList.remove("active");
    turn = 2;
    t1 = t1 + currentScore;
    total1.innerHTML = t1;
    currentScore = 0;
  }
  else if(turn === 2){
    plr1.classList.add("active");
    plr2.classList.remove("active");
    turn = 1;
    t2 = t2 +currentScore;
    total2.innerHTML = t2;
    currentScore = 0;
  }

  if(t1>=100)
  {
    document.querySelector("#name-0").classList.add("winner");
    document.querySelector("#name-0").innerHTML = "WINNNER!"
    turn = 0;
  }
  else if(t2>=100)
  {
    document.querySelector("#name-1").classList.add("winner");
    document.querySelector("#name-1").innerHTML = "WINNNER!"
    turn = 0;
  }
});


document.querySelector(".btn-roll").addEventListener("click" , function(){
  var ran = Math.floor(Math.random()*6) + 1;
  var myImg = document.querySelector(".dice");
  myImg.src = "dice-" + ran + ".png";
  currentScore = currentScore + ran;

  // if(t1>=100)
  // {
  //   document.querySelector("#name-0").classList.add("winner");
  //   document.querySelector("#name-0").innerHTML = "WINNNER!"
  //   turn = 0;
  // }
  // else if(t2>=100)
  // {
  //   document.querySelector("#name-1").classList.add("winner");
  //   document.querySelector("#name-1").innerHTML = "WINNNER!"
  //   turn = 0;
  // }

  if(turn === 1)
  {
    if(ran === 1)
    {
      plr2.classList.add("active");
      plr1.classList.remove("active");
      current1.innerHTML = "0";
      currentScore = 0;
      turn = 2;
    }
    else{
      current1.innerHTML = currentScore;
    }
  }
  else if(turn === 2)
  {
    if(ran === 1)
    {
      plr1.classList.add("active");
      plr2.classList.remove("active");
      current2.innerHTML = "0";
      currentScore = 0;
      turn = 1;
    }
    else{
      current2.innerHTML = currentScore;
    }
  }

});

var newGame = document.querySelector(".btn-new");

newGame.addEventListener("click", function(){

  turn = Math.floor(Math.random()*2) + 1;
  if(turn ===1)
  {
    plr1.classList.add("active");
    plr2.classList.remove("active");
  }
  else if(turn === 2)
  {
    plr2.classList.add("active");
    plr1.classList.remove("active");
  }

  t1 = 0;
  t2 = 0;
  currentScore = 0;
  total1.innerHTML = "0";
  total2.innerHTML = "0";
  current1.innerHTML = "0";
  current2.innerHTML = "0";
  document.querySelector("#name-0").innerHTML = "PLAYER 1";
  document.querySelector("#name-1").innerHTML = "PLAYER 2";
  document.querySelector("#name-0").classList.remove("winner");
  document.querySelector("#name-1").classList.remove("winner");

});
