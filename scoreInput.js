// ball count
let ballCount = 6;
let over =0;
let totalScore = 0;
let battingTeam;
let bowlingTeam;
const team1 =  JSON.parse(localStorage.getItem('team1'));
const team2 =  JSON.parse(localStorage.getItem('team2'));
console.log(team1.player);
console.log(team2);


document.getElementById('instructions').addEventListener('click', ()=>{
    showPopup();
})
// pop up
function showPopup(className='pop-up1') {
    // console.log("Classname "+className);
    document.querySelector('#popup-runs').value = 0;
    if(className==='pop-up1'){
        setTimeout(() => {
            document.querySelector('.pop-up-box').style.visibility = 'visible'
            document.querySelector(`.${className}`).classList.add('active');
        }, 1000);
    }else{
        console.log("Classname "+className);
        document.querySelector('.pop-up-box').style.visibility = 'visible'
        document.querySelector(`.${className}`).classList.add('active');
    }
    

    document.querySelectorAll('.close').forEach((closeBtn) => { 
        closeBtn.addEventListener('click', function () {
        document.querySelector(`.${className}`).classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })
});
}

// Seesion id
const batsmanId1 = sessionStorage.getItem('strikerEnd')-1;  
const batsmanId2 = sessionStorage.getItem('nonStrikerEnd')-1; 
const bowlerId = sessionStorage.getItem('bowler')-1; 

console.log(batsmanId1);

let currentBatsmanId = sessionStorage.getItem('currentBatsmanId') || batsmanId1;
let secondBatsmanId = sessionStorage.getItem('secondBatsmanId') || batsmanId2;

sessionStorage.setItem('currentBatsmanId', currentBatsmanId);
sessionStorage.setItem('secondBatsmanId', secondBatsmanId);

const displayOver = document.getElementById('over');
// const displayRun = document.getElementById('runs');
const displayTeamName = document.getElementById('teamName');
const displayScore = document.getElementById('score');
const displayExtras = document.getElementById('extras'); 

function display() {
    let result = checkBattingTeam();
    let team = result.team;

    // let extra= 0;
    // team.extra.forEach(element => {
    //     extra+=element;
    // });
    displayTeamName.innerText = `${team.teamName}`;
    displayScore.innerText = `${team.totalScore}/${team.totalWickets}`;
    displayExtras.innerText = `${(team.extra.byes)+(team.extra.legByes)+(team.extra.wide)+(team.extra.noBall)}`;

    displayOver.innerText = `${team.completedOvers}`;
    // displayRun.innerText = `${eachOverRuns}`;
}


// Display current batsman and bowler
const batsman1Name = document.getElementById('batsman1-name');
const batsman1Runs = document.getElementById('batsman1-runs');
const batsman1Balls = document.getElementById('batsman1-balls');
const batsman1Four = document.getElementById('batsman1-fours');
const batsman1Six = document.getElementById('batsman1-sixs');
const batsman1StrikeRate = document.getElementById('batsman1-strike-rate');

const batsman2Name = document.getElementById('batsman2-name');
const batsman2Runs = document.getElementById('batsman2-runs');
const batsman2Balls = document.getElementById('batsman2-balls');
const batsman2Four = document.getElementById('batsman2-fours');
const batsman2Six = document.getElementById('batsman2-sixs');
const batsman2StrikeRate = document.getElementById('batsman2-strike-rate');

function displayBatsman(team){    
    // console.log(batsmanId1,batsmanId2);

    batsman1Name.innerText = `${team.player[batsmanId1].playerName}`;
    batsman1Runs.innerText= `${team.player[batsmanId1].batting.battingRuns}`;
    batsman1Balls.innerText= `${team.player[batsmanId1].batting.ballsBatted}`;
    batsman1Four.innerText= `${team.player[batsmanId1].batting.fours}`;
    batsman1Six.innerText= `${team.player[batsmanId1].batting.sixes}`;
    batsman1StrikeRate.innerText= `${team.player[batsmanId1].batting.strikeRate}`;

    batsman2Name.innerText = `${team.player[batsmanId2].playerName}`;
    batsman2Runs.innerText= `${team.player[batsmanId2].batting.battingRuns}`;
    batsman2Balls.innerText= `${team.player[batsmanId2].batting.ballsBatted}`;
    batsman2Four.innerText= `${team.player[batsmanId2].batting.fours}`;
    batsman2Six.innerText= `${team.player[batsmanId2].batting.sixes}`;
    batsman2StrikeRate.innerText= `${team.player[batsmanId2].batting.strikeRate}`;

}
const bowlerName = document.getElementById('bowler-name');
const bowlerOver = document.getElementById('bowler-over');
const bowlerMaiden = document.getElementById('bowler-maiden');
const bowlerRuns = document.getElementById('bowler-runs');
const bowlerWicket = document.getElementById('bowler-wicket');
const bowlerEconomy = document.getElementById('bowler-economy');

