// Initialize current image index for modal
let currentImageIndex = 0;

// Function to open 'See More' modal
function openSeeMoreModal(title, images, reviews) {
    document.getElementById('modalTitle').innerText = title;
    const modalImagesContainer = document.getElementById('modalImages');
    
    // Clear previous images
    modalImagesContainer.innerHTML = '';
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.className = 'modal-image';
        imgElement.style.display = index === 0 ? 'block' : 'none'; // Show the first image only
        modalImagesContainer.appendChild(imgElement);
    });
    
    // Set the current image index
    currentImageIndex = 0;
    const modalReviews = document.getElementById('modalReviews');
    modalReviews.innerHTML = reviews.map(review => `<p>${review}</p>`).join('');
    document.getElementById('see-more-modal').style.display = 'block';
}

// Function to change the image in the modal
function changeImage(direction) {
    const images = document.querySelectorAll('.modal-image');
    if (images.length === 0) return;

    // Hide the current image
    images[currentImageIndex].style.display = 'none';
    
    // Update the index
    currentImageIndex += direction;
    
    // Wrap around if out of bounds
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Go to the last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Go back to the first image
    }
    
    // Show the new current image
    images[currentImageIndex].style.display = 'block';
}

// Function to close 'See More' modal
function closeSeeMoreModal() {
    document.getElementById('see-more-modal').style.display = 'none';
}

// Function to open Order modal
function openOrderModal() {
    document.getElementById('order-modal').style.display = 'block';
}

// Function to close Order modal
function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none';
}

// Close modal on clicking outside
window.onclick = function(event) {
    const seeMoreModal = document.getElementById('see-more-modal');
    const orderModal = document.getElementById('order-modal');
    
    if (event.target === seeMoreModal) {
        closeSeeMoreModal();
    } else if (event.target === orderModal) {
        closeOrderModal();
    }
}

// Event listeners for close buttons
document.querySelectorAll('.close, .close-order').forEach(btn => {
    btn.onclick = function() {
        if (btn.classList.contains('close')) {
            closeSeeMoreModal();
        } else {
            closeOrderModal();
        }
    };
});
