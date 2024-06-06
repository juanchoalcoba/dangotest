document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      src: "face.png",
      title: "Lorem ipsum<br>dolor sit amet",
      description:
        "Nunc porttitor tortor metus, nec sagittis<br> lectus accumsan quis. Aenean euismod mollis tempor.",
    },
    {
      src: "girl-3.png",
      title: "Another title<br>mood fashion",
      description:
        "Another description here. Lorem ipsum dolor, consectetur<br> adipiscing elit.",
    },
    {
      src: "girl-1.png",
      title: "Third title<br> another please",
      description:
        "This is the third description. Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit.",
    },
  ];

  let currentIndex = 0;

  const imageElement = document.getElementById("image");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function fadeOut(element) {
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.transition = "opacity 1s";
      element.style.opacity = 1;
    }, 1000);
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
    }, 200); 

    setTimeout(() => {
      imageElement.style.opacity = 1;
      titleElement.style.opacity = 1;
      descriptionElement.style.opacity = 1;
    }, 200);
  }

  updateContent(currentIndex);

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateContent(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateContent(currentIndex);
  });

  const buyButtons = document.querySelectorAll(".buy-button");
  const addedToCartModal = document.querySelector("#addedToCartModal");

  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      addedToCartModal.classList.remove("hidden");
      addedToCartModal.classList.add("transform", "translate-y-full");

      setTimeout(function () {
        addedToCartModal.classList.add("hidden");
        addedToCartModal.classList.remove("transform", "translate-y-full");
      }, 2000);
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const cartIconMobile = document.getElementById("cart-icon-mobile");
  const cartModal = document.getElementById('cart-modal');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const buyButtons = document.querySelectorAll('.buy-button');

  let cart = [];

  const updateCart = () => {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.product} - $${item.price.toFixed(2)}`;

      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('ml-12', 'text-red-600', 'hover:text-red-800', 'font-bold', 'focus:outline-none');
      deleteButton.addEventListener('click', () => {
        cart.splice(index, 1); 
        updateCart(); 
      });

      li.appendChild(deleteButton);
      cartItemsContainer.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
  };

  buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.dataset.product;
      const price = parseFloat(e.target.previousElementSibling.textContent.replace('$', ''));
      cart.push({ product, price });
      updateCart();
    });
  });

  cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
  });

  closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  cartIconMobile.addEventListener('click', () => {
    cartModal.style.display = 'flex';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
});


let currentPage = 1;
const itemsPerPage = 8; 
const totalItems = document.querySelectorAll('.card').length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

function showItems() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

showItems();

document.getElementById('nextPageButton').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    showItems();
    document.querySelector('.container > .grid').style.display = 'none';
    document.querySelector('.container > .hidden').style.display = 'grid';
  }
});

document.getElementById('prevPageButton').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showItems();
    document.querySelector('.container > .hidden').style.display = 'none';
    document.querySelector('.container > .grid').style.display = 'grid';
  }
});


document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('hidden');
});