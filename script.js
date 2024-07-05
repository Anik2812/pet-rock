const petElement = document.getElementById('pet');
const petImage = document.getElementById('petImage');
const statusElement = document.getElementById('status');
const feedButton = document.getElementById('feedButton');
const playButton = document.getElementById('playButton');
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const feedSound = document.getElementById('feedSound');
const playSound = document.getElementById('playSound');

let pet = {
    happiness: 0,
    hunger: 0,
    evolutionStage: 0
};

const updatePetImage = () => {
    switch (pet.evolutionStage) {
        case 0:
            petImage.src = 'rock.png';
            break;
        case 1:
            petImage.src = 'cute_animal.png';
            break;
        case 2:
            petImage.src = 'advanced_animal.png';
            break;
        case 3:
            petImage.src = 'final_animal.png';
            break;
    }
};

const updateStatus = () => {
    if (pet.happiness > 10) {
        pet.evolutionStage = 1;
    }
    if (pet.happiness > 20) {
        pet.evolutionStage = 2;
    }
    if (pet.happiness > 30) {
        pet.evolutionStage = 3;
    }

        let statusText = `Happiness: ${pet.happiness}, Hunger: ${pet.hunger}.`;
    if (pet.evolutionStage === 1) {
        statusText += " Your pet rock is starting to look cute!";
    } else if (pet.evolutionStage === 2) {
        statusText += " Your pet is getting even more advanced!";
    } else if (pet.evolutionStage === 3) {
        statusText += " Your pet has evolved to the final stage!";
    }

    statusElement.textContent = statusText;
};

const feedPet = () => {
    pet.happiness += 5;
    pet.hunger -= 3;
    feedSound.play();
    updatePetImage();
    updateStatus();
    createSparkles();
};

const playWithPet = () => {
    pet.happiness += 10;
    pet.hunger -= 5;
    playSound.play();
    updatePetImage();
    updateStatus();
    createConfetti();
};

const toggleMusic = () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = "Stop Music";
    } else {
        backgroundMusic.pause();
        musicButton.textContent = "Play Music";
    }
};

const createSparkles = () => {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        petElement.appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 500);
    }
};

const createConfetti = () => {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.top = `${Math.random() * 100}%`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        petElement.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
};

feedButton.addEventListener('click', feedPet);
playButton.addEventListener('click', playWithPet);
musicButton.addEventListener('click', toggleMusic);

// Initialize pet
updatePetImage();
updateStatus();
