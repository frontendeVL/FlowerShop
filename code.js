const bouquetImage = document.getElementById('bouquetImage');
const nextBouquetBtn = document.getElementById('nextBouquetBtn');

const bouquetSources = [
    'imgs/pinkP.png', 
    'imgs/photo_2025-06-01_17-05-06-removebg-preview.png',
    'imgs/avasflowers-white-lily-bouquet-farm-fresh-15-blooms-with-vase-15481-removebg-preview.png',
    'imgs/tulips.png',
    'imgs/photo_2025-06-01_17-07-04-removebg-preview.png'
];

let currentBouquetIndex = 0; 

function showNextBouquet() {
    currentBouquetIndex++;
    if (currentBouquetIndex >= bouquetSources.length) {
        currentBouquetIndex = 0;
    }

    bouquetImage.style.opacity = '0';
    bouquetImage.style.transform = 'scale(0.95)';

    setTimeout(() => {
        bouquetImage.src = bouquetSources[currentBouquetIndex];
        bouquetImage.style.opacity = '1';
        bouquetImage.style.transform = 'scale(1)';
    }, 300);
}

nextBouquetBtn.addEventListener('click', showNextBouquet);
bouquetImage.src = bouquetSources[currentBouquetIndex];

const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopupBtn');
const discountButton = document.querySelector('#popupContent .popup-btn'); 

function showPopup() {
    popupOverlay.classList.add('active'); 
}

function hidePopup() {
    popupOverlay.classList.remove('active');
}

setTimeout(showPopup, 20000);

closePopupBtn.addEventListener('click', hidePopup);

popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        hidePopup();
    }
});

discountButton.addEventListener('click', () => {
    alert('Congratulations! Your secret code is: PETALIA21');
    hidePopup();
});