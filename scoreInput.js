// ball count
// let ballCount = 6;
let over =0;
let totalScore = 0;
let battingTeam;
let bowlingTeam;
let a;

// Get Team One, Team Two and Over-Balls data form LocalStorage
const team1 =  JSON.parse(localStorage.getItem('team1'));
const team2 =  JSON.parse(localStorage.getItem('team2'));
const overBalls = JSON.parse(localStorage.getItem('over'));

// set Over-balls, ball count and over runs(array) in variable 
let ballCount = overBalls.ballCount;  //ball count six
let localOverRuns = overBalls.over;   //EX: [ 3 , 4 , 6NB , W , WD , 0 ]

// This Event Listener invoke Instruction Pop up.
document.getElementById('instructions').addEventListener('click', ()=>{
    showPopup();
})

// Pop-up function: invoke dynamic pop-ups based on arguments.
function showPopup(className='pop-up1') {
    document.querySelector('#popup-runs').value = 0;                            //this for wide, no ball, byes... inputs. The default input value is 0.
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
    
    // Set close Pop-up Buttons
    document.querySelectorAll('.close').forEach((closeBtn) => { 
        closeBtn.addEventListener('click', function () {
        document.querySelector(`.${className}`).classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })
});
}

// Get session IDs for Striker, Non-Striker, and Bowler
// const batsmanId1 = sessionStorage.getItem('strikerEnd')-1;  
// const batsmanId2 = sessionStorage.getItem('nonStrikerEnd')-1; 
const bowlerId = sessionStorage.getItem('bowler')-1;
let currentBatsmanId = sessionStorage.getItem('currentBatsmanId'); // || batsmanId1
let secondBatsmanId = sessionStorage.getItem('secondBatsmanId'); //|| batsmanId2;

// Set Current batsman Id and Second batsman Id in session.
sessionStorage.setItem('currentBatsmanId', currentBatsmanId);
sessionStorage.setItem('secondBatsmanId', secondBatsmanId);

const displayOver = document.getElementById('over');
// const displayRun = document.getElementById('runs');
const displayTeamName = document.getElementById('teamName');
const displayScore = document.getElementById('score');
const displayExtras = document.getElementById('extras'); 

