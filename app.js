document.addEventListener("DOMContentLoaded", function () {
  
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



document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('hidden');
});








const currentSection = document.getElementById('currentSection');
    const hiddenSection = document.getElementById('hiddenSection');
    const nextPageButton = document.getElementById('nextPageButton');
    const prevPageButton = document.getElementById('prevPageButton');

    nextPageButton.addEventListener('click', function() {
      gsap.to(currentSection, { opacity: 0, y: -50, duration: 0.5, onComplete: () => {
          currentSection.classList.add('hidden');
          hiddenSection.classList.remove('hidden');
          gsap.fromTo(hiddenSection, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
      }});
    });

    prevPageButton.addEventListener('click', function() {
      gsap.to(hiddenSection, { opacity: 0, y: -50, duration: 0.5, onComplete: () => {
          hiddenSection.classList.add('hidden');
          currentSection.classList.remove('hidden');
          gsap.fromTo(currentSection, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
      }});
    });