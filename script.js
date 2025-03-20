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