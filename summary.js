// storing localstorage data in variables
var team1Data = JSON.parse(localStorage.getItem('team1'));
var team2Data = JSON.parse(localStorage.getItem('team2'));

var Team1 = team1Data.teamName;
var Team2 = team2Data.teamName;
var runsT1 = team1Data.totalScore;
var runsT2 = team2Data.totalScore;
var wicketsT1 = team1Data.totalWickets;
var wicketsT2 = team2Data.totalWickets;
var overs1 = team1Data.completedOvers;
var overs2 = team2Data.completedOvers;

// getting team1 player name,score,balls
var ts1Name = document.querySelector('#ts1Name');
var ts1Score = document.querySelector('#ts1Score');
var ts1Balls = document.querySelector('#ts1Balls');
var ts2Name = document.querySelector('#ts2Name');
var ts2Score = document.querySelector('#ts2Score');
var ts2Balls = document.querySelector('#ts2Balls');
var ts3Name = document.querySelector('#ts3Name');
var ts3Score = document.querySelector('#ts3Score');
var ts3Balls = document.querySelector('#ts3Balls');

// getting team2 player name,score,balls
var ts11Name = document.querySelector('#ts11Name');
var ts11Score = document.querySelector('#ts11Score');
var ts11Balls = document.querySelector('#ts11Balls');
var ts22Name = document.querySelector('#ts22Name');
var ts22Score = document.querySelector('#ts22Score');
var ts22Balls = document.querySelector('#ts22Balls');
var ts33Name = document.querySelector('#ts33Name');
var ts33Score = document.querySelector('#ts33Score');
var ts33Balls = document.querySelector('#ts33Balls');

// getting team1 player name,score,balls,wickets
var bs1Name = document.querySelector('#bs1Name');
var bs1Score = document.querySelector('#bs1Score');
var bs1Balls = document.querySelector('#bs1Balls');
var bs2Name = document.querySelector('#bs2Name');
var bs2Score = document.querySelector('#bs2Score');
var bs2Balls = document.querySelector('#bs2Balls');
var bs3Name = document.querySelector('#bs3Name');
var bs3Score = document.querySelector('#bs3Score');
var bs3Balls = document.querySelector('#bs3Balls');

// getting team2 player name,score,balls,wickets
var bs11Name = document.querySelector('#bs11Name');
var bs11Score = document.querySelector('#bs11Score');
var bs11Balls = document.querySelector('#bs11Balls');
var bs22Name = document.querySelector('#bs22Name');
var bs22Score = document.querySelector('#bs22Score');
var bs22Balls = document.querySelector('#bs22Balls');
var bs33Name = document.querySelector('#bs33Name');
var bs33Score = document.querySelector('#bs33Score');
var bs33Balls = document.querySelector('#bs33Balls');


// displaying team1 and team2 names
var teamName1Element = document.querySelector("#team1name");
teamName1Element.textContent = Team1;

var teamName2Element = document.querySelector('#team2name');
teamName2Element.textContent = Team2;

// displaying team1 and team2 total runs 
var team1Runs = document.querySelector("#team1Runs");
team1Runs.textContent = runsT1;

var team2Runs = document.querySelector("#team2Runs");
team2Runs.textContent = runsT2;

// displaying team1 and team2 total wickets gone
var team1Wickets = document.querySelector("#team1Wickets");
team1Wickets.textContent = wicketsT1;

var team2Wickets = document.querySelector("#team2Wickets");
team2Wickets.textContent = wicketsT2;

// displaying team1 and team2 total overs they play 
var team1Overs = document.querySelector("#team1Overs");
team1Overs.textContent = overs1;

var team2Overs = document.querySelector("#team2Overs");
team2Overs.textContent = overs2;



//top 3 run scorer
// getting empty array
let arr=[]
let a = team1Data.player
console.log(a);

//for loop pushing player runs 
for(let i=0; i<a.length; i++){
     let c = a[i].batting.battingRuns;
     console.log(i);
     console.log(c);
     arr.push(c);
     console.log(arr);
    //  arr.append(c);
    //   console.log(arr);

}