// Dipaly Team Name, Score, Wicket, Overs and Extras
function display() {
    let result = checkBattingTeam();
    let team = result.team;

    displayTeamName.innerText = `${team.teamName}`;
    displayScore.innerText = `${team.totalScore}/${team.totalWickets}`;
    displayExtras.innerText = `${(team.extra.byes)+(team.extra.legByes)+(team.extra.wide)+(team.extra.noBall)}`;

    displayOver.innerText = `${team.completedOvers}`;
    // displayRun.innerText = `${eachOverRuns}`;

    let result2 = checkBowlingTeam();
    let team2 = result2.team;
    displayBatsman(team);
    displaybowler(team2);
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

// Diplay Batsman name, runs, ball faced, fours and six.
function displayBatsman(team){    

    // indicate the current batsman with highlight
    batsman1Name.style.color = batsman1Runs.style.color = batsman1Balls.style.color = batsman1Four.style.color = batsman1Six.style.color = "blue";


    batsman1Name.innerText = `${team.player[currentBatsmanId].playerName}**`;
    batsman1Runs.innerText= `${team.player[currentBatsmanId].batting.battingRuns}`;
    batsman1Balls.innerText= `${team.player[currentBatsmanId].batting.ballsBatted}`;
    batsman1Four.innerText= `${team.player[currentBatsmanId].batting.fours}`;
    batsman1Six.innerText= `${team.player[currentBatsmanId].batting.sixes}`;

    batsman2Name.innerText = `${team.player[secondBatsmanId].playerName}`;
    batsman2Runs.innerText= `${team.player[secondBatsmanId].batting.battingRuns}`;
    batsman2Balls.innerText= `${team.player[secondBatsmanId].batting.ballsBatted}`;
    batsman2Four.innerText= `${team.player[secondBatsmanId].batting.fours}`;
    batsman2Six.innerText= `${team.player[secondBatsmanId].batting.sixes}`;

}
const bowlerName = document.getElementById('bowler-name');
const bowlerOver = document.getElementById('bowler-over');
const bowlerMaiden = document.getElementById('bowler-maiden');
const bowlerRuns = document.getElementById('bowler-runs');
const bowlerWicket = document.getElementById('bowler-wicket');
const bowlerEconomy = document.getElementById('bowler-economy');

// Display the bowler's name, over, runs given, maiden over count, and wickets.
function displaybowler(team) {
    bowlerName.innerText = `${team.player[bowlerId].playerName}`;
    bowlerOver.innerText= `${team.player[bowlerId].bowling.over}`;
    bowlerMaiden.innerText= `${team.player[bowlerId].bowling.maiden}`;
    bowlerRuns.innerText= `${team.player[bowlerId].bowling.bowlRuns}`;
    bowlerWicket.innerText= `${team.player[bowlerId].bowling.wicket}`;
}

// initial isbatting and isbowling true.
function setBatting(team,teamNo){
    team.player[currentBatsmanId].isBatting = true;
    team.player[secondBatsmanId].isBatting = true;

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


// Keyboard buttons Event Listener 
document.addEventListener('click', e=>{
    var attributeNames = e.target.getAttributeNames();
        var dataAttributes = attributeNames.filter(function(name) {
            return name.startsWith('data-');
        });
        let run = dataAttributes[0].split('-')[1];          //get which button is clicked
        // console.log(run);
        a="";
        switch (run) {
            case 'dot':
                addBatsmanRuns(0);
                addBowlerRuns(0);
                localOverRuns.push(0);          //push run in over-ball runs(array)
                displayBall(0);
                checkWinner()
                overCount();
                break;
            case 'one':
                addBatsmanRuns(1);
                addBowlerRuns(1);
                addScore(1);
                localOverRuns.push(1);
                displayBall(1);
                checkWinner()
                overCount();
                break;
            case 'two':
                addBatsmanRuns(2);
                addBowlerRuns(2);
                addScore(2);
                localOverRuns.push(2);
                displayBall(2);
                checkWinner()
                overCount();
                break;
            case 'three':
                addBatsmanRuns(3);
                addBowlerRuns(3);
                addScore(3);
                localOverRuns.push(3);
                displayBall(3);
                checkWinner()
                overCount();
                break;
            case 'four':
                addBatsmanRuns(4,true);
                addBowlerRuns(4);
                addScore(4);
                localOverRuns.push(4);
                displayBall(4);
                checkWinner()
                overCount();
                break;
            case 'six':
                addBatsmanRuns(6,true);
                addBowlerRuns(6);
                addScore(6);
                localOverRuns.push(6);
                displayBall(6);
                checkWinner()
                overCount();
                break;
            case 'wide':
                checkWinner()
                break;
            case 'noball':
                checkWinner()
                break;
            case 'bye':
                checkWinner()
                break;
            case 'legbye':
                // overCount();
                checkWinner()
                break;
            case 'other':
                // overCount();
                checkWinner()
                break;
            case 'out':
                localOverRuns.push('W');
                displayBall('W');
                batsmanOut();
                checkWinner()
                overCount();
                break;
        }
        eco();
})

const overDisplay = document.getElementById('over-input-display');
// diplay over-balls runs
function displayBall(ball){
    // Create a span element, add the 'ball' CSS class, set the inner text, and append.
    const span = document.createElement('span');
    span.classList.add('ball');
    span.innerText = `${ball}`;
    overDisplay.appendChild(span);
}

// dipaly previous over-balls runs 
localOverRuns.forEach(element => {
    console.log(element);
    displayBall(element);    
});

// Add score/runs in batsman account
function addBatsmanRuns(run,boundaries=false){
    let result = checkBattingTeam();
    let team = result.team;

    // Don't add ball count and runs while the ball is wide and no-ball.
    if(a=='Wide' || a=='Noball'){
        console.log(a);
        a = "";
        console.log(a);
    }else{
        team.player[currentBatsmanId].batting.ballsBatted += 1;
        team.player[currentBatsmanId].batting.battingRuns += run;
        a = "";
    }

    
    // check if it's boundaries.
    if((run===4 || run===6) && boundaries){
        if(run===4){
            team.player[currentBatsmanId].batting.fours += 1; 
        }else if(run===6){
            team.player[currentBatsmanId].batting.sixes += 1; 
        }
    }

    // set strike rate in local storage
    let sr=parseFloat((((team.player[currentBatsmanId].batting.battingRuns)/(team.player[currentBatsmanId].batting.ballsBatted))*100).toFixed(2));
    // strike.innerText=((isNaN(sr))? 0: sr);
    team.player[currentBatsmanId].batting.strikeRate = sr;
    // Swap players, when odd runs are scored.
    if(run%2!=0){
        console.log("currentID: "+currentBatsmanId+" SecondID: "+secondBatsmanId);
        swapPlayers();
        console.log("currentID: "+currentBatsmanId+" SecondID: "+secondBatsmanId);
    }
    // Update all change in localStorage
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));    
}

