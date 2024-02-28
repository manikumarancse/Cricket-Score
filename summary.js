var team1Data = JSON.parse(localStorage.getItem('team1'));
var team2Data = JSON.parse(localStorage.getItem('team2'));

var Team1 = team1Data.teamName;
var Team2 = team2Data.teamName;
var runsT1 = team1Data.totalScore;
var runsT2 = team2Data.totalScore;
var wicketsT1 = team1Data.totalWickets4 ;
var wicketsT2 = team2Data.totalWickets;
var overs1 = team1Data.completedOvers;
var overs2 = team2Data.completedOvers;


var ts1Name = document.querySelector('#ts1Name');
var ts1Score = document.querySelector('#ts1Score');
var ts1Balls = document.querySelector('#ts1Balls');
var ts2Name = document.querySelector('#ts2Name');
var ts2Score = document.querySelector('#ts2Score');
var ts2Balls = document.querySelector('#ts2Balls');
var ts3Name = document.querySelector('#ts3Name');
var ts3Score = document.querySelector('#ts3Score');
var ts3Balls = document.querySelector('#ts3Balls');


var ts11Name = document.querySelector('#ts11Name');
var ts11Score = document.querySelector('#ts11Score');
var ts11Balls = document.querySelector('#ts11Balls');
var ts22Name = document.querySelector('#ts22Name');
var ts22Score = document.querySelector('#ts22Score');
var ts22Balls = document.querySelector('#ts22Balls');
var ts33Name = document.querySelector('#ts33Name');
var ts33Score = document.querySelector('#ts33Score');
var ts33Balls = document.querySelector('#ts33Balls');


var bs1Name = document.querySelector('#bs1Name');
var bs1Score = document.querySelector('#bs1Score');
var bs1Balls = document.querySelector('#bs1Balls');
var bs2Name = document.querySelector('#bs2Name');
var bs2Score = document.querySelector('#bs2Score');
var bs2Balls = document.querySelector('#bs2Balls');
var bs3Name = document.querySelector('#bs3Name');
var bs3Score = document.querySelector('#bs3Score');
var bs3Balls = document.querySelector('#bs3Balls');

var bs11Name = document.querySelector('#bs11Name');
var bs11Score = document.querySelector('#bs11Score');
var bs11Balls = document.querySelector('#bs11Balls');
var bs22Name = document.querySelector('#bs22Name');
var bs22Score = document.querySelector('#bs22Score');
var bs22Balls = document.querySelector('#bs22Balls');
var bs33Name = document.querySelector('#bs33Name');
var bs33Score = document.querySelector('#bs33Score');
var bs33Balls = document.querySelector('#bs33Balls');



var teamName1Element = document.querySelector("#team1name");
teamName1Element.textContent = Team1;

var teamName2Element = document.querySelector('#team2name');
teamName2Element.textContent = Team2;

var team1Runs = document.querySelector("#team1Runs");
team1Runs.textContent = runsT1;

var team2Runs = document.querySelector("#team2Runs");
team2Runs.textContent = runsT2;

var team1Wickets = document.querySelector("#team1Wickets");
team1Wickets.textContent = wicketsT1;

var team2Wickets = document.querySelector("#team2Wickets");
team2Wickets.textContent = wicketsT2;

var team1Overs = document.querySelector("#team1Overs");
team1Overs.textContent = overs1;

var team2Overs = document.querySelector("#team2Overs");
team2Overs.textContent = overs2;



//top 3 run scorer
let arr=[]
let a = team1Data.player
console.log(a);

for(let i=0; i<a.length; i++){
     let c = a[i].batting.battingRuns;
     console.log(i);
     console.log(c);
     arr.push(c);
     console.log(arr);
    //  arr.append(c);
    //   console.log(arr);

}
// a.forEach( () => {
//     let c = a[0].batting[0].battingRuns;
//     console.log(c);


// let arr1 = [15,20,101,4,2,156,66,87,22,1,3]

// let large1 = 0;
// let large2 = 0;
// let large3 = 0;
// let i=0;
let firstLargest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;
    let thirdLargest = Number.MIN_SAFE_INTEGER;

    let firstIndex, secondIndex, thirdIndex;