// getting variables to store top3 rums
    let firstLargest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;
    let thirdLargest = Number.MIN_SAFE_INTEGER;

    let firstIndex, secondIndex, thirdIndex;


// function for top3 run scorer in team1
function findLargestThreeNumbersWithIndices(arr) {
    // if total players less then 3 it does not work
    if (arr.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    
    // for loop for checkig battingruns for all players in team1 
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        // if condition for checking current number with firstlargest
        if (currentNumber > firstLargest) {
            // if it satisfies the all variables will update 
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = currentNumber;

            thirdIndex = secondIndex;
            secondIndex = firstIndex;
            firstIndex = i;
        // else if checking current number with secondlargest
        } else if (currentNumber > secondLargest) {
            // if it satisfies the all variables will update
            thirdLargest = secondLargest;
            secondLargest = currentNumber;

            thirdIndex = secondIndex;
            secondIndex = i;
         // else if checking current number with thiredlargest
        } else if (currentNumber > thirdLargest) {
             // if it satisfies the all variables will update
            thirdLargest = currentNumber;
            thirdIndex = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest, "Index:", firstIndex);
    // display top3 player name,runs and balls batted
    ts1Name.innerText=a[firstIndex].playerName;
    ts1Score.innerText=`${firstLargest}(${a[firstIndex].batting.ballsBatted})`;
   
    ts2Name.innerText=a[secondIndex].playerName;
    ts2Score.innerText=`${secondLargest}(${a[secondIndex].batting.ballsBatted})`;
    
    ts3Name.innerText=a[thirdIndex].playerName;
    ts3Score.innerText=`${thirdLargest}(${a[thirdIndex].batting.ballsBatted})`;
   

    // console.log("2. Number:", secondLargest, "Index:", secondIndex);
    // console.log("3. Number:", thirdLargest, "Index:", thirdIndex);
    // console.log(a[firstIndex].playerName,a[firstIndex].batting.ballsBatted)
    // console.log(a[secondIndex].playerName,a[secondIndex].batting.ballsBatted)
    // console.log(a[thirdIndex].playerName,a[thirdIndex].batting.ballsBatted)

}



findLargestThreeNumbersWithIndices(arr);

    
//  });

// getting empty array
let arr1=[]
let a1 = team2Data.player
// console.log(a);
//for loop pushing player runs 
for(let i=0; i<a1.length; i++){
     let c = a1[i].batting.battingRuns;
     console.log(i);
     console.log(c);
     arr1.push(c);
     console.log(arr1);
    //  arr.append(c);
    //  console.log(arr);

}
// getting variables to store top3 rums
    let firstLargest1 = Number.MIN_SAFE_INTEGER;
    let secondLargest1 = Number.MIN_SAFE_INTEGER;
    let thirdLargest1 = Number.MIN_SAFE_INTEGER;

    let firstIndex1, secondIndex1, thirdIndex1;
// function for top3 run scorer in team2
function findLargestThreeNumbersWithIndices1(arr1) {
    if (arr1.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    
    // for loop for checkig battingruns for all players in team2
    for (let i = 0; i < arr1.length; i++) {
        let currentNumber = arr1[i];
         // if condition for checking current number with firstlargest
        if (currentNumber > firstLargest1) {
            // if it satisfies the all variables will update
            thirdLargest1 = secondLargest1;
            secondLargest1 = firstLargest1;
            firstLargest1 = currentNumber;

            thirdIndex1 = secondIndex1;
            secondIndex1 = firstIndex1;
            firstIndex1 = i;
        // else if checking current number with secondlargest
        } else if (currentNumber > secondLargest1) {
            // if it satisfies the all variables will update
            thirdLargest1 = secondLargest1;
            secondLargest1 = currentNumber;

            thirdIndex1 = secondIndex1;
            secondIndex1 = i;
         // else if checking current number with thiredlargest
        } else if (currentNumber > thirdLargest1) {
            // if it satisfies the all variables will update
            thirdLargest1 = currentNumber;
            thirdIndex1 = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest1, "Index:", firstIndex1);
     // display top3 player name,runs and balls batted in team2
    ts11Name.innerText=a1[firstIndex1].playerName;
    ts11Score.innerText=`${firstLargest1}(${a1[firstIndex1].batting.ballsBatted})`;
   
    ts22Name.innerText=a1[secondIndex1].playerName;
    ts22Score.innerText=`${secondLargest1}(${a1[secondIndex1].batting.ballsBatted})`;
    
    ts33Name.innerText=a1[thirdIndex1].playerName;
    ts33Score.innerText=`${thirdLargest1}(${a1[thirdIndex1].batting.ballsBatted})`;
   

    console.log("2. Number:", secondLargest1, "Index:", secondIndex1);
    console.log("3. Number:", thirdLargest1, "Index:", thirdIndex1);
    console.log(a[firstIndex1].playerName,a[firstIndex1].batting.ballsBatted)
    console.log(a[secondIndex1].playerName,a[secondIndex1].batting.ballsBatted)
    console.log(a[thirdIndex1].playerName,a[thirdIndex1].batting.ballsBatted)

}


findLargestThreeNumbersWithIndices1(arr1);


// Bowling 

// getting empty array
let arr2=[]
let a2 = team1Data.player
// console.log(a);
//for loop pushing player wickets 
for(let i=0; i<a2.length; i++){
     let c = a2[i].bowling.wicket;
     console.log(i);
     console.log(c);
     arr2.push(c);
     console.log(arr2);
    //  arr.append(c);
    //  console.log(arr);

}
// getting variables to store top3 wickets
    let firstLargest2 = Number.MIN_SAFE_INTEGER;
    let secondLargest2 = Number.MIN_SAFE_INTEGER;
    let thirdLargest2 = Number.MIN_SAFE_INTEGER;

    let firstIndex2, secondIndex2, thirdIndex2;
// function for top3 wicket-taker in team1
function findLargestThreeNumbersWithIndices3(arr2) {
    if (arr2.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    // for loop for checkig wickets for all players in team1

    for (let i = 0; i < arr2.length; i++) {
        let currentNumber = arr2[i];
         // if condition for checking current number with firstlargest
        if (currentNumber > firstLargest2) {
            // if it satisfies the all variables will update
            thirdLargest2 = secondLargest2;
            secondLargest2 = firstLargest2;
            firstLargest2 = currentNumber;

            thirdIndex2 = secondIndex2;
            secondIndex2 = firstIndex2;
            firstIndex2 = i;
        // else if checking current number with secondlargest
        } else if (currentNumber > secondLargest2) {
            // if it satisfies the all variables will update
            thirdLargest2 = secondLargest2;
            secondLargest2 = currentNumber;

            thirdIndex2 = secondIndex2;
            secondIndex2 = i;
         // else if checking current number with thiredlargest
        } else if (currentNumber > thirdLargest2) {
            // if it satisfies the all variables will update
            thirdLargest2 = currentNumber;
            thirdIndex2 = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest2, "Index:", firstIndex2);
     // display top3 wicket-taker name,runs and balls boweled and wickets in team1
    bs1Name.innerText=a2[firstIndex2].playerName;
    bs1Score.innerText=firstLargest2;
    bs1Balls.innerText=`${a2[firstIndex2].bowling.bowlRuns}(${a2[firstIndex2].bowling.over})`;
   
    bs2Name.innerText=a2[secondIndex2].playerName;
    bs2Score.innerText=secondLargest2;
    bs2Balls.innerText=`${a2[secondIndex2].bowling.bowlRuns}(${a2[secondIndex2].bowling.over})`;
    
    bs3Name.innerText=a2[thirdIndex2].playerName;
    bs3Score.innerText=thirdLargest2;
    bs3Balls.innerText=`${a2[thirdIndex2].bowling.bowlRuns}(${a2[thirdIndex2].bowling.over})`;
   

    // console.log("2. Number:", secondLargest, "Index:", secondIndex);
    // console.log("3. Number:", thirdLargest, "Index:", thirdIndex);
    // console.log(a[firstIndex].playerName,a[firstIndex].batting[0].ballsBatted)
    // console.log(a[secondIndex].playerName,a[secondIndex].batting[0].ballsBatted)
    // console.log(a[thirdIndex].playerName,a[thirdIndex].batting[0].ballsBatted)

}



findLargestThreeNumbersWithIndices3(arr2);

// getting empty array
let arr3=[]
let a3 = team2Data.player
// console.log(a);
//for loop pushing player wickets 
for(let i=0; i<a3.length; i++){
     let c = a3[i].bowling.wicket;
     console.log(i);
     console.log(c);
     arr3.push(c);
     console.log(arr3);
    //  arr.append(c);
    //  console.log(arr);

}
    // getting variables to store top3 wickets
    let firstLargest3 = Number.MIN_SAFE_INTEGER;
    let secondLargest3 = Number.MIN_SAFE_INTEGER;
    let thirdLargest3 = Number.MIN_SAFE_INTEGER;

    let firstIndex3, secondIndex3, thirdIndex3;
// function for top3 wicket-taker in team2
function findLargestThreeNumbersWithIndices4(arr3) {
    if (arr3.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    // for loop for checkig wickets for all players in team2

    for (let i = 0; i < arr3.length; i++) {
        let currentNumber = arr3[i];
        // if condition for checking current number with firstlargest
        if (currentNumber > firstLargest3) {
             // if it satisfies the all variables will update
            thirdLargest3 = secondLargest3;
            secondLargest3 = firstLargest3;
            firstLargest3 = currentNumber;

            thirdIndex3 = secondIndex3;
            secondIndex3 = firstIndex3;
            firstIndex3 = i;
        // else if checking current number with secondlargest
        } else if (currentNumber > secondLargest3) {
             // if it satisfies the all variables will update
            thirdLargest3 = secondLargest3;
            secondLargest3 = currentNumber;

            thirdIndex3 = secondIndex3;
            secondIndex3 = i;
        // else if checking current number with thiredlarges
        } else if (currentNumber > thirdLargest3) {
             // if it satisfies the all variables will update
            thirdLargest3 = currentNumber;
            thirdIndex3 = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest3, "Index:", firstIndex3);
     // display top3 wicket-taker name,runs and balls boweled and wickets in team1
    bs11Name.innerText=a3[firstIndex3].playerName;
    bs11Score.innerText=firstLargest3;
    bs11Balls.innerText=`${a3[firstIndex3].bowling.bowlRuns}(${a3[firstIndex3].bowling.over})`;
   
    bs22Name.innerText=a3[secondIndex3].playerName;
    bs22Score.innerText=secondLargest3;
    bs22Balls.innerText=`${a3[secondIndex3].bowling.bowlRuns}(${a3[secondIndex3].bowling.over})`;
    
    bs33Name.innerText=a3[thirdIndex3].playerName;
    bs33Score.innerText=thirdLargest3;
    bs33Balls.innerText=`${a3[thirdIndex3].bowling.bowlRuns}(${a3[thirdIndex3].bowling.over})`;
   

    // console.log("2. Number:", secondLargest, "Index:", secondIndex);
    // console.log("3. Number:", thirdLargest, "Index:", thirdIndex);
    // console.log(a[firstIndex].playerName,a[firstIndex].batting[0].ballsBatted)
    // console.log(a[secondIndex].playerName,a[secondIndex].batting[0].ballsBatted)
    // console.log(a[thirdIndex].playerName,a[thirdIndex].batting[0].ballsBatted)

}



findLargestThreeNumbersWithIndices4(arr3);

// button for going next-match
document.getElementById("newmatch").addEventListener("click", () => {
    window.location.href="index.html"

})
// button for going overall summary
document.getElementById("overall").addEventListener("click", () => {
    window.location.href="Finalsummary.html"

})

// getting variables to display the winning team name
var winElement = document.querySelector("#win");

// if team1 has high score it will display
if(runsT1>runsT2){
    winElement.innerText=`${Team1} won the match`;

// if team2 has high score it will display
}else if(runsT1<runsT2){
    winElement.innerText=`${Team2} won the match`;
// if both team same score it will display
}else{
    winElement.innerText= "Match Draw";

}