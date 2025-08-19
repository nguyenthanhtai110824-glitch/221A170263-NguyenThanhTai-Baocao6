document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const targetId = thumbnail.getAttribute('data-target');
            const mainImageContainer = thumbnail.closest('.product-images').querySelector('.main-image-container');
            const mainImage = mainImageContainer.querySelector('.main-image');
            const newImageSrc = thumbnail.src;

            if (mainImage.src !== newImageSrc) {
                mainImage.classList.remove('fade-in');
                mainImage.classList.add('fade-out');

                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.classList.remove('fade-out');
                    mainImage.classList.add('fade-in');
                }, 300);
            }

            const container = thumbnail.closest('.product-container');
            const allThumbnailsInContainer = container.querySelectorAll('.thumbnail');
            
            allThumbnailsInContainer.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
    
    document.querySelectorAll('.product-container').forEach(container => {
        const firstThumbnail = container.querySelector('.thumbnail');
        if (firstThumbnail) {
            firstThumbnail.classList.add('active');
        }
    });
});