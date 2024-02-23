// ball count
let ballCount = 6;
let over =0;
let totalScore = 0;

const team1 =  JSON.parse(localStorage.getItem('team1'));
const team2 =  JSON.parse(localStorage.getItem('team2'));
console.log(team1);
console.log(team2);

// Seesion id
const batsmanId1 = sessionStorage.getItem('strikerEnd');  
const batsmanId2 = sessionStorage.getItem('nonStrikerEnd'); 
const bowlerId = sessionStorage.getItem('bowler'); 



// initial isbatting  and isbowling true
function istrue(){
    
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
function displayBatsman(){
    
    // console.log(batsmanId1,batsmanId2);

    batsman1Name.innerText = `${team1.player[batsmanId1-1].playerName}`;
    batsman1Runs.innerText= `${team1.player[batsmanId1-1].batting.battingRuns}`;
    batsman1Balls.innerText= `${team1.player[batsmanId1-1].batting.ballsBatted}`;
    batsman1Four.innerText= `${team1.player[batsmanId1-1].batting.fours}`;
    batsman1Six.innerText= `${team1.player[batsmanId1-1].batting.sixes}`;
    batsman1StrikeRate.innerText= `${team1.player[batsmanId1-1].batting.strikeRate}`;

    batsman2Name.innerText = `${team1.player[batsmanId2-1].playerName}`;
    batsman2Runs.innerText= `${team1.player[batsmanId2-1].batting.battingRuns}`;
    batsman2Balls.innerText= `${team1.player[batsmanId2-1].batting.ballsBatted}`;
    batsman2Four.innerText= `${team1.player[batsmanId2-1].batting.fours}`;
    batsman2Six.innerText= `${team1.player[batsmanId2-1].batting.sixes}`;
    batsman2StrikeRate.innerText= `${team1.player[batsmanId2-1].batting.strikeRate}`;

}
const bowlerName = document.getElementById('bowler-name');
const bowlerOver = document.getElementById('bowler-over');
const bowlerMaiden = document.getElementById('bowler-maiden');
const bowlerRuns = document.getElementById('bowler-runs');
const bowlerWicket = document.getElementById('bowler-wicket');
const bowlerEconomy = document.getElementById('bowler-economy');

function displaybowler() {
    bowlerName.innerText = `${team2.player[bowlerId-1].playerName}`;
    bowlerOver.innerText= `${team2.player[bowlerId-1].bowling.over}`;
    bowlerMaiden.innerText= `${team2.player[bowlerId-1].bowling.maiden}`;
    bowlerRuns.innerText= `${team2.player[bowlerId-1].bowling.bowlRuns}`;
    bowlerWicket.innerText= `${team2.player[bowlerId-1].bowling.wicket}`;
    bowlerEconomy.innerText= `${team2.player[bowlerId-1].bowling.economy}`;
}
displayBatsman();
displaybowler();



document.addEventListener('click', e=>{
    var attributeNames = e.target.getAttributeNames();
        var dataAttributes = attributeNames.filter(function(name) {
            return name.startsWith('data-');
        });
        let run = dataAttributes[0].split('-')[1];
        console.log(run);

        switch (run) {
            case 'dot':
                displayBall(0);
                overCount();
                break;
            case 'one':
                addScore(1);
                displayBall(1);
                overCount();
                break;
            case 'two':
                addScore(2);
                displayBall(2);
                overCount();
                break;
            case 'three':
                addScore(3);
                displayBall(3);
                overCount();
                break;
            case 'four':
                addScore(4);
                displayBall(4);
                overCount();
                break;
            case 'six':
                addScore(6);
                displayBall(6);
                overCount();
                break;
            case 'wide':
                addScore(1);
                displayBall('W');
                break;
            case 'noball':
                addScore(1);
                displayBall('NB');
                break;
            case 'bye':
                displayBall('B');
                overCount();
                break;
            case 'legbye':
                displayBall('LB');
                overCount();
                break;
            case 'undo':

                break;
            case 'other':
                addScore(5);
                displayBall(5);
                overCount();
                break;
            case 'out':
                displayBall('W');
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

function addScore(score){
    totalScore += score;
    team1.totalScore = totalScore;
    localStorage.setItem('team1', JSON.stringify(team1));
    // console.log(totalScore);
    displayBatsman();
}


// decrease the ballCount and increase the Over balls. last call isCheckover function
function overCount(){
    ballCount--;
    over += .1;
    over = over.toFixed(1);
    over = parseFloat(over);
    team1.totalOvers = over;
    localStorage.setItem('team1', JSON.stringify(team1));
    isCheckOver();
}

// This function check 6 ball is completed in over
function isCheckOver(){
    if(ballCount==0){
        over = nextOver();
        team1.totalOvers = over;
        localStorage.setItem('team1', JSON.stringify(team1));
        console.log(team1)
        console.log(over);
        ballCount=6;

        resetDisplayOver();
    }
}

// increment over
function nextOver(){
    return Math.round(over);
}

// Remove child in over-input-display
function resetDisplayOver(){
    overDisplay.innerHTML = '';
}