function displaybowler(team) {
    bowlerName.innerText = `${team.player[bowlerId].playerName}`;
    bowlerOver.innerText= `${team.player[bowlerId].bowling.over}`;
    bowlerMaiden.innerText= `${team.player[bowlerId].bowling.maiden}`;
    bowlerRuns.innerText= `${team.player[bowlerId].bowling.bowlRuns}`;
    bowlerWicket.innerText= `${team.player[bowlerId].bowling.wicket}`;
    bowlerEconomy.innerText= `${team.player[bowlerId].bowling.economy}`;
}

// initial isbatting  and isbowling true
function setBatting(team,teamNo){
    team.player[batsmanId1].isBatting = true;
    team.player[batsmanId2].isBatting = true;

    localStorage.setItem(`team${teamNo}`, JSON.stringify(team))
}
function setbowling(team, teamNo){
    team.player[bowlerId].isBowling = true;
    localStorage.setItem(`team${teamNo}`, JSON.stringify(team))
}

// Check which team is batting
if(team1.innings===1){
    displayBatsman(team1);
    setBatting(team1,1);
    battingTeam=team1.teamName;
    console.log("Team1 batting");
}else{
    displayBatsman(team2);
    setBatting(team2,2)
    battingTeam=team2.teamName;
    console.log("Team2 batting");
}

// check which team is bowling
if(team1.innings===2){
    displaybowler(team1);
    setbowling(team1,1)
    bowlingTeam=team1.teamName;
    console.log("Team1 bowling");
}else{
    displaybowler(team2);
    setbowling(team2,2);
    bowlingTeam=team2.teamName;
    console.log("Team2 bowling");
}



document.addEventListener('click', e=>{
    var attributeNames = e.target.getAttributeNames();
        var dataAttributes = attributeNames.filter(function(name) {
            return name.startsWith('data-');
        });
        let run = dataAttributes[0].split('-')[1];
        console.log(run);

        switch (run) {
            case 'dot':
                addBatsmanRuns(0);
                addBowlerRuns(0);
                displayBall(0);
                overCount();
                break;
            case 'one':
                addBatsmanRuns(1);
                addBowlerRuns(1);
                addScore(1);
                displayBall(1);
                overCount();
                break;
            case 'two':
                addBatsmanRuns(2);
                addBowlerRuns(2);
                addScore(2);
                displayBall(2);
                overCount();
                break;
            case 'three':
                addBatsmanRuns(3);
                addBowlerRuns(3);
                addScore(3);
                displayBall(3);
                overCount();
                break;
            case 'four':
                addBatsmanRuns(4,true);
                addBowlerRuns(4);
                addScore(4);
                displayBall(4);
                overCount();
                break;
            case 'six':
                addBatsmanRuns(6,true);
                addBowlerRuns(6);
                addScore(6);
                displayBall(6);
                overCount();
                break;
            case 'wide':
                addScore(1);
                break;
            case 'noball':
                addScore(1);
                break;
            case 'bye':
                overCount();
                break;
            case 'legbye':
                overCount();
                break;
            case 'undo':

                break;
            case 'other':
                addScore(5);
                overCount();
                break;
            case 'out':
                displayBall('W');
                batsmanOut();
                overCount();
                break;
        }
})

const overDisplay = document.getElementById('over-input-display');
// console.log(ball);
function displayBall(ball){
    // Create span element
    const span = document.createElement('span');
    span.classList.add('ball');
    span.innerText = `${ball}`;
    overDisplay.appendChild(span);
}

function addBatsmanRuns(run,boundaries=false){
    let result = checkBattingTeam();
    let team = result.team;

    team.player[currentBatsmanId].batting.ballsBatted += 1;
    team.player[currentBatsmanId].batting.battingRuns += run;

    if((run===4 || run===6) && boundaries){
        if(run===4){
            team.player[currentBatsmanId].batting.fours += 1; 
        }else if(run===6){
            team.player[currentBatsmanId].batting.sixes += 1; 
        }
    }

    // Swap
    if(run%2!=0){
        console.log("currentID: "+currentBatsmanId+" SecondID: "+secondBatsmanId);
        swapPlayers();
        console.log("currentID: "+currentBatsmanId+" SecondID: "+secondBatsmanId);
    }

    localStorage.setItem(`team${result.number}`, JSON.stringify(team));    
}