function findLargestThreeNumbersWithIndices(arr) {
    if (arr.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (currentNumber > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = currentNumber;

            thirdIndex = secondIndex;
            secondIndex = firstIndex;
            firstIndex = i;
        } else if (currentNumber > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = currentNumber;

            thirdIndex = secondIndex;
            secondIndex = i;
        } else if (currentNumber > thirdLargest) {
            thirdLargest = currentNumber;
            thirdIndex = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest, "Index:", firstIndex);
    ts1Name.innerText=a[firstIndex].playerName;
    ts1Score.innerText=`${firstLargest}(${a[firstIndex].batting.ballsBatted})`;
   
    ts2Name.innerText=a[secondIndex].playerName;
    ts2Score.innerText=`${secondLargest}(${a[secondIndex].batting.ballsBatted})`;
    
    ts3Name.innerText=a[thirdIndex].playerName;
    ts3Score.innerText=`${thirdLargest}(${a[thirdIndex].batting.ballsBatted})`;
   

    console.log("2. Number:", secondLargest, "Index:", secondIndex);
    console.log("3. Number:", thirdLargest, "Index:", thirdIndex);
    console.log(a[firstIndex].playerName,a[firstIndex].batting.ballsBatted)
    console.log(a[secondIndex].playerName,a[secondIndex].batting.ballsBatted)
    console.log(a[thirdIndex].playerName,a[thirdIndex].batting.ballsBatted)

}



findLargestThreeNumbersWithIndices(arr);

    
//  });


let arr1=[]
let a1 = team2Data.player
// console.log(a);

for(let i=0; i<a1.length; i++){
     let c = a1[i].batting.battingRuns;
     console.log(i);
     console.log(c);
     arr1.push(c);
     console.log(arr1);
    //  arr.append(c);
    //  console.log(arr);

}
let firstLargest1 = Number.MIN_SAFE_INTEGER;
    let secondLargest1 = Number.MIN_SAFE_INTEGER;
    let thirdLargest1 = Number.MIN_SAFE_INTEGER;

    let firstIndex1, secondIndex1, thirdIndex1;

function findLargestThreeNumbersWithIndices1(arr1) {
    if (arr1.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    

    for (let i = 0; i < arr1.length; i++) {
        let currentNumber = arr1[i];

        if (currentNumber > firstLargest1) {
            thirdLargest1 = secondLargest1;
            secondLargest1 = firstLargest1;
            firstLargest1 = currentNumber;

            thirdIndex1 = secondIndex1;
            secondIndex1 = firstIndex1;
            firstIndex1 = i;
        } else if (currentNumber > secondLargest1) {
            thirdLargest1 = secondLargest1;
            secondLargest1 = currentNumber;

            thirdIndex1 = secondIndex1;
            secondIndex1 = i;
        } else if (currentNumber > thirdLargest1) {
            thirdLargest1 = currentNumber;
            thirdIndex1 = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest1, "Index:", firstIndex1);
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

let arr2=[]
let a2 = team1Data.player
// console.log(a);

for(let i=0; i<a2.length; i++){
     let c = a2[i].bowling.wicket;
     console.log(i);
     console.log(c);
     arr2.push(c);
     console.log(arr2);
    //  arr.append(c);
    //  console.log(arr);

}
let firstLargest2 = Number.MIN_SAFE_INTEGER;
    let secondLargest2 = Number.MIN_SAFE_INTEGER;
    let thirdLargest2 = Number.MIN_SAFE_INTEGER;

    let firstIndex2, secondIndex2, thirdIndex2;

function findLargestThreeNumbersWithIndices3(arr2) {
    if (arr2.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    

    for (let i = 0; i < arr2.length; i++) {
        let currentNumber = arr2[i];

        if (currentNumber > firstLargest2) {
            thirdLargest2 = secondLargest2;
            secondLargest2 = firstLargest2;
            firstLargest2 = currentNumber;

            thirdIndex2 = secondIndex2;
            secondIndex2 = firstIndex2;
            firstIndex2 = i;
        } else if (currentNumber > secondLargest2) {
            thirdLargest2 = secondLargest2;
            secondLargest2 = currentNumber;

            thirdIndex2 = secondIndex2;
            secondIndex2 = i;
        } else if (currentNumber > thirdLargest2) {
            thirdLargest2 = currentNumber;
            thirdIndex2 = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest2, "Index:", firstIndex2);
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














let arr3=[]
let a3 = team2Data.player
// console.log(a);

for(let i=0; i<a3.length; i++){
     let c = a3[i].bowling.wicket;
     console.log(i);
     console.log(c);
     arr3.push(c);
     console.log(arr3);
    //  arr.append(c);
    //  console.log(arr);

}
let firstLargest3 = Number.MIN_SAFE_INTEGER;
    let secondLargest3 = Number.MIN_SAFE_INTEGER;
    let thirdLargest3 = Number.MIN_SAFE_INTEGER;

    let firstIndex3, secondIndex3, thirdIndex3;

function findLargestThreeNumbersWithIndices4(arr3) {
    if (arr3.length < 3) {
        console.log("Array has less than 3 elements");
        return;
    }

    

    for (let i = 0; i < arr3.length; i++) {
        let currentNumber = arr3[i];

        if (currentNumber > firstLargest3) {
            thirdLargest3 = secondLargest3;
            secondLargest3 = firstLargest3;
            firstLargest3 = currentNumber;

            thirdIndex3 = secondIndex3;
            secondIndex3 = firstIndex3;
            firstIndex3 = i;
        } else if (currentNumber > secondLargest3) {
            thirdLargest3 = secondLargest3;
            secondLargest3 = currentNumber;

            thirdIndex3 = secondIndex3;
            secondIndex3 = i;
        } else if (currentNumber > thirdLargest3) {
            thirdLargest3 = currentNumber;
            thirdIndex3 = i;
        }
    }

    console.log("Largest 3 numbers and their indices:");
    console.log("1. Number:", firstLargest3, "Index:", firstIndex3);
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


document.getElementById("newmatch").addEventListener("click", () => {
    window.location.href="index.html"

})
document.getElementById("overall").addEventListener("click", () => {
    window.location.href="Finalsummary.html"

})


var winElement = document.querySelector("#win");

if(runsT1>runsT2){
    winElement.innerText=`${Team1} won the match`;


}else if(runsT1<runsT2){
    winElement.innerText=`${Team2} won the match`;

}else{
    winElement.innerText= "Match Draw";

}