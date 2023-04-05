// navigation (phases);
let activeIndex = 0;

const phase = document.getElementsByClassName("phase");

const phasing = () => {
    const nextIndex = activeIndex + 1 <= phase.length - 1 ? activeIndex + 1 : 1;

    const currentPhase = document.querySelector(`[data-index="${activeIndex}"]`),
    nextPhase = document.querySelector(`[data-index="${nextIndex}"]`);

    currentPhase.dataset.status = "after";
    nextPhase.dataset.status = "active";

    activeIndex = nextIndex;
}


// landing page, carousel;
let slideIndex = 0;
showSlides();

// autoplay slideshow;
function showSlides() {
  	let i;

  	let slides = document.getElementsByClassName("mySlides");

  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
  	}
  	slideIndex++;
  	if (slideIndex > slides.length) {slideIndex = 1}
  	slides[slideIndex-1].style.display = "block";
  	setTimeout(showSlides, 2000); // Change image every 3 seconds;
}


// picking phase, carousel;
let slideIndex2 = 0;
showSlides2();

// autoplay slideshow;
function showSlides2() {
  	let i;

  	let slides = document.getElementsByClassName("mySlidesComp");

  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
  	}
  	slideIndex2++;
  	if (slideIndex2 > slides.length) {slideIndex2 = 1}
  	slides[slideIndex2-1].style.display = "block";
  	setTimeout(showSlides2, 1000); // Change image every 1 second;
}


let result;
const myArray = ['rock', 'paper', 'scissors']

// random computer picking;
function getComputerChoice(arr) {

    // random index value;
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item from array;
    const item =arr[randomIndex];
    return item;
}

// compare values to know who is the winner;
let moveChoice;
let playerSelection;
const moveBtn = document.querySelectorAll(".move");
moveBtn.forEach((button) => {
    button.addEventListener('click', () => {
        moveChoice = button.value;
        console.log(moveChoice);
    });
});

function playRound(playerSelection, computerSelection) {
    phasing();
    playerSelection = moveChoice;
    computerSelection = getComputerChoice(myArray);
    //alert(`${playerSelection} vs ${computerSelection}`);

    // pick/game conditions;
    if (computerSelection == playerSelection) {
        result = "It's a draw!";
    // Losing conditions;
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
        result = `You lose! ${computerSelection} beat ${playerSelection}`;
    // winning conditions;    
    } else {
        result = `You Won! ${playerSelection} beat ${computerSelection}`;
    }
    //alert(`${p} vs ${c}`);
    //alert(result);
}

const lockBtn = document.querySelector(".lock-button");
lockBtn.addEventListener('click', playRound);