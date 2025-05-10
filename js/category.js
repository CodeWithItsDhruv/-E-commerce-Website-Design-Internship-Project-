// Get product data from product.js
document.addEventListener('DOMContentLoaded', function() {
    updateCategoryCounts();
    loadFeaturedCollections();
});

function updateCategoryCounts() {
    // Get all categories and their product counts
    const categories = {
        'electronics': { count: 0, title: 'Electronics', description: 'Discover cutting-edge technology for your digital lifestyle.' },
        'fashion': { count: 0, title: 'Fashion', description: 'Express yourself with trendy clothing and accessories.' },
        'home': { count: 0, title: 'Home & Kitchen', description: 'Make your home comfortable and stylish.' },
        'beauty': { count: 0, title: 'Beauty', description: 'Enhance your natural beauty with premium products.' },
        'sports': { count: 0, title: 'Sports & Fitness', description: 'Gear up for an active and healthy lifestyle.' },
        'books': { count: 0, title: 'Books', description: 'Expand your knowledge and imagination with our collection of books.' }
    };

    // Count products in each category
    productData.forEach(product => {
        if (categories[product.category]) {
            categories[product.category].count++;
        }
    });

    // Update category cards with real counts and sample products
    Object.entries(categories).forEach(([category, data]) => {
        const categoryCard = document.querySelector(`[data-category="${category}"]`);
        if (categoryCard) {
            // Update category card structure
            categoryCard.style.cssText = `
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
                display: flex;
                flex-direction: column;
                height: 100%;
                padding: 30px;
                text-align: center;
            `;

            // Create category icon (you can replace with actual category icons)
            const iconMap = {
                'electronics': '🔌',
                'fashion': '👕',
                'home': '🏠',
                'beauty': '💄',
                'sports': '⚽',
                'books': '📚'
            };

            // Update category content
            categoryCard.innerHTML = `
                <div style="font-size: 48px; margin-bottom: 20px;">
                    ${iconMap[category]}
                </div>
                <h3 style="
                    font-size: 32px;
                    color: #333;
                    margin: 0 0 15px 0;
                    font-weight: 600;
                ">${data.title}</h3>
                <p style="
                    color: #666;
                    font-size: 18px;
                    line-height: 1.6;
                    margin: 0 0 20px 0;
                    flex-grow: 1;
                ">${data.description}</p>
                <div style="
                    font-size: 24px;
                    color: #4CAF50;
                    margin-bottom: 25px;
                    font-weight: 500;
                ">${data.count} products</div>
                <a href="products.html?category=${category}" 
                   class="explore-btn" 
                   style="
                       display: inline-block;
                       background-color: #4CAF50;
                       color: white;
                       padding: 15px 40px;
                       border-radius: 8px;
                       text-decoration: none;
                       font-size: 20px;
                       font-weight: 500;
                       transition: all 0.3s ease;
                       text-transform: uppercase;
                       letter-spacing: 1px;
                   ">
                    Explore
                </a>
            `;

            // Add hover effects
            categoryCard.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                const exploreBtn = this.querySelector('.explore-btn');
                if (exploreBtn) {
                    exploreBtn.style.backgroundColor = '#45a049';
                    exploreBtn.style.transform = 'scale(1.05)';
                }
            });

            categoryCard.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                const exploreBtn = this.querySelector('.explore-btn');
                if (exploreBtn) {
                    exploreBtn.style.backgroundColor = '#4CAF50';
                    exploreBtn.style.transform = 'scale(1)';
                }
            });
        }
    });
}

function loadFeaturedCollections() {
    const collections = {
        'summer': {
            title: 'Summer Collection',
            description: 'Beat the heat with our cool summer essentials.',
            products: productData.filter(p => 
                p.category === 'fashion' || p.category === 'sports'
            ).slice(0, 6)
        },
        'tech': {
            title: 'Tech Gadgets',
            description: 'Discover the latest innovations in technology.',
            products: productData.filter(p => 
                p.category === 'electronics'
            ).slice(0, 6)
        }
    };

    // Update collection cards
    Object.entries(collections).forEach(([key, collection]) => {
        const collectionCard = document.querySelector(`[data-collection="${key}"]`);
        if (collectionCard) {
            // Update collection image with a grid of product images
            const collectionImage = collectionCard.querySelector('img');
            if (collectionImage && collection.products.length > 0) {
                // Create a canvas to combine product images
                const canvas = document.createElement('canvas');
                canvas.width = 600;
                canvas.height = 300;
                const ctx = canvas.getContext('2d');

                // Load and draw product images
                Promise.all(collection.products.slice(0, 4).map(product => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => resolve(img);
                        img.onerror = reject;
                        img.src = product.images[0];
                    });
                })).then(images => {
                    images.forEach((img, index) => {
                        const x = (index % 2) * 300;
                        const y = Math.floor(index / 2) * 150;
                        ctx.drawImage(img, x, y, 300, 150);
                    });
                    collectionImage.src = canvas.toDataURL();
                });
            }

            // Update collection info
            const titleElement = collectionCard.querySelector('h3');
            const descElement = collectionCard.querySelector('p');
            if (titleElement) titleElement.textContent = collection.title;
            if (descElement) descElement.textContent = collection.description;
        }
    });
} 


// Category handling functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle category card clicks
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent.toLowerCase();
            // Navigate to category page with the selected category
            window.location.href = `/category.html?type=${encodeURIComponent(category)}`;
        });
    });

    // Check if we're on the category page and handle filtering
    if (window.location.pathname.includes('category.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedCategory = urlParams.get('type');
        
        if (selectedCategory) {
            // Filter and display products for the selected category
            const filteredProducts = products.filter(product => 
                product.category.toLowerCase() === selectedCategory.toLowerCase()
            );
            displayProducts(filteredProducts);
            
            // Update page title
            document.querySelector('.section-title h2').textContent = 
                `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`;
        }
    }
}); 