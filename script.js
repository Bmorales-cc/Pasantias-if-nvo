document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Aplicar el tema guardado al cargar la página
  document.body.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';

  // Manejar el clic en el botón de cambio de tema
  themeToggle.addEventListener('click', function () {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
  });

  // Manejar la visualización de GIFs
  const toggleGifsButton = document.getElementById('toggleGifs');
  const gifSection = document.getElementById('gifSection');

  if (toggleGifsButton && gifSection) {
    toggleGifsButton.addEventListener('click', function () {
      if (gifSection.style.display === 'none' || gifSection.style.display === '') {
        gifSection.style.display = 'block';
        toggleGifsButton.textContent = 'Ocultar Presentaciones';
      } else {
        gifSection.style.display = 'none';
        toggleGifsButton.textContent = 'Ver Presentaciones';
      }
    });
  }
});
function setupGifCarousel() {
  const gifCarouselTrack = document.querySelector('.gif-carousel-track');
  
  // Lista de GIFs (personaliza con tus rutas)
  const gifs = [
    'documentos/presentacion 5.jpg',
    'documentos/presentacion 6.jpg',
    'gifs/labor1.gif',
    'gifs/labor2.gif',
    'gifs/presentacion 2.gif',
    'gifs/presentacion 3.gif',
    'gifs/presentacion 4.gif',
    'gifs/presentacion 7.gif'
  ];
  
  // Duplicamos los GIFs para efecto de bucle infinito
  const duplicatedGifs = [...gifs, ...gifs, ...gifs];
  
  // Creamos elementos con rotación inicial variada
  duplicatedGifs.forEach((gif, index) => {
    const item = document.createElement('div');
    item.className = 'gif-carousel-item';
    
    // Rotación inicial aleatoria para efecto más orgánico
    const initialRotation = Math.random() * 20 - 10; // Entre -10 y 10 grados
    item.style.transform = `rotateY(${initialRotation}deg)`;
    
    const img = document.createElement('img');
    img.src = gif;
    img.alt = `GIF ${index + 1}`;
    img.loading = 'lazy';
    
    item.appendChild(img);
    gifCarouselTrack.appendChild(item);
  });
  
  // Ajustamos el ancho del track
  const itemCount = duplicatedGifs.length;
  const itemWidth = 155; // Ancho de cada item + gap
  gifCarouselTrack.style.width = `${itemCount * itemWidth}px`;
}

document.addEventListener('DOMContentLoaded', setupGifCarousel);