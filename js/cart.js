/**
 * Cart functionality for ShopEase e-commerce website
 */

// Add product to cart
function addToCart(product, quantity = 1) {
    // Get existing cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        // Update quantity if product exists
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item with quantity
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count display
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // If on cart page, reload cart items
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

// Update item quantity in cart
function updateCartItemQuantity(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        if (quantity > 0) {
            cart[itemIndex].quantity = quantity;
        } else {
            // Remove item if quantity is 0 or negative
            cart.splice(itemIndex, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // If on cart page, reload cart items
        if (window.location.pathname.includes('cart.html')) {
            loadCartItems();
        }
    }
}

// Show notification when product is added to cart
function showNotification(message) {
    // Check if notification container exists, if not, create it
    let notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.bottom = '20px';
        notificationContainer.style.right = '20px';
        notificationContainer.style.zIndex = '1000';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '4px';
    notification.style.marginTop = '10px';
    notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    notification.style.animation = 'fadeInUp 0.3s ease forwards';
    notification.innerHTML = `
        <span>${message}</span>
        <button style="background: none; border: none; color: white; margin-left: 10px; cursor: pointer; font-size: 16px;">×</button>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Add event listener to close button
    notification.querySelector('button').addEventListener('click', function() {
        notification.remove();
    });
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Load cart items on cart page
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!cartItemsContainer) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        // Show empty cart message
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        if (cartTotalElement) cartTotalElement.textContent = '0';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    // Hide empty cart message
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    // Calculate total price
    const totalPrice = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    
    // Update total price display
    if (cartTotalElement) cartTotalElement.textContent = totalPrice;
    
    // Generate cart items HTML
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">₹${item.price}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease">-</button>
                <input type="number" value="${item.quantity}" min="1" max="10">
                <button class="quantity-btn increase">+</button>
            </div>
            <div class="cart-item-subtotal">
                ₹${item.price * item.quantity}
            </div>
            <button class="remove-item-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    // Add event listeners to cart items
    document.querySelectorAll('.cart-item').forEach(cartItem => {
        const productId = parseInt(cartItem.dataset.id);
        const quantityInput = cartItem.querySelector('input');
        const decreaseBtn = cartItem.querySelector('.decrease');
        const increaseBtn = cartItem.querySelector('.increase');
        const removeBtn = cartItem.querySelector('.remove-item-btn');
        
        // Decrease quantity button
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                updateCartItemQuantity(productId, currentValue - 1);
            }
        });
        
        // Increase quantity button
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
                updateCartItemQuantity(productId, currentValue + 1);
            }
        });
        
        // Quantity input change
        quantityInput.addEventListener('change', () => {
            let newValue = parseInt(quantityInput.value);
            if (isNaN(newValue) || newValue < 1) {
                newValue = 1;
                quantityInput.value = 1;
            } else if (newValue > 10) {
                newValue = 10;
                quantityInput.value = 10;
            }
            updateCartItemQuantity(productId, newValue);
        });
        
        // Remove item button
        removeBtn.addEventListener('click', () => {
            removeFromCart(productId);
        });
    });
}

// Clear cart completely
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    
    // If on cart page, reload cart items
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
        
        // Clear cart button
        const clearCartBtn = document.getElementById('clear-cart-btn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', clearCart);
        }
    }
}); 