
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-slide
setInterval(nextSlide, 3000);




document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav ul');
    const accountLinks = document.querySelector('.account');

    mobileMenuIcon.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        accountLinks.style.display = accountLinks.style.display === 'block' ? 'none' : 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');

    // Fade-in effect for hero content
    setTimeout(() => {
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.parentElement;
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p').textContent;
            
            const product = {
                name: productName,
                price: productPrice
            };

            cart.push(product);
            console.log(cart);
            alert(`${productName} has been added to the cart.`);
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [];
    const addTowishlistButtons = document.querySelectorAll('.add-to-wishlist');

    addTowishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.parentElement;
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p').textContent;
            
            const product = {
                name: productName,
                price: productPrice
            };

            wishlist.push(product);
            console.log(wishlist);
            alert(`${productName} has been added to the wishlist.`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const viewCollectionButtons = document.querySelectorAll('.view-collection');

    viewCollectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const collectionItem = button.parentElement;
            const collectionName = collectionItem.querySelector('h3').textContent;

            alert(`Redirecting to ${collectionName}`);
            const url = `${collectionName.toLowerCase()}.html`; // Assuming collectionName is sanitized and valid

            // Redirect to the constructed URL
            window.location.href = url;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulation of form submission (you can replace this with actual form submission logic)
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Message sent!');

        // Clear form fields after submission (optional)
        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulation of form submission (you can replace this with actual form submission logic)
        console.log(`Email: ${email}, Password: ${password}`);
        alert('Signed in successfully!');

        // Clear form fields after submission (optional)
        signInForm.reset();

        function redirectToHomePage() {
            // Assuming the sign-in process is successful, redirect to the home page
            window.location.href = 'index.html'; // Replace 'home.html' with the actual home page URL
          }
        redirectToHomePage();
          
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    // Example of adding items dynamically (replace with your actual logic)
    function addItemToCart(productName, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="images/pp11.jpg" alt="${productName}">
            <div>
                <h4>${productName}</h4>
                <p>$${price}</p>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);

        // Update total price
        totalPrice += price;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Example usage:
    addItemToCart('Product 1', 49.99);
    //addItemToCart('Product 2', 59.99);
   // addItemToCart('Product 3', 69.99);

    // Checkout button functionality (simulated)
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        alert(`Proceeding to checkout. Total amount: $${totalPrice.toFixed(2)}`);
        // Implement actual checkout logic here
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const wishlistItemsContainer = document.querySelector('.wishlist-items');
    const clearBtn = document.querySelector('.clear-btn');

    // Example of adding items dynamically (replace with your actual logic)
    function addItemToWishlist(productName, price) {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');

        wishlistItem.innerHTML = `
            <img src="images/pp11.jpg" alt="${productName}">
            <div>
                <h4>${productName}</h4>
                <p>$${price}</p>
            </div>
        `;

        wishlistItemsContainer.appendChild(wishlistItem);
    }

    // Example usage:
    addItemToWishlist('Product 1', 49.99);
    //addItemToWishlist('Product 2', 59.99);
    //addItemToWishlist('Product 3', 69.99);

    // Clear wishlist functionality
    clearBtn.addEventListener('click', function() {
        wishlistItemsContainer.innerHTML = '';
        alert('Wishlist cleared!');
        // Implement additional logic (e.g., remove items from database) as needed
    });
});










document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = button.dataset.itemId;
            const itemName = button.dataset.itemName;
            const itemPrice = parseFloat(button.dataset.itemPrice);

            // Add item to localStorage cart
            addToLocalStorageCart(itemId, itemName, itemPrice);

            // Optionally, update UI to show item added feedback
            alert(`Added ${itemName} to cart!`);
        });
    });

    // Function to add item to localStorage cart
    function addToLocalStorageCart(itemId, itemName, itemPrice) {
        // Retrieve current cart items from localStorage or initialize empty array
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add new item to cartItems array
        const newItem = { id: itemId, name: itemName, price: itemPrice };
        cartItems.push(newItem);

        // Save updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const cartList = document.querySelector('.cart-list');
    const totalPriceElement = document.querySelector('.total-price');

    // Clear previous contents
    cartList.innerHTML = '';

    // Iterate through stored cart items and display them
    let total = 0;
    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(cartItem);
        total += item.price;
    });

    // Update total price
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
});





function redirectToCheckout() {
    window.location.href = 'checkout.html';
}

function redirectToHome() {
    window.location.href = 'index.html'; // Adjust the URL according to your homepage
}
