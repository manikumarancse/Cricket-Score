// -------------------Select players-----------------------

const team1 =  JSON.parse(localStorage.getItem('team1'));
const team2 =  JSON.parse(localStorage.getItem('team2'));

const strikerEnd = document.getElementById('strikerEnd');
const nonStrikerEnd = document.getElementById('nonStrikerEnd');
const selectBowler = document.getElementById('selectBowler');
const selectNextBowler = document.getElementById('selectNextBowler');
const selectNextNonStriker = document.getElementById('selectNextNonStriker');
const startBtn = document.getElementById('start');
let battingTeam;
let bowlingTeam;

const searchParams = new URLSearchParams(window.location.search);
let classNameId =  searchParams.get('call');
console.log(classNameId);

const bowlerContainer = document.getElementById('select-bowler');
const strikerEndContainer = document.getElementById('select-striker-end');
const nonStrikerEndContainer = document.getElementById('select-non-striker-end');
const batsmanAndBowlerContainer = document.getElementById('select-batsman-bowler');

if(classNameId==null){
    bowlerContainer.style.display = "block";
    strikerEndContainer.style.display = "block";
    nonStrikerEndContainer.style.display = "block";
    batsmanAndBowlerContainer.style.display = "none";
    initial();
    displayBatsman();
    displayBowler();
    
}else if(classNameId==bowlerContainer.id){
    bowlerContainer.style.display = "block";
    strikerEndContainer.style.display = "none";
    nonStrikerEndContainer.style.display = "none";
    batsmanAndBowlerContainer.style.display = "none";
    initial();
    displayBatsman();
    displayBowler();
}else if(classNameId==strikerEndContainer.id){
    bowlerContainer.style.display = "none";
    strikerEndContainer.style.display = "block";
    nonStrikerEndContainer.style.display = "none";
    batsmanAndBowlerContainer.style.display = "none";
    initial();
    displayBatsman();
    displayBowler();
}else if(classNameId==nonStrikerEndContainer.id){
    bowlerContainer.style.display = "none";
    strikerEndContainer.style.display = "none";
    nonStrikerEndContainer.style.display = "block";
    batsmanAndBowlerContainer.style.display = "none";
    initial();
    displayBatsman();
    displayBowler();
}else if(classNameId==batsmanAndBowlerContainer.id){
    bowlerContainer.style.display = "none";
    strikerEndContainer.style.display = "none";
    nonStrikerEndContainer.style.display = "none";
    batsmanAndBowlerContainer.style.display = "block";
    initial();
    displayBatsmanAndBowler();
}

// Initialize batting and bowling teams


function initial(){
    // Check which team is batting
if(team1.innings==1){
    battingTeam=team1.teamName;
    console.log("Team1 batting");
}else{
    console.log("sdsds");
    battingTeam=team2.teamName;
    console.log("Team2 batting");
}

// check which team is bowling
if(team1.innings==2){
    bowlingTeam=team1.teamName;
    console.log("Team1 bowling");
}else{
    bowlingTeam=team2.teamName;
    console.log("Team2 bowling");
}
}

function checkBattingTeam(){
    if(battingTeam==team1.teamName)
        return { team: team1, number: 1 };
    if(battingTeam==team2.teamName)
        return { team: team2, number: 2 };
}

function checkBowlingTeam(){
    if(bowlingTeam==team1.teamName)
        return { team: team1, number: 1 };
    if(bowlingTeam==team2.teamName)
        return { team: team2, number: 2 };
}

function displayBatsman(){
let result = checkBattingTeam();
console.log("Batting team result:", result);
let batTeam = result.team;
batTeam.player.forEach(element => {

    if(element.isBatting!=true){
        console.log(element.playerName);
        const option = document.createElement('option');
        option.textContent = `${element.playerName}`;
        option.value = element.playerId;
        console.log(option);
        strikerEnd.appendChild(option);

        strikerEnd.addEventListener('change', (event) => { // Change 'click' to 'change'
            const selectedPlayerId = event.target.value;
            sessionStorage.setItem('strikerEnd', selectedPlayerId);
            console.log(selectedPlayerId); 
        });
    }
});

batTeam.player.forEach(element => {
    if(element.isBatting!=true){
        const option = document.createElement('option');
        option.innerText = `${element.playerName}`;
        option.value = element.playerId;
        nonStrikerEnd.appendChild(option);

        nonStrikerEnd.addEventListener('change', (event) => { // Change 'click' to 'change'
            const selectedPlayerId = event.target.value;
            sessionStorage.setItem('nonStrikerEnd', selectedPlayerId);
            console.log(selectedPlayerId); 
        });
    }
});
}

function displayBowler(){

    let result2 = checkBowlingTeam();
    let bowlTeam = result2.team;
    bowlTeam.player.forEach(element => {
        if(element.playerId!=sessionStorage.getItem('bowler')){
            const option = document.createElement('option');
            option.innerText = `${element.playerName}`;
            option.value = element.playerId;
            selectBowler.appendChild(option);

            selectBowler.addEventListener('change', (event) => { // Change 'click' to 'change'
                const selectedPlayerId = event.target.value;
                sessionStorage.setItem('bowler', selectedPlayerId);
                console.log(selectedPlayerId); 
            });
        }
    });
}


startBtn.addEventListener('click', ()=>{
    const batsman1 = sessionStorage.getItem('strikerEnd');
    const batsman2 = sessionStorage.getItem('nonStrikerEnd');
    const bowler = sessionStorage.getItem('bowler');

    if(batsman1==batsman2){
        alert("you cann't select two batsman same player");
    }else{
        window.location.href = "scoreInput.html";
    }
});


function displayBatsmanAndBowler(){
    let result = checkBattingTeam();
    console.log("Batting team result:", result);
    let batTeam = result.team;
    batTeam.player.forEach(element => {

        if(element.isBatting!=true){
            console.log(element.playerName);
            const option = document.createElement('option');
            option.textContent = `${element.playerName}`;
            option.value = element.playerId;
            console.log(option);
            selectNextNonStriker.appendChild(option);

            selectNextNonStriker.addEventListener('change', (event) => { // Change 'click' to 'change'
                const selectedPlayerId = event.target.value;
                sessionStorage.setItem('nonStrikerEnd', selectedPlayerId);
                console.log(selectedPlayerId); 
            });
        }
    });

    let result2 = checkBowlingTeam();
    let bowlTeam = result2.team;
    bowlTeam.player.forEach(element => {
        if(element.playerId!=sessionStorage.getItem('bowler')){
            const option = document.createElement('option');
            option.innerText = `${element.playerName}`;
            option.value = element.playerId;
            selectNextBowler.appendChild(option);

            selectNextBowler.addEventListener('change', (event) => { // Change 'click' to 'change'
                const selectedPlayerId = event.target.value;
                sessionStorage.setItem('bowler', selectedPlayerId);
                console.log(selectedPlayerId); 
            });
        }
    });
}

initial();