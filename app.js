function startMatch() {
  // Get user inputs
  const team1Name = document.getElementById('team1Name').value;
  const team2Name = document.getElementById('team2Name').value;
  const numPlayers = parseInt(document.getElementById('numPlayers').value);
  const totalOvers = parseInt(document.getElementById('totalovers').value);


  const matchData = {
    t1Name: team1Name,
    t2Name: team2Name,
    noOfPlayers: numPlayers,
    totalOvers: totalOvers

  }

  // Initialize data structures

  const team1Data = {
    teamName: team1Name,
    totalScore: 0,
    totalWickets:0,
    completedOvers: 0,
    extra: {
        byes:0, 
        legByes:0, 
        wide:0, 
        noBall:0, 
        get score(){
            return this.byes +this.legByes+this.wide+this.noBall;
        }, 
   },
    player: initializePlayers(numPlayers),
    innings:0,
  };

  const team2Data = {
    teamName: team2Name,
    totalScore: 0,
    totalWickets:0,
    completedOvers: 0,
    extra: {
         byes:0, 
         legByes:0, 
         wide:0, 
         noBall:0, 
         get score(){
            return this.byes +this.legByes+this.wide+this.noBall;
        }, 
    },
    player: initializePlayers(numPlayers),
    innings:0,
  };

  // Save data to local storage
  localStorage.setItem('team1', JSON.stringify(team1Data));
  localStorage.setItem('team2', JSON.stringify(team2Data));
  localStorage.setItem('matchData', JSON.stringify(matchData));

  // Redirect to the main scoring page or perform other actions as needed
  // window.location.href = 'scoring.html'; // Uncomment this line if you have a separate scoring page
}

function initializePlayers(numPlayers) {
  const player = []; 
//   isbatting:false,isbowling:false;
  let id =0;
//   const batting = [];
//   const bowling = [];
  for (let i = 1; i <= numPlayers; i++) {
  player.push({
    playerId:id + i,
    playerName: 'Player ' + i,
    isBatting:false,
    isBowling:false,
    batting:[ {
          ballsBatted: 0,
          battingRuns: 0,
          fours:0,
          sixes:0,
          get strikeRate(){
            let sr= parseFloat((this.battingRuns / this.ballsBatted)*100).toFixed(2);
            return isNaN(sr) ? parseFloat("0.00") : sr;
        },
        }],
    bowling: [{
          wicket: 0,
          over:0,
          maiden: 0,
          bowlRuns: 0,
          get economy(){
            let eco= parseFloat(this.bowlRuns / this.over).toFixed(2);
            return isNaN(eco) ? parseFloat("0.00") :eco;
        },
        }]
    }); 
}
return player;
}
  
