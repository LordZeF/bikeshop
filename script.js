const galleryItems = document.querySelectorAll('.gallery-item');

// Add event listener to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the image source, alt text, and price
        const imgSrc = item.querySelector('img').src;
        const imgAlt = item.querySelector('img').alt;
        const price = item.dataset.price;
        
        // Display a message with the bike details
        alert(`Bike: ${imgAlt}\nPrice: $${price}`);
    });
});