let overRuns = 0
// Add over, runs, maiden over count and economy in bowler's account
function addBowlerRuns(run){
    let result = checkBowlingTeam();
    let team = result.team;

    // team.player[bowlerId].bowling.over += .1;
    // bowlerOver += .1;
    // bowlerOver = bowlerOver.toFixed(1);
    // bowlerOver = parseFloat(bowlerOver);
    team.player[bowlerId].bowling.bowlRuns += run;
    // team.player[bowlerId].bowling.over = bowlerOver;
       
    // Increment overRuns, if dot ball
    if(run===0){
        overRuns++;
        console.log("Over Runs"+overRuns);
    }
    // increment the bowler's maiden over by one if all six balls are dot balls. 
    if(overRuns===6){
        team.player[bowlerId].bowling.maiden += 1;
        overRuns = 0;
        console.log("Maiden"+ overRuns);
    }
    
    // calculate economy
    // let overs = team.player[bowlerId].bowling.over;
    // console.log("Over"+overs); // Example decimal value representing overs
    // let wholeNumberPart = Math.floor(overs); // Extract the whole number part (1 in this case)
    // let decimalPart = overs - wholeNumberPart; // Extract the decimal part (0.2 in this case)
    // let numberOfBalls = wholeNumberPart * 6 + Math.round(decimalPart * 10); // Convert to balls
    // // console.log(numberOfBalls); // Output: 7
    // console.log(numberOfBalls);
    // console.log(team.player[bowlerId].bowling.bowlRuns);
    // let eco= ((team.player[bowlerId].bowling.bowlRuns / numberOfBalls) * 6).toFixed(2);
    // team.player[bowlerId].bowling.economy = eco;
    // // update all change in local storage.
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));    
}
function eco() {
    let result = checkBowlingTeam();
    let team = result.team;
    let overs = team.player[bowlerId].bowling.over;
    console.log("Over"+overs); // Example decimal value representing overs
    let wholeNumberPart = Math.floor(overs); // Extract the whole number part (1 in this case)
    let decimalPart = overs - wholeNumberPart; // Extract the decimal part (0.2 in this case)
    let numberOfBalls = wholeNumberPart * 6 + Math.round(decimalPart * 10); // Convert to balls
    // console.log(numberOfBalls); // Output: 7
    console.log(numberOfBalls);
    console.log(team.player[bowlerId].bowling.bowlRuns);
    let eco= ((team.player[bowlerId].bowling.bowlRuns / numberOfBalls) * 6).toFixed(2);
    team.player[bowlerId].bowling.economy = eco;
    // update all change in local storage.
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));    
}
// Add Team Score
function addScore(score){
    let result = checkBattingTeam();
    let team = result.team;
    team.totalScore += score;
    checkWinner();
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));
}