let overRuns = 0

function addBowlerRuns(run){
    let result = checkBowlingTeam();
    let team = result.team;

    let bowlerOver = team.player[bowlerId].bowling.over
    bowlerOver += .1;
    bowlerOver = bowlerOver.toFixed(1);
    bowlerOver = parseFloat(bowlerOver);
    team.player[bowlerId].bowling.bowlRuns += run;
    team.player[bowlerId].bowling.over = bowlerOver;
        
    if(run===0){
        overRuns++;
        console.log("Over Runs"+overRuns);
    }
    if(overRuns===6){
        team.player[bowlerId].bowling.maiden += 1;
        overRuns = 0;
        console.log("Maiden"+ overRuns);
    }
    
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));    
}

function addScore(score){
    let result = checkBattingTeam();
    let team = result.team;
    team.totalScore += score;
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));
}


// decrease the ballCount and increase the Over balls. last call isCheckover function
function overCount(){
    
    let result = checkBattingTeam();
    let team = result.team; 

    ballCount--;
    over = team.completedOvers;
    over += .1;
    over = over.toFixed(1);
    over = parseFloat(over);

    
    team.completedOvers = over;
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));
    isCheckOver();
    display();
    let result2 = checkBowlingTeam();
    displaybowler(result2.team);
    displayBatsman(result.team);
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

// This function check 6 ball is completed in over
function isCheckOver(){
    if(ballCount==0){
        let result = checkBattingTeam();
        let team = result.team;

        over = nextOver();
        team.completedOvers = over;
        localStorage.setItem(`team${result.number}`, JSON.stringify(team));
        // console.log(team1)
        console.log(over);
        ballCount=6;
        swapPlayers();
        overRuns = 0;
        console.log("Over over "+overRuns);

        if(!inningsOver()){


            if (checkIfLastBallWicket()) {
                sessionStorage.setItem('selectNewBatsmanAndBowler', 'true'); // Set flag to select both batsman and bowler
            } else {
                setTimeout(() => {
                    resetDisplayOver();
                }, 3000);
                callNextPlayer('select-bowler'); // Select next bowler
            }
        }
    }
}

function checkIfLastBallWicket() {
    // Check if the current batsman is out
    let currentBatsmanId = sessionStorage.getItem('currentBatsmanId');
    let team = checkBattingTeam().team;
    let currentBatsman = team.player[currentBatsmanId];
    console.log("Swaping "+currentBatsmanId);
    if (currentBatsman.batsmanOut && ballCount === 1) {
        // If the current batsman is out and it's the last ball of the over
        return true; // Last ball resulted in a wicket
    } else {
        return false; // Last ball did not result in a wicket
    }
}

function callNextPlayer(call){
    let selectNewBatsmanAndBowler = sessionStorage.getItem('selectNewBatsmanAndBowler');
    if (selectNewBatsmanAndBowler === 'true') {
        sessionStorage.removeItem('selectNewBatsmanAndBowler');
        window.location.href = `./selectPlayers.html?call=select-batsman-bowler`;
    } else {
        window.location.href = `./selectPlayers.html?call=${call}`;
    }
}
// increment over EX: 1.6 to 2.0
function nextOver(){
    return Math.round(over);
}

// Remove child in over-input-display
function resetDisplayOver(){
    overDisplay.innerHTML = '';
}

// Swap player if odds runs scored by batsman.
function swapPlayers(){
    let id = currentBatsmanId;
    currentBatsmanId = secondBatsmanId;
    secondBatsmanId = id;

    sessionStorage.setItem('currentBatsmanId', currentBatsmanId);
    sessionStorage.setItem('secondBatsmanId', secondBatsmanId);
}

// Batsman out and wicket added to bowler's account.
function batsmanOut(){
    // change localStorage batsmanOut to true, so again can't play. 
    let battingTeam = checkBattingTeam();
    let batTeam = battingTeam.team;
    batTeam.player[currentBatsmanId].batsmanOut = true;

    batTeam.totalWickets += 1; 
    localStorage.setItem(`team${battingTeam.number}`, JSON.stringify(batTeam));

    // wicket added to bowler's account.
    let bowlingTeam = checkBowlingTeam();
    let bowlTeam = bowlingTeam.team;
    bowlTeam.player[bowlerId].bowling.wicket += 1; 
    localStorage.setItem(`team${bowlingTeam.number}`, JSON.stringify(bowlTeam));

    if(!inningsOver()){
    console.log("next page");
    if (ballCount === 1) {
        sessionStorage.removeItem('currentBatsmanId');
        sessionStorage.setItem('selectNewBatsmanAndBowler', 'true'); // Set flag to select both batsman and bowler
        console.log("last ball"+ ballCount);
    } else {
        callNextPlayer('select-striker-end');
        sessionStorage.removeItem('currentBatsmanId');
        // setTimeout(() => {
        //     callNextPlayer('select-striker-end'); 
        // }, 1000);
    }
}
}


