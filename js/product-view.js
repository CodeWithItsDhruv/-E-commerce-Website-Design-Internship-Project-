// Product detail page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the product view page
    if (window.location.pathname.includes('product-view.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        
        if (productId) {
            // Find the product from our data
            const product = products.find(p => p.id === productId);
            
            if (product) {
                displayProductDetails(product);
            } else {
                showErrorMessage('Product not found');
            }
        }
    }
});

function displayProductDetails(product) {
    const productDetail = document.querySelector('.product-detail');
    if (!productDetail) return;

    productDetail.innerHTML = `
        <div class="product-detail-container">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <div class="rating">
                    ${generateStars(product.rating)}
                    <span class="reviews">(${product.reviews} reviews)</span>
                </div>
                <div class="price-container">
                    <div class="price">
                        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                        <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <span class="discount-tag">${calculateDiscount(product.price, product.originalPrice)}% off</span>
                </div>
                <div class="product-description">
                    <h3>Description</h3>
                    <p>${product.description || 'No description available'}</p>
                </div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="qty-btn minus">-</button>
                        <input type="number" value="1" min="1" max="10" id="quantity">
                        <button class="qty-btn plus">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;

    // Setup quantity selector
    setupQuantitySelector();
    
    // Setup add to cart button
    const addToCartBtn = productDetail.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(product.id, quantity);
    });
}

function setupQuantitySelector() {
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const quantityInput = document.getElementById('quantity');

    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
}

function showErrorMessage(message) {
    const productDetail = document.querySelector('.product-detail');
    if (productDetail) {
        productDetail.innerHTML = `
            <div class="error-message">
                <h2>${message}</h2>
                <a href="/products.html" class="back-btn">Back to Products</a>
            </div>
        `;
    }
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHTML;
}

function calculateDiscount(currentPrice, originalPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
} 