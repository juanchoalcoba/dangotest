document.addEventListener('DOMContentLoaded', function () {
    const images = [
      {
        src: 'face.png',
        title: 'Lorem ipsum<br>dolor sit amet',
        description: 'Nunc porttitor tortor metus, nec sagittis<br> lectus accumsan quis. Aenean euismod mollis tempor.'
      },
      {
        src: 'girl-3.png',
        title: 'Another title<br>mood fasion',
        description: 'Another description here. Lorem ipsum dolor, consectetur<br> adipiscing elit.'
      },
      {
        src: 'girl-1.png',
        title: 'Third title<br> another please',
        description: 'This is the third description. Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit.'
      }
    ];
  
    let currentIndex = 0;
  
    const imageElement = document.getElementById('image');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
  
    function fadeOut(element) {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.transition = 'opacity 1s';
        element.style.opacity = 1;
      }, 1000); // Delay for transition to start smoothly
    }
  
    function updateContent(index) {
      fadeOut(imageElement);
      fadeOut(titleElement);
      fadeOut(descriptionElement);
  
      setTimeout(() => {
        const { src, title, description } = images[index];
        imageElement.src = src;
        titleElement.innerHTML = title;
        descriptionElement.innerHTML = description;
      }, 200); // Match transition duration
  
      // Reset opacity after content change
      setTimeout(() => {
        imageElement.style.opacity = 1;
        titleElement.style.opacity = 1;
        descriptionElement.style.opacity = 1;
      }, 200); // Ensure opacity is reset after transition
    }
  
    // Initial content update
    updateContent(currentIndex);
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      updateContent(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      updateContent(currentIndex);
    });


    const buyButtons = document.querySelectorAll('.buy-button');
const addedToCartModal = document.querySelector('#addedToCartModal');

buyButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Mostrar el modal
    addedToCartModal.classList.remove('hidden');
    addedToCartModal.classList.add('transform', 'translate-y-full');

    // Ocultar el modal después de 2 segundos
    setTimeout(function() {
      addedToCartModal.classList.add('hidden');
      addedToCartModal.classList.remove('transform', 'translate-y-full');
    }, 2000);
  });
});
    
  });