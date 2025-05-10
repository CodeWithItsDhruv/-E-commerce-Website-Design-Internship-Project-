/**
 * Search functionality for ShopEase e-commerce website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query")?.toLowerCase() || "";
    
    // Update search query display and form input
    const searchQueryElement = document.getElementById("searchQuery");
    if (searchQueryElement) {
        searchQueryElement.textContent = query;
    }
    
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = query;
    }
    
    // Perform search and display results
    performSearchAndDisplayResults(query);
    
    // Sort select change handler
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", function() {
            sortResults();
        });
    }
});

// Function to perform search and display results
function performSearchAndDisplayResults(query) {
    if (!query) return;
    
    // Filter products based on search query
    const filteredProducts = searchProducts(query);
    
    // Store filtered products globally for sorting
    window.filteredProducts = filteredProducts;
    
    // Display results
    displaySearchResults(filteredProducts, query);
}

// Function to search products
function searchProducts(query) {
    // Use the global productData array from product.js or define a new one
    const products = window.productData || [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: 799,
            category: "electronics",
            image: "/assets/images/product1.jpg",
            description: "Experience premium sound quality with our wireless Bluetooth headphones. Features include active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            name: "Smartphone Pro Max",
            price: 999,
            category: "electronics",
            image: "/assets/images/product2.jpg",
            description: "The latest smartphone with advanced features. Includes high-resolution camera, fast processor, and long-lasting battery.",
            rating: 4.8,
            reviews: 256
        },
        // Add more products as needed
    ];
    
    // Filter products based on search query
    return products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
}

// Function to display search results
function displaySearchResults(products, query) {
    const resultsContainer = document.getElementById("resultsContainer");
    const totalResults = document.getElementById("totalResults");
    
    if (!resultsContainer) return;
    
    // Update total results count
    if (totalResults) {
        totalResults.textContent = products.length;
    }
    
    // No results found
    if (products.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h2>No results found</h2>
                <p>Try different keywords or browse our categories</p>
                <a href="products.html" class="browse-all-btn">Browse All Products</a>
            </div>
        `;
        return;
    }
    
    // Display results
    resultsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <a href="product-view.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h4>${highlightText(product.name, query)}</h4>
                    <div class="rating">
                        ${generateStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <p class="price">₹${product.price}</p>
                </div>
            </a>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
    `).join('');
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                addToCart(product, 1);
            }
        });
    });
}

// Function to highlight search terms in text
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    // Escape special regex characters
    const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
    
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to sort results
function sortResults() {
    if (!window.filteredProducts) return;
    
    const sortBy = document.getElementById("sortSelect").value;
    let sortedProducts = [...window.filteredProducts];
    
    switch(sortBy) {
        case 'price-low-high':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-a-z':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Sort by relevance (default order)
            break;
    }
    
    // Get search query
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query")?.toLowerCase() || "";
    
    // Display sorted results
    displaySearchResults(sortedProducts, query);
} 