// decrease the ball count and increase the overballs by 0.1. And the last call isCheckover function.
function overCount(){
    
    let result = checkBattingTeam();
    let team = result.team; 

    ballCount--;
    overBalls.ballCount = ballCount;
    over = team.completedOvers;
    over += .1;
    over = over.toFixed(1);
    over = parseFloat(over);
    
    /* checkWinner() */
    
    // update batting team data and over in local storage.
    team.completedOvers = over;
    localStorage.setItem(`team${result.number}`, JSON.stringify(team));
    localStorage.setItem(`over`, JSON.stringify(overBalls));
    
    let result2 = checkBowlingTeam();
    let team2 = result2.team;
    let bowlerOver = team2.player[bowlerId].bowling.over
    bowlerOver +=.1;
    bowlerOver = bowlerOver.toFixed(1);
    bowlerOver = parseFloat(bowlerOver);
    
    team2.player[bowlerId].bowling.over = bowlerOver;
    // update bowling team data in local storage.
    localStorage.setItem(`team${result2.number}`, JSON.stringify(team2));

    inningsOver();
    // checkWinner();
    isCheckOver();                  //Check-over is completed for every ball.
    display();                      //refresh display, batsman, and bowler. because all changes need to be updated on the screen.
    displaybowler(result2.team);
    displayBatsman(result.team);
}

// Check which Team is batting and return team object and team number
function checkBattingTeam(){
    if(battingTeam==team1.teamName)
        return { team: team1, number: 1 };
    if(battingTeam==team2.teamName)
        return { team: team2, number: 2 };
}
// // Check which Team is bowler and return team object and team number
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

        over = nextOver(over);
        team.completedOvers = over;
        localStorage.setItem(`team${result.number}`, JSON.stringify(team));     //Batting Team
        // console.log(team1)
        // console.log(over);
        // alert("over end")
        ballCount=6;            //Again, set the ball count to 6 for the next over.
        swapPlayers();          //Swap Players, because over is completed
        overRuns = 0;           //set overRuns. This is used to check the maiden over bowled by the bowler's

        // Restate local storage over ball count to six and over runs to [](empty array).
        overBalls.ballCount = 6;
        overBalls.over = [];
        localStorage.setItem('over', JSON.stringify(overBalls));
        console.log("Over over "+overRuns);

        // Bowling team 
        let result2 = checkBowlingTeam();
        let team2 = result2.team;
        team2.player[bowlerId].bowling.over = nextOver(team2.player[bowlerId].bowling.over);
        console.log(team2.player[bowlerId].bowling.over);
        localStorage.setItem(`team${result2.number}`, JSON.stringify(team2));
        
        //this condition, run every ball. It doesn't run if the innings are over.
        if(!inningsOver()){  
            
            
            if (checkIfLastBallWicket()) {
                sessionStorage.setItem('selectNewBatsmanAndBowler', 'true'); // Set flag to select both batsman and bowler
            } else {
                setTimeout(() => {
                    resetDisplayOver();     //remove all over runs display
                }, 3000);
                
                callNextPlayer('select-bowler'); // Select next bowler
            }
        }
        // if (!checkWinner()) {
        //     if (checkIfLastBallWicket()) {
        //         sessionStorage.setItem('selectNewBatsmanAndBowler', 'true'); // Set flag to select both batsman and bowler
        //     } else {
        //         setTimeout(() => {
        //             resetDisplayOver();     //remove all over runs display
        //         }, 3000);
                
        //         callNextPlayer('select-bowler'); // Select next bowler
        //     }
        // }
    }
}
// Check If over last ball is wicket. because next user need to select next new batsman and bowler  
function checkIfLastBallWicket() {
    // Check if the current batsman is out
    let currentBatsmanId = sessionStorage.getItem('currentBatsmanId');
    let team = checkBattingTeam().team;
    let currentBatsman = team.player[currentBatsmanId];
    // console.log("Swaping "+currentBatsmanId);
    if (currentBatsman.batsmanOut && ballCount === 1) {
        // If the current batsman is out and it's the last ball of the over
        return true; // Last ball resulted in a wicket
    } else {
        return false; // Last ball did not result in a wicket
    }
}
// 
function callNextPlayer(call){
    let selectNewBatsmanAndBowler = sessionStorage.getItem('selectNewBatsmanAndBowler');
    if (selectNewBatsmanAndBowler === 'true') {
        sessionStorage.removeItem('selectNewBatsmanAndBowler');
        window.location.href = `./selectPlayers.html?call=select-batsman-bowler`;
    } else {
        window.location.href = `./selectPlayers.html?call=${call}`;
    }
    // if (call === 'select-striker-end') {
    //     // sessionStorage.removeItem('selectNewBatsmanAndBowler');
    //     window.location.href = `./selectPlayers.html?call=select-striker-end`;
    // } else {
    //     window.location.href = `./scoreCard.html?call=${call}`;
    // }
}
// round the over EX: 1.6 to 2.0
function nextOver(over){
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
    // change localStorage batsman Out to true, so again, they can't play.
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
    
    // inningsOver()    
    //If the inning is over, it doesn't call the NextPlayer function to continue.
    if(!inningsOver()){

    console.log("next page");
    if (ballCount === 1) {
        // callNextPlayer('select-batsman-bowler');
        sessionStorage.removeItem('currentBatsmanId');
        sessionStorage.setItem('selectNewBatsmanAndBowler', 'true'); // Set flag to select both batsman and bowler
        console.log("last ball"+ ballCount);
    } else {

        callNextPlayer('select-striker-end');
        sessionStorage.removeItem('currentBatsmanId');
        // window.location.href = `./selectPlayers.html?call=select-striker-end`;
        // setTimeout(() => {
        //     callNextPlayer('select-striker-end'); 
        // }, 1000);
    }
}
}