// Event listener for showing the popup box
document.querySelectorAll('.keys[data-wide], .keys[data-noball], .keys[data-bye], .keys[data-legbye], .keys[data-other]').forEach(button => {
    button.addEventListener('click', (e) => {
        var attributeNames = e.target.getAttributeNames();
        var dataAttributes = attributeNames.filter(function(name) {
            return name.startsWith('data-');
        });
        let popupTitle = dataAttributes[0].split('-')[1];
        let titleName = popupTitle.charAt(0).toUpperCase()+popupTitle.slice(1).toLowerCase();
        document.querySelector('#popup-title').textContent = titleName;
        showPopup('pop-up');
    });
});


// Event listener for close button in the popup box
document.querySelector('.close').addEventListener('click', () => {
    hidePopup();
});

// Event listener for "Enter" button in the popup box
document.querySelector('.popup-enter-btn').addEventListener('click', () => {
    // Get the entered runs from the input field
    const runsInput = document.querySelector('#popup-runs');
    const runs = parseInt(runsInput.value);
    
    // This is for check Maiden over
    let extras = document.querySelector('#popup-title').textContent;
    console.log(extras);
    // if bowler bowls wide ball or no ball, the maiden over will not credit the bowler's over.
    if(extras == 'Wide' || extras == 'Noball'){
        overRuns = 0;
    }


    // Validate if runs are entered and handle accordingly
    if (!isNaN(runs)) {
        handleRuns(runs, extras);
        hidePopup();
    } else {
        console.error('Invalid runs entered.');
    }
});

// function extras(runType){

//     let result = checkBattingTeam();
//     let team = result.team;

//     if(runType=='Wide'){
//         team.extra.wide += 1;
//     }else if(runType=='Noball'){
//         team.extra.noBall += 1; 
//     }else if(runType=='Bye'){
//         team.extra.noBall += 1; 
//     }else if(runType=='Legbye'){
//         team.extra.noBall += 1; 
//     }
// }

// Function to handle the runs entered
function handleRuns(runs , runType) {
    // Handle the runs according to the context (wide, no-ball, bye, legbye)
    console.log('Runs entered:', runs);

    let result = checkBattingTeam();
    let team = result.team;
    
    if(runType=='Wide'){
        displayBall(`${runs==0?'':runs}WD`);
        team.extra.wide += (1+runs);
        addBatsmanRuns(runs+1);
    }else if(runType=='Noball'){
        displayBall(`${runs==0?'':runs}NB`);
        team.extra.noBall += (1+runs);
        addBatsmanRuns(runs+1);
    }else if(runType=='Bye'){
        displayBall(`${runs==0?'':runs}B`);
        team.extra.byes += runs;
        addBatsmanRuns(runs); 
    }else if(runType=='Legbye'){
        displayBall(`${runs==0?'':runs}B`);
        team.extra.legByes += runs; 
        addBatsmanRuns(runs); 
    }else{
        addBatsmanRuns(runs);
        displayBall(runs);
    }

    
    addBowlerRuns(runs);
}

// Function to hide the popup box
function hidePopup() {
    document.querySelector('.pop-up-box').style.visibility = 'hidden';
    document.querySelector('.pop-up').classList.remove('active');
}

// Check if first innings id over
var matchData = JSON.parse(localStorage.getItem('matchData'));

function inningsOver(){
    let result = checkBattingTeam();
    let result2 = checkBowlingTeam();
    let team = result.team
    let team2 = result2.team
    if((team.totalWickets==matchData.noOfPlayers-1)|| (team.completedOvers==matchData.totalOvers)){
        alert("Match over");
        team.halfInnings = true;
        team.innings = 2;
        team2.innings = 1;

        localStorage.setItem(`team${result.number}`, JSON.stringify(team));  
        localStorage.setItem(`team${result2.number}`, JSON.stringify(team2));  

        return true;
    }
    return false;
}

display();
