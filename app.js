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
    innings: 0,
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
    innings: 0,
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
  let id = 0;
  //   const batting = [];
  //   const bowling = [];
  for (let i = 1; i <= numPlayers; i++) {
  player.push({
    playerId:id + i,
    playerName: 'Player ' + i,
    isBatting:false,
    isBowling:false,
    batting: {
          ballsBatted: 0,
          battingRuns: 0,
          fours:0,
          sixes:0,
          get strikeRate(){
            return parseFloat((this.battingRuns / this.ballsBatted)*100).toFixed(2);
        },
        },
    bowling: {
          wicket: 0,
          over:0,
          maiden: 0,
          bowlRuns: 0,
          get economy(){
            return parseFloat(this.bowlRuns / this.over).toFixed(2);
        },
        }
    }); 
}
return player;
}

let team1PlayerNames = [];
console.log(team1PlayerNames);
let team2PlayerNames = [];
console.log(team2PlayerNames);

// gettig local storage
const teamOne = JSON.parse(localStorage.getItem('team1'))
const teamTwo = JSON.parse(localStorage.getItem('team2'))


function generateInputs() {
  const numPlayers = document.getElementById('numPlayers').value;
  const team1Input = document.getElementById('team1Input');
  const generateBtn = document.getElementById('generateBtn');
  const generateBtn2 = document.getElementById('generateBtn2');
  team1Input.innerHTML = ''; // Clear previous inputs

  for (let i = 1; i <= numPlayers; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    if (i == 1) {
      input.name = `team1_player_${i} (Captain)`;
      input.placeholder = `Player ${i} (Captain)`;
    } else if (i == 2) {
      input.name = `team1_player_${i} (Wicketkeeper)`;
      input.placeholder = `Player ${i}(Wicketkeeper)`;
    } else {
      input.name = `team1_player_${i}`;
      input.placeholder = `Player ${i}`;
    }
    team1Input.appendChild(input);
  }

  generateBtn.style.display = 'none';
  team1Input.style.display = 'block';
  generateBtn2.style.display = 'block';
}


function generateInputs2() {
  const numPlayers = document.getElementById('numPlayers').value;
  const team2Input = document.getElementById('team2Input');
  team2Input.innerHTML = ''; // Clear previous inputs

  for (let i = 1; i <= numPlayers; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    if (i === 1) {
      input.name = `team2_player_${i} (Captain)`;
      input.placeholder = `Player ${i} (Captain)`;

    } else if (i === 2) {
      input.name = `team2_player_${i} (Wicketkeeper)`;
      input.placeholder = `Player ${i} (Wicketkeeper)`;
    } else {
      input.name = `team2_player_${i}`;
      input.placeholder = `Player ${i}`;
    }

    team2Input.appendChild(input);
  }

  generateBtn2.style.display = 'none';
  team2Input.style.display = 'block';
  collectBtn.style.display = 'block';
}


// Assuming you have assigned an ID to the button that triggers this action
const collectBtn = document.getElementById('collectBtn');
const goToss = document.getElementById('goToss');

collectBtn.addEventListener('click', function () {
  const inputs1 = document.querySelectorAll('#team1Input input');
  const inputs2 = document.querySelectorAll('#team2Input input');
  team1PlayerNames = Array.from(inputs1).map(input => input.value);
  team2PlayerNames = Array.from(inputs2).map(input => input.value);

  console.log('Team 1 Player Names:', team1PlayerNames);
  console.log('Team 2 Player Names:', team2PlayerNames);

  collectBtn.style.display = 'none';
  // goToss.style.display = 'block';

  // Retrieve teamOne and teamTwo from local storage
  const teamOne = JSON.parse(localStorage.getItem('team1'));
  const teamTwo = JSON.parse(localStorage.getItem('team2'));

  // Update player names in teamOne and teamTwo objects
  teamOne.player.forEach((ele, i) => {
    ele.playerName = team1PlayerNames[i];
  });

  teamTwo.player.forEach((ele, j) => {
    ele.playerName = team2PlayerNames[j];
  });

  // Store the modified teamOne and teamTwo objects back into local storage
  localStorage.setItem('team1', JSON.stringify(teamOne));
  localStorage.setItem('team2', JSON.stringify(teamTwo));
});

// ..

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
  
let team1PlayerNames = [];
console.log(team1PlayerNames);
let team2PlayerNames = [];
console.log(team2PlayerNames);

// gettig local storage
const teamOne = JSON.parse(localStorage.getItem('team1'))
const teamTwo = JSON.parse(localStorage.getItem('team2'))


function generateInputs() {
  const numPlayers = document.getElementById('numPlayers').value;
  const team1Input = document.getElementById('team1Input');
  const generateBtn = document.getElementById('generateBtn');
  const generateBtn2 = document.getElementById('generateBtn2');
  team1Input.innerHTML = ''; // Clear previous inputs

  for (let i = 1; i <= numPlayers; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    if (i == 1) {
      input.name = `team1_player_${i} (Captain)`;
      input.placeholder = `Player ${i} (Captain)`;
    } else if (i == 2) {
      input.name = `team1_player_${i} (Wicketkeeper)`;
      input.placeholder = `Player ${i}(Wicketkeeper)`;
    } else {
      input.name = `team1_player_${i}`;
      input.placeholder = `Player ${i}`;
    }
    team1Input.appendChild(input);
  }

  generateBtn.style.display = 'none';
  team1Input.style.display = 'block';
  generateBtn2.style.display = 'block';
}


function generateInputs2() {
  const numPlayers = document.getElementById('numPlayers').value;
  const team2Input = document.getElementById('team2Input');
  team2Input.innerHTML = ''; // Clear previous inputs

  for (let i = 1; i <= numPlayers; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    if (i === 1) {
      input.name = `team2_player_${i} (Captain)`;
      input.placeholder = `Player ${i} (Captain)`;

    } else if (i === 2) {
      input.name = `team2_player_${i} (Wicketkeeper)`;
      input.placeholder = `Player ${i} (Wicketkeeper)`;
    } else {
      input.name = `team2_player_${i}`;
      input.placeholder = `Player ${i}`;
    }

    team2Input.appendChild(input);
  }

  generateBtn2.style.display = 'none';
  team2Input.style.display = 'block';
  collectBtn.style.display = 'block';
}


// Assuming you have assigned an ID to the button that triggers this action
const collectBtn = document.getElementById('collectBtn');
const goToss = document.getElementById('goToss');

collectBtn.addEventListener('click', function () {
  const inputs1 = document.querySelectorAll('#team1Input input');
  const inputs2 = document.querySelectorAll('#team2Input input');
  team1PlayerNames = Array.from(inputs1).map(input => input.value);
  team2PlayerNames = Array.from(inputs2).map(input => input.value);

  console.log('Team 1 Player Names:', team1PlayerNames);
  console.log('Team 2 Player Names:', team2PlayerNames);

  collectBtn.style.display = 'none';
  // goToss.style.display = 'block';

  // Retrieve teamOne and teamTwo from local storage
  const teamOne = JSON.parse(localStorage.getItem('team1'));
  const teamTwo = JSON.parse(localStorage.getItem('team2'));

  // Update player names in teamOne and teamTwo objects
  teamOne.player.forEach((ele, i) => {
    ele.playerName = team1PlayerNames[i];
  });

  teamTwo.player.forEach((ele, j) => {
    ele.playerName = team2PlayerNames[j];
  });

  // Store the modified teamOne and teamTwo objects back into local storage
  localStorage.setItem('team1', JSON.stringify(teamOne));
  localStorage.setItem('team2', JSON.stringify(teamTwo));
});

// ..

