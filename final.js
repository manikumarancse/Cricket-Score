var team1Data = JSON.parse(localStorage.getItem('team1'));
var team2Data = JSON.parse(localStorage.getItem('team2'));
var matchData = JSON.parse(localStorage.getItem('matchData'));

console.log(team1Data);

var Team1 = team1Data.teamName;
var Team2 = team2Data.teamName;
var runsT1 = team1Data.totalScore;
var runsT2 = team2Data.totalScore;
var T1inningover =false;
var T2inningover=false;
var overs1 = /* team1Data.completedOvers */20 ;
var overs2 = /* team2Data.completedOvers */18 ;
var wicketsT1 = /* team1Data.totalWickets */4 ;
var wicketsT2 = /* team2Data.totalWickets */ 10;
var totalOvers = /* matchData.totalOvers */20;
var noOfPlayers = /* matchData.noOfPlayers */ 11;


  
  
  if (overs1 === totalOvers || wicketsT1 === noOfPlayers - 1) {
    T1inningover = true;
  }
  
  if (overs2 === totalOvers || wicketsT2 === noOfPlayers - 1) {
    T2inningover = true;
  }
  
  console.log(T1inningover, T2inningover);


function checkWinner() {


    var winname = document.querySelector(".winning-team-name");
    if (T1inningover && T2inningover) {
        if (runsT1 > runsT2) {
            winname.innerText = Team1.value + " Won The Match";
            winnerflag = true;
        }

        else if (runsT2 > runsT1) {
            winname.innerText = Team2.value + " Won The Match";
            winnerflag = true;
        }

        else if (runsT1 == runsT2) {
            winname.innerText = "Match Draw";
            winnerflag = true;
        }
        Winner();
    }

    else if (T1inningover && (runsT2 > runsT1)) {
        winname.innerText = Team2.value + " Won The Match";
        winnerflag = true;

        Winner();
    }

    else if (T2inningover && (runsT1 > runsT2)) {
        winname.innerText = Team1.value + " Won The Match";
        winnerflag = true;
        Winner();
    }
}

/* function Winner() {
    document.querySelector('.pop-up-box').style.visibility = 'visible'
    document.querySelector('.Winner-Alert').classList.add('active');
    document.querySelectorAll('.close')[5].addEventListener('click', function () {
        document.querySelector('.Winner-Alert').classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })
} */