// Event listener for showing the input popup box
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
    let invalid = document.getElementById('invalid');
    a= extras;
    console.log(extras);
    // if bowler bowls wide ball or no ball, the maiden over will not credit the bowler's over.
    if(extras == 'Wide' || extras == 'Noball'){
        overRuns = 0;
    }


    // Validate if runs are entered and handle accordingly
    if (!isNaN(runs) && runs >= 0 && runs <=7) {
        invalid.style.display = "none";
        handleRuns(runs, extras);
        hidePopup();
    } else {
        invalid.style.display = "block";
        console.error('Invalid runs entered.');
    }
});


// Function to handle the runs entered
function handleRuns(runs , runType) {
    // Handle the runs according to the context (wide, no-ball, bye, legbye and other)
    console.log('Runs entered:', runs);

    let result = checkBattingTeam();
    let team = result.team;
    
    if(runType=='Wide'){
        localOverRuns.push(`${runs==0?'':runs}WD`);
        displayBall(`${runs==0?'':runs}WD`);
        team.extra.wide += (1+runs);
        addScore(runs+1);
        addBowlerRuns(runs+1);
        display();
    }else if(runType=='Noball'){
        localOverRuns.push(`${runs==0?'':runs}NB`)
        displayBall(`${runs==0?'':runs}NB`);
        team.extra.noBall += (1+runs);
        addScore(runs+1);
        addBatsmanRuns(runs);
        addBowlerRuns(runs+1);
        display();
    }else if(runType=='Bye'){
        localOverRuns.push(`${runs==0?'':runs}B`)
        displayBall(`${runs==0?'':runs}B`);
        team.extra.byes += runs;
        addScore(runs);
        addBatsmanRuns(0);
        overCount();
        display();    
    }else if(runType=='Legbye'){
        localOverRuns.push(`${runs==0?'':runs}LB`)
        displayBall(`${runs==0?'':runs}B`);
        team.extra.legByes += runs; 
        addScore(runs);
        addBatsmanRuns(0);
        overCount();
        display();
    }else{
        localOverRuns.push(runs);
        displayBall(runs);
        // team.extra.byes += runs;
        addScore(runs);
        addBatsmanRuns(runs)
        addBowlerRuns(runs)
        overCount();
        display(); 
    }
    
}

// Function to hide the popup box
function hidePopup() {
    document.querySelector('.pop-up-box').style.visibility = 'hidden';
    document.querySelector('.pop-up').classList.remove('active');
}

