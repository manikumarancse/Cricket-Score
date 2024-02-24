// -------------------Select players-----------------------

const team1 =  JSON.parse(localStorage.getItem('team1'));
const team2 =  JSON.parse(localStorage.getItem('team2'));

const strikerEnd = document.getElementById('strikerEnd');
const nonStrikerEnd = document.getElementById('nonStrikerEnd');

team1.player.forEach(element => {
    const option = document.createElement('option');
    option.innerText = `${element.playerName}`;
    option.value = element.playerId;
    strikerEnd.appendChild(option);

    strikerEnd.addEventListener('change', (event) => { // Change 'click' to 'change'
        const selectedPlayerId = event.target.value;
        sessionStorage.setItem('strikerEnd', selectedPlayerId);
        console.log(selectedPlayerId); 
    });
});

team1.player.forEach(element => {
    const option = document.createElement('option');
    option.innerText = `${element.playerName}`;
    option.value = element.playerId;
    nonStrikerEnd.appendChild(option);

    nonStrikerEnd.addEventListener('change', (event) => { // Change 'click' to 'change'
        const selectedPlayerId = event.target.value;
        sessionStorage.setItem('nonStrikerEnd', selectedPlayerId);
        console.log(selectedPlayerId); 
    });
});

const selectBowler = document.getElementById('selectBowler');

team2.player.forEach(element => {
    const option = document.createElement('option');
    option.innerText = `${element.playerName}`;
    option.value = element.playerId;
    selectBowler.appendChild(option);

    selectBowler.addEventListener('change', (event) => { // Change 'click' to 'change'
        const selectedPlayerId = event.target.value;
        sessionStorage.setItem('bowler', selectedPlayerId);
        console.log(selectedPlayerId); 
    });
});

