/* window.onload = function () {


    //-----------------------------Popup------------------------------------
    function showpopup() {
        setTimeout(() => {
            document.querySelector('.pop-up-box').style.visibility = 'visible'
            document.querySelector('.pop-up').classList.add('active');
        }, 1000);

        document.querySelectorAll('.close')[0].addEventListener('click', function () {
            document.querySelector('.pop-up').classList.remove('active');
            document.querySelector('.pop-up-box').style.visibility = 'hidden'
        })
    }
} */

/* var team1Data = JSON.parse(localStorage.getItem('team1'));
var team2Data = JSON.parse(localStorage.getItem('team2'));
var matchData = JSON.parse(localStorage.getItem('matchData'));

console.log(team1Data); */

var Team1 = /* team1Data.teamName */ "CSK";
var Team2 = /* team2Data.teamName */ "MI";
var runsT1 = /* team1Data.totalScore */ 118;
var runsT2 = /* team2Data.totalScore */121;
var T1inningover =false;
var T2inningover=false;
var overs1 = /* team1Data.completedOvers */20 ;
var overs2 = /* team2Data.completedOvers */18 ;
var wicketsT1 = /* team1Data.totalWickets */4 ;
var wicketsT2 = /* team2Data.totalWickets */ 10;
var totalOvers = /* matchData.totalOvers */20;
var noOfPlayers = /* matchData.noOfPlayers */ 11;
var winnerflag = false;


  
  
 /*  if (overs1 === totalOvers || wicketsT1 === noOfPlayers - 1) {
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

function Winner() {
    document.querySelector('.pop-up-box').style.visibility = 'visible'
    document.querySelector('.Winner-Alert').classList.add('active');
    document.querySelectorAll('.close')[5].addEventListener('click', function () {
        document.querySelector('.Winner-Alert').classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })
}  
 */



if (overs1 === totalOvers || wicketsT1 === noOfPlayers - 1) {
    T1inningover = true;
  }
  
  if (overs2 === totalOvers || wicketsT2 === noOfPlayers - 1) {
    T2inningover = true;
  }
  
  console.log(T1inningover, T2inningover);
  
  
  
  
  function Winner() {
    document.querySelector('.pop-up-box').style.visibility = 'visible'
    document.querySelector('.Winner-Alert').classList.add('active');
    document.querySelectorAll('.close')[5].addEventListener('click', function () {
        document.querySelector('.Winner-Alert').classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })
}


  
      
      function checkWinner() {
        var winname = document.querySelector(".winning-team-name");
        if (T1inningover && T2inningover) {
          if (runsT1 > runsT2) {
            winname.innerText = Team1 + " Won The Match";
            winnerflag = true;
          } else if (runsT2 > runsT1) {
            winname.innerText = Team2 + " Won The Match";
            winnerflag = true;
          } else if (runsT1 === runsT2) {
            winname.innerText = "Match Draw";
            winnerflag = true;
          }
          Winner();
        } else if (T1inningover && runsT2 > runsT1) {
          winname.innerText = Team2 + " Won The Match";
          winnerflag = true;
          Winner();
        } else if (T2inningover && runsT1 > runsT2) {
          winname.innerText = Team1 + " Won The Match";
          winnerflag = true;
          Winner();
        }
      }

     

    
    
    
        // Event listener for the button
        document.querySelector('button').addEventListener('click', function () {
            checkWinner();
        });
   