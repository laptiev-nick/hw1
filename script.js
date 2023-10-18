const currentImage = document.querySelector('.currentImage');

const chooseRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const showImage = (count) => {
    currentImage.src = `./images/${chooseRandomNumber(1, count + 1)}.png`;
}

showImage(9);