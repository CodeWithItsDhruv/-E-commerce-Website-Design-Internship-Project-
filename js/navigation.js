/**
 * Navigation functionality for ShopEase e-commerce website
 * This file ensures consistent navigation behavior across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer components
    loadHeaderFooter();
    
    // Initialize cart functionality
    initCart();
});

/**
 * Loads the header and footer components
 */
function loadHeaderFooter() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    
    if (header) {
        fetch('components/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load header');
                }
                return response.text();
            })
            .then(data => {
                header.innerHTML = data;
                
                // Initialize header functionality after a short delay
                setTimeout(() => {
                    initializeHeaderFunctions();
                    
                    // Dispatch event to notify that header is loaded
                    const event = new CustomEvent('headerLoaded');
                    document.dispatchEvent(event);
                }, 100);
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
    }
    
    if (footer) {
        fetch('components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load footer');
                }
                return response.text();
            })
            .then(data => {
                footer.innerHTML = data;
                
                // Dispatch event to notify that footer is loaded
                const event = new CustomEvent('footerLoaded');
                document.dispatchEvent(event);
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }
}

/**
 * Initializes header functionality
 */
function initializeHeaderFunctions() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        // Create menu overlay if it doesn't exist
        let overlay = document.querySelector('.menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
        }
        
        // Toggle menu function
        const toggleMenu = function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        };

        // Add event listeners
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on overlay
        overlay.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Close menu when clicking on a nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992 && navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Update cart count
    updateCartCount();
    
    // Set active nav link
    setActiveNavLink();
}

/**
 * Sets the active navigation link based on current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Map pages to their navigation IDs
    const pageToNavId = {
        'index.html': 'nav-home',
        '': 'nav-home',
        'products.html': 'nav-products',
        'product-view.html': 'nav-products',
        'category.html': 'nav-categories',
        'about.html': 'nav-about',
        'contact.html': 'nav-contact'
    };
    
    // Get the correct nav ID or check if the page name is in the URL
    let activeId = pageToNavId[currentPage];
    
    // Handle product view pages
    if (!activeId && currentPage.includes('product-view.html')) {
        activeId = 'nav-products';
    }
    
    // Remove all active classes first
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Apply active class to the correct nav item
    if (activeId) {
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            // Fallback to URL matching
            document.querySelectorAll('.nav-links a').forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                }
            });
        }
    }
}

/**
 * Updates the cart count
 */
function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.querySelector('.cart-count');
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
    } catch (error) {
        console.error('Error updating cart count:', error);
    }
}

/**
 * Initializes cart functionality
 */
function initCart() {
    // Add to cart button click event
    document.addEventListener('click', function(event) {
        // Skip if we're on the home page
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            return;
        }
        
        if (event.target.closest('.add-to-cart-btn')) {
            const button = event.target.closest('.add-to-cart-btn');
            const productId = parseInt(button.getAttribute('data-product-id'));
            
            if (productId && window.addToCart) {
                window.addToCart(productId);
            }
        }
    });
}

// Make functions available globally
window.updateCartCount = updateCartCount;
window.setActiveNavLink = setActiveNavLink;
window.initializeHeaderFunctions = initializeHeaderFunctions; 