const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImg = document.getElementById('bear-img');
const question = document.getElementById('question');
const buttonsDiv = document.getElementById('buttons');

let noCount = 0;

const phrases = [
    "No",
    "Are you sure?",
    "Think again!",
    "Surely not?",
    "You might regret this!",
    "Have a heart!",
    "Don't be so cold!",
    "Wouldn't you reconsider?",
    "Are you absolutely certain?"
];

noBtn.addEventListener('click', () => {
    noCount++;

    // 1. Défilement des images de img1 à img9
    const imgNumber = Math.min(noCount + 1, 9);
    bearImg.src = `img${imgNumber}.jpg`;

    // 2. Texte du bouton rouge
    if (noCount < phrases.length) {
        noBtn.innerText = phrases[noCount];
    }

    // 3. Croissance du bouton "Yes" limitée pour ne pas dépasser
    const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    if (currentFontSize < 100) {
        const newSize = currentFontSize + 12;
        yesBtn.style.fontSize = `${newSize}px`;
        
        const currentPaddingY = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        const currentPaddingX = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);
        yesBtn.style.padding = `${currentPaddingY + 5}px ${currentPaddingX + 10}px`;
    }

    // 4. Réduction légère du bouton "No"
    const noScale = Math.max(0.6, 1 - (noCount * 0.05));
    noBtn.style.transform = `scale(${noScale})`;
});

// Écran final après le clic sur "Yes"
yesBtn.addEventListener('click', () => {
    // Changement du texte avec ton message personnalisé
    question.innerHTML = "Let me plan... <br>Promise, you will enjoy it! ❤️";
    question.classList.add('success-text'); // Ajoute l'animation de pulsation
    
    // Changement pour l'image img0.jpg
    bearImg.src = "img0.jpg"; 
    
    // Cacher les boutons
    buttonsDiv.style.display = "none";
});