// Check if first innings id over
var matchData = JSON.parse(localStorage.getItem('matchData'));
let i=0
function inningsOver(){
    let result = checkBattingTeam();
    let result2 = checkBowlingTeam();
    let team = result.team
    let team2 = result2.team
    if((team.totalWickets==matchData.noOfPlayers-1)|| (team.completedOvers==matchData.totalOvers)){
        // alert("Match over");

        // remove previous over runs and ball count
        overBalls.ballCount = 6;
        overBalls.over = [];
        localStorage.setItem('over', JSON.stringify(overBalls));
        if(!team2.halfInnings){
            innings_popup(team2.teamName,team.totalScore); 
            
           

        }

        /* alert("Match over"); */
        team.halfInnings = true;
        team.innings = 2;
        team2.innings = 1;

        localStorage.setItem(`team${result.number}`, JSON.stringify(team));  
        localStorage.setItem(`team${result2.number}`, JSON.stringify(team2));

        
       
        // innings_popup(team, runs)

        return true;
    }
    return false;
}


// Innings alert
function innings_popup(name, runs) {


    document.querySelector('.Team-name').innerText = name + " Needs " + (runs + 1) + " Runs In " + matchData.totalOvers * 6 + " Balls"
    document.querySelector('.pop-up-box').style.visibility = 'visible'
    document.querySelector('.Innings-Alert').classList.add('active');
   /*  document.querySelectorAll('.close')[4].addEventListener('click', function () {
        document.querySelector('.Innings-Alert').classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })*/
    // button for going nextinnings

    document.getElementById("nextInnings").addEventListener("click",() => {
        window.location.href="./selectPlayers.html"
        sessionStorage.clear();
    })
}
display();


//winning alert

var winnerflag = false;
// function for winnings alert
function checkWinner() {
    // getting variables from local storage
    var team1Data = JSON.parse(localStorage.getItem('team1'));
var team2Data = JSON.parse(localStorage.getItem('team2'));

var Team1 =  team1Data.teamName;
var Team2 =  team2Data.teamName;
var runsT1 =  team1Data.totalScore;
var runsT2 =  team2Data.totalScore;
var T1inningover =team1Data.halfInnings;
var T2inningover=team2Data.halfInnings;
// var overs1 =  team1Data.completedOvers;
// var overs2 =  team2Data.completedOvers;
// var wicketsT1 =  team1Data.totalWickets;
// var wicketsT2 = team2Data.totalWickets ;
// var totalOvers = matchData.totalOvers ;
// var noOfPlayers =matchData.noOfPlayers;


// condition for winner checking
    var winname = document.querySelector(".winning-team-name");
    // team1 & team2 innings over means checking which team has highest score
    if (T1inningover && T2inningover) {
        //if team1 has highest score 
        if (runsT1 > runsT2) {
            alert("Team 1 wins")
            winname.innerText = `${Team1}  Won The Match`;
            winnerflag = true;
            Winner();
            return true;
        }

        // if team2 highest score

        else if(runsT2 > runsT1) {
            alert("Team 2 wins")
            winname.innerText =  `${Team2}  Won The Match`;
            winnerflag = true;
            Winner();
            return true;
        }
        // if both team has same score
        else if(runsT1 == runsT2) {
            alert("Team 1 draw")
            winname.innerText = "Match Draw";
            winnerflag = true;
            Winner();
            return true;
        }
        return false;
    }

    // or team1 innings over and team2 chase before innings over
    else if (T1inningover && (runsT2 > runsT1)) {
        alert("Team 2 win")
        winname.innerText =  `${Team2}  Won The Match`;
        winnerflag = true;

        Winner();
        return true;
    }
    // or team2 innings over and team1 chase before innings over

    else if (T2inningover && (runsT1 > runsT2)) {
        alert("Team 1 wns")
        winname.innerText =  `${Team1}  Won The Match`;
        winnerflag = true;
        Winner();
        return true;
    }
    return false;
}

// function for display winner popup
function Winner() {
    document.querySelector('.pop-up-box').style.visibility = 'visible'
    document.querySelector('.Winner-Alert').classList.add('active');
    document.querySelectorAll('.close')[5].addEventListener('click', function () {
        document.querySelector('.Winner-Alert').classList.remove('active');
        document.querySelector('.pop-up-box').style.visibility = 'hidden'
    })

}
// button for going summary page
document.getElementById("summary").addEventListener("click", () => {
    window.location.href="summary.html"

})
