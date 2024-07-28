// JavaScript for handling modal behavior

// Function to open Mobily modal
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

// Initialize display
document.addEventListener('DOMContentLoaded', () => {
    showMobilySlide(currentMobilyIndex);
    showTowerSlide(currentTowerIndex);
});


// pearl

// Function to open Tower modal
function openPearl() {
    document.getElementById('pearl').style.display = 'block';
    showTowerSlide(currentPearlIndex); // Show the first image
}

// Function to close Tower modal
function closePearl() {
    document.getElementById('pearl').style.display = 'none';
}

// Tower Slide Index
let currentPearlIndex = 0;

// Function to show specific Tower slide
function showPearlSlide(index) {
    const pearlImages = document.querySelectorAll('#pearl .modal-image');
    if (index >= pearlImages.length) {
        currentPearlIndex = 0;
    } else if (index < 0) {
        currentPearlIndex = pearlImages.length - 1;
    } else {
        currentPearlIndex = index;
    }

    // Hide all images and show the selected one
    pearlImages.forEach((img, idx) => img.style.display = idx === currentPearlIndex ? 'block' : 'none');
}

// Function to change Tower slide
function changePearlSlide(step) {
    showPearlSlide(currentPearlIndex + step);
}

// Initialize display
document.addEventListener('DOMContentLoaded', () => {
    showMobilySlide(currentMobilyIndex);
    showTowerSlide(currentTowerIndex);
    showPearlSlide(currentPearlIndex);
});
