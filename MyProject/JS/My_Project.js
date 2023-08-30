// Function to open the lightbox
function openLightbox(imageURL) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-img');
    
    lightboxImage.src = imageURL;
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}

// Event listener to close the lightbox when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', closeLightbox);