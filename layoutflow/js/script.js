// Get the parent container of all GIFs
var gifContainer = document.querySelector('.gif-container');

// Add click event listener to the container
gifContainer.addEventListener('click', function(event) {
    // Check if the clicked element is an image
    // Get all GIF images
    var gifImages = document.querySelectorAll('.gifImage');

    // Loop through each GIF image
    gifImages.forEach(function(gifImage) {
        // Get the current source of the image
        var src = gifImage.src;

        // Reset the source of the image
        gifImage.src = '';

        // Delay to ensure resetting the source properly
        setTimeout(function() {
            // Set the source back to the original value to restart the GIF
            gifImage.src = src;
        }, 10);
    });
});

// // Get all GIF images by their class
// var gifImages = document.querySelectorAll('.gifImage');

// // Loop through each GIF image
// gifImages.forEach(function(gifImage) {
//     // Add click event listener to each image
//     gifImage.addEventListener('click', function() {
//         // Get the current source of the clicked image
//         var src = gifImage.src;

//         // Reset the source of the clicked image
//         gifImage.src = '';

//         // Delay to ensure resetting the source properly
//         setTimeout(function() {
//             // Set the source back to the original value to restart the GIF
//             gifImage.src = src;
//         }, 10);
//     });
// });