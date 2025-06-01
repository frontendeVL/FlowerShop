// 1. Отримуємо посилання на елементи HTML
const bouquetImage = document.getElementById('bouquetImage');
const nextBouquetBtn = document.getElementById('nextBouquetBtn');

// 2. Створюємо масив з шляхами до всіх букетів
// !!! ВАЖЛИВО: Заміни 'imgs/peonies.png' та інші на РЕАЛЬНІ шляхи до твоїх зображень
// Переконайся, що 'imgs/pinkP.png' - це дійсно шлях до твоїх півоній.
const bouquetSources = [
    'imgs/pinkP.png', 
    'imgs/photo_2025-06-01_17-05-06-removebg-preview.png',
    'imgs/avasflowers-white-lily-bouquet-farm-fresh-15-blooms-with-vase-15481-removebg-preview.png',
    'imgs/photo_2025-06-01_17-07-02-removebg-preview.png',
    'imgs/photo_2025-06-01_17-07-04-removebg-preview.png'
];

// 3. Змінна для відстеження поточного букета
let currentBouquetIndex = 0; // Починаємо з першого букета (півонії)

// 4. Функція, яка буде виконуватися при натисканні кнопки
function showNextBouquet() {
    // Збільшуємо індекс для переходу до наступного букета
    currentBouquetIndex++;

    // Якщо індекс вийшов за межі масиву, повертаємо його до 0 (півонії)
    if (currentBouquetIndex >= bouquetSources.length) {
        currentBouquetIndex = 0;
    }

    // Додаємо плавний перехід (тимчасово робимо прозорим, потім змінюємо src і повертаємо видимість)
    bouquetImage.style.opacity = '0';
    bouquetImage.style.transform = 'scale(0.95)'; // Трохи зменшуємо для ефекту

    setTimeout(() => {
        bouquetImage.src = bouquetSources[currentBouquetIndex];
        bouquetImage.style.opacity = '1';
        bouquetImage.style.transform = 'scale(1)';
    }, 300); // Час має відповідати transition в CSS
}

// 5. Прив'язуємо функцію до кнопки
nextBouquetBtn.addEventListener('click', showNextBouquet);

// Опціонально: переконуємося, що початковий букет відображається при завантаженні сторінки.
// Хоча він вже вказаний в HTML, це може бути корисно, якщо ви захочете змінити його динамічно.
bouquetImage.src = bouquetSources[currentBouquetIndex];