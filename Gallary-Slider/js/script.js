var clickableImage = Array.from(document.querySelectorAll('.card>img'));
var layoutModel = document.querySelector('.lay');
var imageSlider = document.querySelector('#layoutImage');
var close = document.querySelector('.btn-close');
var prevArrow = document.querySelector('.leftArrow');
var nextArrow = document.querySelector('.nextArrow');
var currentImageIndex = 0; // Keeps track of the index of the currently displayed image.


for( var i = 0; i < clickableImage.length; i++){
    clickableImage[i].addEventListener('click', function()
    {
        layoutModel.style.display = 'flex';
        imageSlider.src = this.src;
        // Updates the currentImageIndex to the index of the clicked image, used for navigation.
        currentImageIndex = clickableImage.indexOf(this);
    });
}

// Add event listeners for close button and modal background
function closeModel() {
    layoutModel.style.display = 'none';
}

close.addEventListener('click', closeModel);
layoutModel.addEventListener('click', (e) => {
    if (e.target === layoutModel) {
        closeModel();
    }
});

// Add event listeners for navigation arrows and Show next image
function nextImage() {
    currentImageIndex++;
    // Wraps around to the first image if the index exceeds the length of the array.
    if (currentImageIndex == clickableImage.length) {
        currentImageIndex = 0;
    }
    imageSlider.src = clickableImage[currentImageIndex].src;
}

nextArrow .addEventListener('click', nextImage);


// Show previous image
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        // if there are 5 images, the index will be set to 4.
        currentImageIndex = clickableImage.length - 1;
    }
    imageSlider.src = clickableImage[currentImageIndex].src;
}

prevArrow.addEventListener('click', prevImage);
