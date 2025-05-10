// Get product data from product.js
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(productData, 1); // Start with page 1
    setupFilters();
});

// Constants
const PRODUCTS_PER_PAGE = 6; // 3x2 grid
let currentPage = 1;
let filteredProducts = [];

// Product Data
const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 3499, originalPrice: 4999, category: "electronics", image: "https://placehold.co/400x300/f8f9fa/4CAF50?text=Wireless+Headphones", rating: 4.5, reviews: 128 },
    { id: 2, name: "Smartphone Pro Max", price: 49999, originalPrice: 59999, category: "electronics", image: "https://placehold.co/400x300/f8f9fa/4CAF50?text=Smartphone", rating: 4.8, reviews: 256 },
    { id: 3, name: "Men's Cotton T-Shirt", price: 349, originalPrice: 699, category: "fashion", image: "https://placehold.co/400x300/f8f9fa/4CAF50?text=Cotton+T-Shirt", rating: 4.2, reviews: 89 },
    { id: 4, name: "Stainless Steel Water Bottle", price: 199, originalPrice: 399, category: "home", image: "https://placehold.co/400x300/f8f9fa/4CAF50?text=Water+Bottle", rating: 4.6, reviews: 156 },
    { id: 5, name: "Smart Watch Health Monitor", price: 2999, originalPrice: 3999, category: "electronics", image: "https://placehold.co/400x300/f8f9fa/4CAF50?text=Smart+Watch", rating: 4.7, reviews: 203 },
    { id: 6, name: "Women's Running Shoes", price: 1499, originalPrice: 2499, category: "fashion", image: "https://placehold.co/400x300/f8f9fa/4CAF50?text=Running+Shoes", rating: 4.4, reviews: 167 }
];

