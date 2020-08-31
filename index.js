let player = [];
let win1 = 0, lose1 = 0, draw1 = 0;
let win2 = 0, lose2 = 0, draw2 = 0;
let turn = 0;
let gameover = false;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
document.getElementById("stat1").style.display = "none";
document.getElementById("stat2").style.display = "none";
document.getElementById("game").style.display = "none";

const startgame = () => {
  let in1 = document.getElementById("p1");
  let in2 = document.getElementById("p2");

  let hero = in1.value; //  first name
  let vill = in2.value; //  second name

  // Checking for empty names
  if (isempty(hero) || isempty(vill)) {
   // alert("Enter Valid Name");
   hider.style.display = "block";
    return;
  }

  //Adding names to game
  player.push(hero);
  player.push(vill);
  
  document.getElementById("game").style.display = "block";

  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "none";

  document.getElementById("name1").innerHTML = in1.value ;
  document.getElementById("name2").innerHTML = in2.value;

  document.getElementById("stat1").style.display = "block";
  document.getElementById("stat2").style.display = "block";

    document.getElementById("my2").style.opacity = 0.5;

  //document.getElementById("go").style.transition = "all 2s";
  // document.getElementById("my1").style.transition = "all 2s";

  // Showing the matrix after proper names have given
  let st = document.getElementById("game");
  st.classList.remove("hide");

   let res =  document.getElementById("reset");
  res.classList.remove("hide2");

  // let resett = document.getElementById("reset");
  // resett.classList.remove("hide");

  //start button is removed after gamestart
  document.getElementById("start").style.display = "none";

  // document.getElementById("reset").style.display = "block";

  //Locking input names bar so that renaming could not be done
  // in1.setAttribute("disabled", true);
  // in2.setAttribute("disabled", true);

  document.getElementById("winfirst").innerHTML = win1;
  document.getElementById("losefirst").innerHTML = lose1;
  document.getElementById("drawfirst").innerHTML = draw1;
  document.getElementById("winsecond").innerHTML = win2;
  document.getElementById("losesecond").innerHTML = lose2;
  document.getElementById("drawsecond").innerHTML = draw2;

};

const handleclick = (click) => {
  // To prevent overwriting
  if (click.innerHTML !== "" || gameover === true) return;

  let id = click.id;
  let i = id[0];
  let j = id[1];

if(turn % 2 === 0){
  document.getElementById("my1").style.opacity = 0.5;
  document.getElementById("my2").style.opacity = 1.0;
}
else{
  document.getElementById("my2").style.opacity = 0.5;
  document.getElementById("my1").style.opacity = 1.0;
}

  // turn var is used for each player turn
  board[i][j] = turn % 2 === 0 ? "X" : "O";
  if (board[i][j] === "X") click.style.color = "lightblue";
  else click.style.color = "purple";
  //changing the inner part of  cell to X or O
  click.innerHTML = board[i][j];

  if (calcWinnner()) {
    document.getElementById("my1").style.opacity = 1.0;
    document.getElementById("my2").style.opacity = 1.0;
    modal.style.display = "block";
    confetti.start(10000, 200, 300);
    let congratmsg = `Hurray, ${player[turn % 2]} won the game`;
    document.getElementById("congo").innerHTML = congratmsg;
    // alert(player[turn % 2] + " won");
if(turn % 2 === 0){
win1++;
lose2++;
document.getElementById("winfirst").innerHTML = win1;
document.getElementById("losesecond").innerHTML = lose2;
}
else{
win2++;
lose1++;
document.getElementById("losefirst").innerHTML = lose1;
document.getElementById("winsecond").innerHTML = win2;
}
    gameover = true;
  }
  turn++;
};
const resetgame = () => {
  confetti.stop();
  document.getElementById("my1").style.opacity = 1.0;
    document.getElementById("my2").style.opacity = 1.0;
  if(gameover === true){
  gameover = false;
  }
else{
draw1++;
draw2++;
document.getElementById("drawfirst").innerHTML = draw1;
document.getElementById("drawsecond").innerHTML = draw2;
}
//  document.getElementById("game").innerHTML = "";
   let remove = document.getElementsByClassName("cell");
   //console.log(remove);
 //  remove.innerHTML = '';
  for(let i = 0 ; i <= 8 ; i++)
  remove[i].innerHTML = '';

  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  turn = 0;
};

const calcWinnner = () => {
  const winnerCombination = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"]
  ];

  for (let i = 0; i < winnerCombination.length; i++) {
    let val0 = winnerCombination[i][0];
    let val1 = winnerCombination[i][1];
    let val2 = winnerCombination[i][2];

    if (
      board[val0[0]][val0[1]] !== "" &&
      board[val0[0]][val0[1]] === board[val1[0]][val1[1]] &&
      board[val0[0]][val0[1]] === board[val2[0]][val2[1]]
    )
      return true;
  }
  if (turn === 8) {
    drawed.style.display = "block"
    draw1++;
    draw2++;
   document.getElementById("drawfirst").innerHTML = draw1;
   document.getElementById("drawsecond").innerHTML = draw2;
   document.getElementById("my1").style.opacity = 1.0;
    document.getElementById("my2").style.opacity = 1.0;
  //  alert("Game is drawn");
    gameover = true;
    return;
  }
};

// function to check if name given is empty or not
const isempty = (value) => !value || !value.trim();
