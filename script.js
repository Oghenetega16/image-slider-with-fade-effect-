(function (){
    "use strict";

    const imageContainer = ['./images/image1.png', './images/image2.png', './images/image3.png', './images/image4.png'];
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    let currentImage = 0;

    // creates a new div element to overlay
    const container = document.getElementById('content');
    
    next.addEventListener('click', (event) => {
        event.preventDefault();
        // increase the currentImage count
        currentImage++;
        // write a condition to check when the img reaches the last
        if (currentImage > (imageContainer.length - 1)) {
            currentImage = 0;
        }
        
        swapImage();
    });

    prev.addEventListener('click', (event) => {
        event.preventDefault();
        // decrease the currentImage count
        currentImage--;
        // write a condition to check when the img reaches the last
        if (currentImage < 0) {
            currentImage = imageContainer.length - 1;
        }

        swapImage();
    });

    function swapImage() {
        // creates a new img element for the container
        const newSlide = document.createElement('img');
        // link the img to a source
        newSlide.src = imageContainer[currentImage];
        // add the animation
        newSlide.className = 'fadein-img';
        // put the img in the container created
        container.appendChild(newSlide);

        // prevents images from stacking
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }
}());