function displayProducts(products = productData, page = 1) {
    currentPage = page;
    const productList = document.querySelector('.product-list');
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const paginatedProducts = products.slice(start, end);

    // Clear existing products
    productList.innerHTML = '';

    if (paginatedProducts.length === 0) {
        productList.innerHTML = `
            <div class="no-products-message">
                <h3>No products found</h3>
                <p>Try adjusting your filters or browse our other categories</p>
            </div>
        `;
        return;
    }

    // Display products
    paginatedProducts.forEach(product => {
        const discount = calculateDiscount(product.price, product.originalPrice);
        
        // Handle image URL with fallback
        let imageUrl;
        if (product.images && product.images.length > 0) {
            imageUrl = product.images[0];
        } else {
            imageUrl = `https://via.placeholder.com/400x300/f8f9fa/4CAF50?text=${encodeURIComponent(product.name)}`;
        }

        // Create product card with all details
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="product-view.html?id=${product.id}" class="product-link">
                <img src="${imageUrl}" alt="${product.name}" 
                     onerror="this.src='https://via.placeholder.com/400x300/f8f9fa/4CAF50?text=${encodeURIComponent(product.name)}'">
                <div class="product-card-content">
                    <h4>${product.name}</h4>
                    <p class="product-category">${product.category}</p>
                    <div class="rating">
                        ${generateStars(product.rating)}
                        <span class="reviews">(${product.reviews} Reviews)</span>
                    </div>
                    <div class="price-container">
                        <div class="price">
                            <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                            <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <span class="discount-tag">${discount}% off</span>
                    </div>
                    ${product.description ? `<p class="product-description">${product.description.slice(0, 100)}...</p>` : ''}
                </div>
            </a>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        `;

        productList.appendChild(productCard);
    });

    // Update pagination
    updatePagination(products.length);
    
    // Setup product card effects
    setupProductCardEffects();
}

function setupProductCardEffects() {
    // Add hover effect to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#45a049';
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#4CAF50';
        });
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId);
        });
    });

    // Add hover effect to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cssText += `
            background: white;
            border-radius: 8px;
            padding: 15px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        `;
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
}

function setupFilters() {
    const categoryCheckboxes = document.querySelectorAll('.category-filters input[type="checkbox"]');
    const priceFilter = document.getElementById('priceFilter');
    const sortSelect = document.getElementById('sortProducts');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const priceValue = document.getElementById('priceValue');

    // Check URL parameters for category
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        const checkbox = document.querySelector(`input[value="${categoryParam}"]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }

    function applyFilters() {
        filteredProducts = [...productData];

        // Apply category filters
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product => 
                selectedCategories.includes(product.category)
            );
        }

        // Apply price filter
        const maxPrice = parseInt(priceFilter.value);
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
        priceValue.textContent = maxPrice.toLocaleString('en-IN');

        // Apply sorting
        const sortValue = sortSelect.value;
        switch(sortValue) {
            case 'price-low-high':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
        }

        // Reset to first page and display filtered products
        currentPage = 1;
        displayProducts(filteredProducts, 1);
    }

    // Add event listeners
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    if (priceFilter) {
        priceFilter.addEventListener('input', applyFilters);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            // Reset all filters
            categoryCheckboxes.forEach(checkbox => checkbox.checked = false);
            priceFilter.value = priceFilter.max;
            sortSelect.value = 'default';
            priceValue.textContent = priceFilter.max.toLocaleString('en-IN');
            
            // Clear URL parameters
            window.history.replaceState({}, '', window.location.pathname);
            
            // Reset filtered products and display all products
            filteredProducts = [...productData];
            currentPage = 1;
            displayProducts(productData, 1);
        });
    }

    // Apply initial filters if category is selected
    if (categoryParam) {
        applyFilters();
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

function setupPagination(products, currentPage) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    // Add transition to pagination container
    paginationContainer.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin: 30px 0;
        opacity: 1;
        transition: opacity 0.3s ease;
    `;

    const paginationHTML = `
        <button class="prev-page" ${currentPage === 1 ? 'disabled' : ''}>
            &laquo; Previous
        </button>
        <div class="page-numbers">
            ${generatePageNumbers(currentPage, totalPages)}
        </div>
        <button class="next-page" ${currentPage === totalPages ? 'disabled' : ''}>
            Next &raquo;
        </button>
    `;

    // Fade out current pagination
    paginationContainer.style.opacity = '0';

    // Update pagination content and fade in
    setTimeout(() => {
        paginationContainer.innerHTML = paginationHTML;
        
        // Style buttons
        const buttons = paginationContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.cssText = `
                padding: 8px 16px;
                border: 1px solid #ddd;
                border-radius: 4px;
                background: white;
                color: ${button.disabled ? '#999' : '#333'};
                cursor: ${button.disabled ? 'not-allowed' : 'pointer'};
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(10px);
            `;
        });

        // Fade in pagination
        requestAnimationFrame(() => {
            paginationContainer.style.opacity = '1';
            
            // Animate buttons with stagger
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, index * 50); // 50ms delay between each button
            });
        });

        // Add click events with smooth transitions
        paginationContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('page-number')) {
                const newPage = parseInt(e.target.dataset.page);
                if (newPage !== currentPage) {
                    displayProducts(products, newPage);
                }
            } else if (e.target.classList.contains('prev-page') && currentPage > 1) {
                displayProducts(products, currentPage - 1);
            } else if (e.target.classList.contains('next-page') && currentPage < totalPages) {
                displayProducts(products, currentPage + 1);
            }
        });
    }, 300);
}

function generatePageNumbers(currentPage, totalPages) {
    let pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
        // Show all pages if total pages are less than max visible
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        // Always show first page
        pages.push(1);

        if (currentPage > 3) {
            pages.push('...');
        }

        // Show pages around current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push('...');
        }

        // Always show last page
        pages.push(totalPages);
    }

    return pages.map(page => {
        if (page === '...') {
            return `<span class="page-dots">...</span>`;
        }
        return `
            <button class="page-number ${page === currentPage ? 'active' : ''}" 
                    data-page="${page}"
                    style="
                        padding: 8px 16px;
                        border: 1px solid ${page === currentPage ? '#4CAF50' : '#ddd'};
                        border-radius: 4px;
                        background: ${page === currentPage ? '#4CAF50' : 'white'};
                        color: ${page === currentPage ? 'white' : '#333'};
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">
                ${page}
            </button>
        `;
    }).join('');
}

// Function to add product to cart
function addToCart(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already in cart
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success notification
    showNotification(`${product.name} added to cart!`);
    
    // Update cart count in header
    updateCartDisplay();
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Function to update pagination
function updatePagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
    const pageNumbers = document.getElementById('pageNumbers');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    // Clear existing page numbers
    pageNumbers.innerHTML = '';

    // Previous button
    prevButton.className = 'pagination-btn prev' + (currentPage === 1 ? ' disabled' : '');

    // Next button
    nextButton.className = 'pagination-btn next' + (currentPage === totalPages ? ' disabled' : '');

    // Generate page numbers
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.className = 'pagination-btn number' + (i === currentPage ? ' active' : '');
        button.textContent = i;
        button.addEventListener('click', () => {
            if (i !== currentPage) {
                currentPage = i;
                displayProducts(filteredProducts.length > 0 ? filteredProducts : productData, i);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        pageNumbers.appendChild(button);
    }

    // Add event listeners to prev/next buttons
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(filteredProducts.length > 0 ? filteredProducts : productData, currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts(filteredProducts.length > 0 ? filteredProducts : productData, currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
}

// Add styles for price display
const style = document.createElement('style');
style.textContent = `
    .price-container {
        margin: 10px 0;
    }
    .price {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .current-price {
        font-size: 20px;
        font-weight: 600;
        color: #4CAF50;
    }
    .original-price {
        font-size: 16px;
        color: #999;
        text-decoration: line-through;
    }
    .discount-tag {
        display: inline-block;
        background-color: #ffebee;
        color: #e53935;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        margin-top: 5px;
    }
    .add-to-cart-btn {
        width: 100%;
        padding: 12px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .add-to-cart-btn:hover {
        background-color: #45a049;
        transform: translateY(-2px);
    }
    .product-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 15px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    }
    .product-link {
        text-decoration: none;
        color: inherit;
        flex: 1;
    }
    .product-card img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        border-radius: 6px;
        background: #f8f9fa;
        margin-bottom: 15px;
    }
    .product-card h4 {
        font-size: 16px;
        margin: 0 0 8px;
        color: #333;
        line-height: 1.4;
    }
    .product-category {
        color: #666;
        font-size: 14px;
        margin-bottom: 8px;
    }
    .rating {
        color: #ffc107;
        font-size: 14px;
        margin-bottom: 8px;
    }
    .rating .reviews {
        color: #666;
        margin-left: 5px;
    }
`;
document.head.appendChild(style);

// Add styles for pagination
const paginationStyle = document.createElement('style');
paginationStyle.textContent = `
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin: 40px 0;
        padding: 0;
    }

    .pagination-btn {
        min-width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e0e0e0;
        background: white;
        color: #333;
        font-size: 16px;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.3s ease;
        padding: 0;
        margin: 0;
    }

    .pagination-btn.number {
        font-weight: 500;
    }

    .pagination-btn:not(.disabled):hover {
        background: #4CAF50;
        color: white;
        border-color: #4CAF50;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
    }

    .pagination-btn.active {
        background: #4CAF50;
        color: white;
        border-color: #4CAF50;
    }

    .pagination-btn.disabled {
        background: #f5f5f5;
        color: #bdbdbd;
        cursor: not-allowed;
        border-color: #e0e0e0;
    }

    .pagination-btn.prev,
    .pagination-btn.next {
        font-size: 14px;
    }

    #pageNumbers {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    @media (max-width: 768px) {
        .pagination {
            gap: 4px;
        }

        .pagination-btn {
            min-width: 36px;
            height: 36px;
            font-size: 14px;
        }
    }
`;
document.head.appendChild(paginationStyle);

// Add styles for product cards
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .product-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    }

    .product-card img {
        width: 100%;
        height: 250px;
        object-fit: contain;
        background: #f8f9fa;
        padding: 20px;
        transition: transform 0.3s ease;
    }

    .product-card:hover img {
        transform: scale(1.05);
    }

    .product-description {
        font-size: 14px;
        color: #666;
        margin: 10px 0;
        line-height: 1.4;
    }

    .no-products-message {
        text-align: center;
        padding: 40px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        grid-column: 1 / -1;
    }

    .no-products-message h3 {
        color: #333;
        margin-bottom: 10px;
    }

    .no-products-message p {
        color: #666;
    }
`;
document.head.appendChild(additionalStyles); 