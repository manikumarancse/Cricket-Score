function startMatch() {
  // Get user inputs
  const team1Name = document.getElementById('team1Name').value;
  const team2Name = document.getElementById('team2Name').value;
  const numPlayers = parseInt(document.getElementById('numPlayers').value);
  const totalOvers = parseInt(document.getElementById('totalovers').value);

  // Validate form fields
  if (team1Name.trim() === '' || team2Name.trim() === '' || isNaN(numPlayers) || isNaN(totalOvers)) {
    alert('Please fill in all the fields with valid values');
    return;
  }
  else if (numPlayers <= 0 || numPlayers > 11) {
    alert('Please Enter the Players upto 11');
    return;

  } else if (totalOvers <= 0 || totalOvers > 50) {
    alert('Please Enter the Overs 1 to 50');
    return;
  }

  else {

    const popteam = document.getElementById('popteam');
    const closeBtn = document.getElementById('closeBtn');

    popteam.classList.add('active');

    closeBtn.addEventListener('click', () => {
      popteam.classList.remove('active');
    });


    // player input field generate for team 1
    const team1Input = document.getElementById('team1Input');

    const generateBtn2 = document.getElementById('generateBtn2');
    team1Input.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= numPlayers; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.required = true;
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

    team1Input.style.display = 'block';
    generateBtn2.style.display = 'block';


    const matchData = {
      t1Name: team1Name,
      t2Name: team2Name,
      noOfPlayers: numPlayers,
      totalOvers: totalOvers
    }
    const overBalls = {
    over: [],
    ballCount: 6,
}
localStorage.setItem('over', JSON.stringify(overBalls));
  // Initialize team1data 
    const team1Data = {
      teamName: team1Name,
      toss: false,
      totalScore: 0,
      totalWickets: 0,
      completedOvers: 0,
      halfInnings: false,
    extra: {
        byes: 0,
        legByes: 0,
        wide: 0,
        noBall: 0,
        get score() {
          return this.byes + this.legByes + this.wide + this.noBall;
        },
      },
      player: initializePlayers(numPlayers),
      innings: 0,
    };

    // Initialize team2data 
    const team2Data = {
      teamName: team2Name,
      toss: false,
      totalScore: 0,
      totalWickets: 0,
      completedOvers: 0,
      halfInnings: false,
    extra: {
        byes: 0,
        legByes: 0,
        wide: 0,
        noBall: 0,
        get score() {
          return this.byes + this.legByes + this.wide + this.noBall;
        },
      },
      player: initializePlayers(numPlayers),
      innings: 0,
    };

    // Save data to local storage
    localStorage.setItem('team1', JSON.stringify(team1Data));
    localStorage.setItem('team2', JSON.stringify(team2Data));
    localStorage.setItem('matchData', JSON.stringify(matchData));

  }
}

function initializePlayers(numPlayers) {
  const player = [];
  let id = 0;
  for (let i = 1; i <= numPlayers; i++) {
  player.push({
    playerId:id + i,
    playerName: 'Player ' + i,
    isBatting:false,
    batsmanOut:false,
    isBowling:false,
    batting: {
          ballsBatted: 0,
          battingRuns: 0,
          fours:0,
          sixes:0,
          get strikeRate(){
            let sr= parseFloat((this.battingRuns / this.ballsBatted)*100).toFixed(2);
            return isNaN(sr) ? parseFloat("0.00") : sr;
        },
        },
    bowling: {
          wicket: 0,
          over:0,
          maiden: 0,
          bowlRuns: 0,
          get economy(){
            let eco= parseFloat(this.bowlRuns / this.over).toFixed(2);
            return isNaN(eco) ? parseFloat("0.00") : eco;
        },
      }
    });
  }
  return player;
}

function valid(s) {
  const inputs = document.querySelectorAll(`#team${s}Input input`)
  for (const input of inputs) {
    if (input.value.trim() === '') {
      alert('Please fill in all player names');
      return false;
    }
  }
  return true;

}
function generateInputs2() {
  if (valid(1)) {
    const numPlayers = document.getElementById('numPlayers').value;
    const team2Input = document.getElementById('team2Input');
    team2Input.innerHTML = ''; // Clear previous inputs

    for (let i = 1; i <= numPlayers; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      // input.required = true;
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

}
// Assuming you have assigned an ID to the button that triggers this action
const collectBtn = document.getElementById('collectBtn'); // Assuming collectBtn is the correct ID

collectBtn.addEventListener('click', function () {

  if (valid(1)) {
    if (valid(2)) {
      const goToss = document.getElementById('goToss'); // Assuming goToss is the correct ID
      const inputs1 = document.querySelectorAll('#team1Input input');
      const inputs2 = document.querySelectorAll('#team2Input input');
      const team1PlayerNames = Array.from(inputs1).map(input => input.value);
      const team2PlayerNames = Array.from(inputs2).map(input => input.value);
      // Retrieve teamOne and teamTwo from local storage
      const teamOne = JSON.parse(localStorage.getItem('team1'));
      const teamTwo = JSON.parse(localStorage.getItem('team2'));

      // Update player names in teamOne and teamTwo objects
      teamOne.player.forEach((ele, i) => {
        ele.playerName = team1PlayerNames[i].toUpperCase();;
      });

      teamTwo.player.forEach((ele, j) => {
        ele.playerName = team2PlayerNames[j].toUpperCase();;
      });

      // Store the modified teamOne and teamTwo objects back into local storage
      localStorage.setItem('team1', JSON.stringify(teamOne));
      localStorage.setItem('team2', JSON.stringify(teamTwo));

      // Now you can show the goToss element
      collectBtn.style.display = 'none';
      closeBtn.style.display = "none";
      team1Input.style.display = 'none';
      team2Input.style.display = 'none';
      goToss.style.display = 'block';
    }
  }
});
