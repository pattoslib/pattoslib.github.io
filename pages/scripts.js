function toggleSound() {
  const video = document.getElementById("video");
  const volumeIcon = document.getElementById("volumeButton");

  video.muted = !video.muted;
  video.play();

  if (video.muted) {
    volumeIcon.className = "fa fa-volume-off"; // ícone para mudo
  } else {
    volumeIcon.className = "fa fa-volume-up"; // ícone para som ligado
  }
}
window.addEventListener("load", () => {
  const video = document.getElementById("video");
  const generalContent = document.querySelector(".generalContent");

  if (video && generalContent) {
    const updateMargin = () => {
      const videoHeight = video.offsetHeight;
      generalContent.style.marginTop = `${videoHeight}px`;
    };

    // Atualiza na carga
    updateMargin();

    // Também atualiza se a tela for redimensionada
    window.addEventListener("resize", updateMargin);
  }
});
function setupImageHighlight() {
  const highlightImage = document.getElementById('highlightImage');
  const carrouselImages = document.querySelectorAll('.carrouselImage');

  // Marca a primeira imagem como ativa
  if (carrouselImages.length > 0) {
    const firstImage = carrouselImages[0];
    highlightImage.setAttribute('src', firstImage.getAttribute('src'));
    firstImage.classList.add('active');
  }

  carrouselImages.forEach((img) => {
    img.addEventListener('click', () => {
      const newSrc = img.getAttribute('src');

      // Se já estiver mostrando essa imagem, não faz nada
      if (highlightImage.getAttribute('src') === newSrc) return;

      // Aplica fade-out
      highlightImage.classList.add('fade-out');

      // Troca a imagem após a transição
      setTimeout(() => {
        highlightImage.setAttribute('src', newSrc);
        highlightImage.classList.remove('fade-out');
      }, 300); // tempo da transição no CSS (0.3s)

      // Atualiza classe ativa no carrossel
      carrouselImages.forEach(i => i.classList.remove('active'));
      img.classList.add('active');
    });
  });
}


window.addEventListener("load", () => {
  setupImageHighlight(); // ativa ao carregar
  // ... outras funções como updateMargin() podem estar aqui também
});
