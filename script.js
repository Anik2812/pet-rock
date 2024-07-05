const petElement = document.getElementById('pet');
const statusElement = document.getElementById('status');
const feedButton = document.getElementById('feedButton');
const playButton = document.getElementById('playButton');

let pet = {
    happiness: 0,
    hunger: 0,
    evolutionStage: 0
};

const updateStatus = () => {
    if (pet.happiness > 10) {
        pet.evolutionStage = 1;
        petElement.style.backgroundColor = '#FFD700'; // Golden color for first evolution
    }
    if (pet.happiness > 20) {
        pet.evolutionStage = 2;
        petElement.style.backgroundColor = '#00BFFF'; // Blue color for second evolution
    }
    if (pet.happiness > 30) {
        pet.evolutionStage = 3;
        petElement.style.backgroundColor = '#FF69B4'; // Pink color for third evolution
    }

    let statusText = `Happiness: ${pet.happiness}, Hunger: ${pet.hunger}.`;
    if (pet.evolutionStage === 1) {
        statusText += " Your pet rock is evolving into a cute animal!";
    } else if (pet.evolutionStage === 2) {
        statusText += " Your pet has evolved into a more advanced form!";
    } else if (pet.evolutionStage === 3) {
        statusText += " Your pet is at its final stage of evolution!";
    }
    statusElement.textContent = statusText;
};

feedButton.addEventListener('click', () => {
    pet.happiness += 2;
    pet.hunger -= 1;
    updateStatus();
});

playButton.addEventListener('click', () => {
    pet.happiness += 1;
    updateStatus();
});

// Initial status update
updateStatus();
