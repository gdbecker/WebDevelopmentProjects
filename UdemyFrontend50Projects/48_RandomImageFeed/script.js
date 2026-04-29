const container = document.querySelector('.project-container');
const unsplashurl = 'https://images.unsplash.com/photo-';
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    const randomID = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/${getRandomNumber()}/${getRandomNumber()}?random=${i}`;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}