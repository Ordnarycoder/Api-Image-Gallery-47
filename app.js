const gallery = document.getElementById('gallery');

async function fetchImages() {
  try {
    // Fetch a list of images from Picsum Photos
    const response = await fetch('https://picsum.photos/v2/list?limit=12');
    const images = await response.json();
    displayImages(images);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

function displayImages(images) {
  images.forEach(image => {
    // Create an image element
    const imgElement = document.createElement('img');
    // Use Picsum's image URL with specified dimensions
    // You can also use image.download_url directly but setting width & height can standardize your gallery look
    imgElement.src = `https://picsum.photos/id/${image.id}/300/200`;
    imgElement.alt = image.author ? `Photo by ${image.author}` : 'Random Image';
    gallery.appendChild(imgElement);
  });
}

// Fetch images once the document is fully loaded
document.addEventListener('DOMContentLoaded', fetchImages);
