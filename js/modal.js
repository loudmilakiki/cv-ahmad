// JavaScript for handling modal behavior

// Function to open Mobily modal/////////////////////////////////////////////////////////////////////
function openMobily() {
    document.getElementById('mobily').style.display = 'block';
    showMobilySlide(currentMobilyIndex); // Show the first image
}

// Function to close Mobily modal
function closeMobily() {
    document.getElementById('mobily').style.display = 'none';
}

// Mobily Slide Index
let currentMobilyIndex = 0;

// Function to show specific Mobily slide
function showMobilySlide(index) {
    const mobilyImages = document.querySelectorAll('#mobily .modal-image');
    if (index >= mobilyImages.length) {
        currentMobilyIndex = 0;
    } else if (index < 0) {
        currentMobilyIndex = mobilyImages.length - 1;
    } else {
        currentMobilyIndex = index;
    }

    // Hide all images and show the selected one
    mobilyImages.forEach(img => (img.style.display = 'none'));
    mobilyImages[currentMobilyIndex].style.display = 'block';
}

// Function to change Mobily slide
function changeMobilySlide(step) {
    showMobilySlide(currentMobilyIndex + step);
}

//tower///////////////////////////////////////////////////////////////////////////////////////////////

// Function to open Tower modal
function openTower() {
    document.getElementById('tower').style.display = 'block';
    showTowerSlide(currentTowerIndex); // Show the first image
}

// Function to close Tower modal
function closeTower() {
    document.getElementById('tower').style.display = 'none';
}

// Tower Slide Index
let currentTowerIndex = 0;

// Function to show specific Tower slide
function showTowerSlide(index) {
    const towerImages = document.querySelectorAll('#tower .modal-image');
    if (index >= towerImages.length) {
        currentTowerIndex = 0;
    } else if (index < 0) {
        currentTowerIndex = towerImages.length - 1;
    } else {
        currentTowerIndex = index;
    }

    // Hide all images and show the selected one
    towerImages.forEach((img, idx) => img.style.display = idx === currentTowerIndex ? 'block' : 'none');
}

// Function to change Tower slide
function changeTowerSlide(step) {
    showTowerSlide(currentTowerIndex + step);
}





// pearl///////////////////////////////////////////////////////////////////


function openPearl() {
    document.getElementById('pearl').style.display = 'block';
    showPearlSlide(currentPearlIndex); // Show the first image
}

function closePearl() {
    document.getElementById('pearl').style.display = 'none';
}

let currentPearlIndex = 0;

function showPearlSlide(index) {
    const pearlImages = document.querySelectorAll('#pearl .modal-image');
    if (index >= pearlImages.length) {
        currentPearlIndex = 0;
    } else if (index < 0) {
        currentPearlIndex = pearlImages.length - 1;
    } else {
        currentPearlIndex = index;
    }

    pearlImages.forEach((img, idx) => img.style.display = idx === currentPearlIndex ? 'block' : 'none');
}

function changePearlSlide(step) {
    showPearlSlide(currentPearlIndex + step);
}


 //arwa //////////////////////////////////////////////////////////////////

 function openArwa() {
    document.getElementById('arwa').style.display = 'block';
    showArwaSlide(currentArwaIndex); // Show the first image
}

function closeArwa() {
    document.getElementById('arwa').style.display = 'none';
}

let currentArwaIndex = 0;

function showArwaSlide(index) {
    const arwaImages = document.querySelectorAll('#arwa .modal-image');
    if (index >= arwaImages.length) {
        currentArwaIndex = 0;
    } else if (index < 0) {
        currentArwaIndex = arwaImages.length - 1;
    } else {
        currentArwaIndex = index;
    }

    arwaImages.forEach((img, idx) => img.style.display = idx === currentArwaIndex ? 'block' : 'none');
}

function changeArwaSlide(step) {
    showArwaSlide(currentArwaIndex + step);
}

//tower-m//////////////////////////////////////////////////////////////////

function openTowerm() {
    document.getElementById('towerm').style.display = 'block';
    showTowermSlide(currentTowermIndex); // Show the first image
}

function closeTowerm() {
    document.getElementById('towerm').style.display = 'none';
}

let currentTowermIndex = 0;

function showTowermSlide(index) {
    const towermImages = document.querySelectorAll('#towerm .modal-image');
    if (index >= towermImages.length) {
        currentTowermIndex = 0;
    } else if (index < 0) {
        currentTowermIndex = arwaImages.length - 1;
    } else {
        currentTowermIndex = index;
    }

    towermImages.forEach((img, idx) => img.style.display = idx === currentTowermIndex ? 'block' : 'none');
}

function changeTowermSlide(step) {
    showTowermSlide(currentTowermIndex + step);
}

//alarab///////////////////////////////////////////////

function openAlarab() {
    document.getElementById('alarab').style.display = 'block';
    showAlarabSlide(currentAlarabIndex); // Show the first image
}

function closeAlarab() {
    document.getElementById('alarab').style.display = 'none';
}

let currentAlarabIndex = 0;

function showAlarabSlide(index) {
    const alarabImages = document.querySelectorAll('#alarab .modal-image');
    if (index >= alarabImages.length) {
        currentAlarabIndex = 0;
    } else if (index < 0) {
        currentAlarabIndex = alarabImages.length - 1;
    } else {
        currentAlarabIndex = index;
    }

    alarabImages.forEach((img, idx) => img.style.display = idx === currentAlarabIndex ? 'block' : 'none');
}

function changeAlarabSlide(step) {
    showAlarabSlide(currentAlarabIndex + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showMobilySlide(currentMobilyIndex);
    showTowerSlide(currentTowerIndex);
    showPearlSlide(currentPearlIndex);
    showArwaSlide(currentArwaIndex);
    showTowermSlide(currentTowermIndex);
});