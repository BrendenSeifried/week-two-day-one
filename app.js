// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
//const hidingPlaces = ['tree', 'shed', 'boulder'];
const hidingPlaces = ['shed', 'tree', 'boulder'];


let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');

   /* if (correctSpot === 0) {
        shedContainer.classList.add('face');
       // console.log('shed');
        correctGuesses++;

    } else if (hidingSpot === correctSpot) {
        treeContainer.classList.add('face');
       // console.log('tree');

    } else if (hidingSpot === correctSpot)
        boulderContainer.classList.add('face');
   // console.log('working');*/

});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');

   /* if (hidingSpot === 1) {
        treeContainer.classList.add('face');
       // console.log('shed');
        correctGuesses++;

    } else if (hidingSpot === 0) {
        shedContainer.classList.add('face');
       // console.log('tree');

    } else if (hidingSpot === 2)
        boulderContainer.classList.add('face');
   // console.log('working');*/
    
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');

   /* if (hidingSpot === 2) {
        boulderContainer.classList.add('face');
       // console.log('shed');
        correctGuesses++;

    } else if (hidingSpot === 0) {
        shedContainer.classList.add('face');
       // console.log('tree');

    } else if (hidingSpot === 1)
        treeContainer.classList.add('face');*/
});

//function handleGuess(userGuess, correctSpot) 
function handleGuess(correctSpot, userGuess) {
    // reset the styles
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then increment the guesses
    totalGuesses++;
   // totalEl.textContent = totalGuesses;
   // winsEl.textContent = correctGuesses;
    //lossesEl.textContent = totalGuesses - correctGuesses;

    // then grab the appropriate container element for the correct guess from the DOM



    if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
        console.log('shed');
    

    } else if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
        console.log('tree');

    } else if (correctSpot === 'boulder')
        boulderContainer.classList.add('face');
    console.log('boulder');

    if (userGuess === correctSpot) {
        correctGuesses++;
    } 

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
