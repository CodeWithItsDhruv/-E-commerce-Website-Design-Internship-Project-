/**
 * Main JavaScript file for ShopEase e-commerce website
 */

// Global initialization flag
let isInitialized = false;

// Store cleanup functions
const cleanupFunctions = [];

// DOM content loaded event
document.addEventListener('DOMContentLoaded', function initializeApp() {
    // Prevent multiple initializations
    if (isInitialized) {
        console.warn('Application already initialized');
        return;
    }

    try {
        // Set initialization flag
        isInitialized = true;

        // Remove any existing event listeners
        cleanup();

        // Initialize components
        initializeComponents();

    } catch (error) {
        console.error('Error during initialization:', error);
        // Reset initialization flag on error
        isInitialized = false;
    }
});

// Cleanup function to remove event listeners
function cleanup() {
    cleanupFunctions.forEach(cleanup => cleanup());
    cleanupFunctions.length = 0;
}

// Initialize all components
function initializeComponents() {
    // Load header and footer components
    loadComponents();
    
    // Initialize search functionality
    initSearch();
    
    // Add scroll to top functionality
    initScrollToTop();
    
    // Update cart count
    updateCartCount();
}

// Load header and footer components
function loadComponents() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    // Track loading state
    let headerLoaded = false;
    let footerLoaded = false;

    // Only load if elements exist and aren't already loaded
    if (header && !header.hasAttribute('data-loaded')) {
        fetch('components/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load header');
                }
                return response.text();
            })
            .then(data => {
                if (!headerLoaded) {
                    header.innerHTML = data;
                    header.setAttribute('data-loaded', 'true');
                    headerLoaded = true;
                    
                    // Add a small delay to ensure DOM is updated
                    setTimeout(() => {
                        // Initialize header functionality
                        setupHeaderFunctionality();
                        
                        // Initialize mobile menu
                        initMobileMenu();
                        
                        // Set active nav link
                        setActiveNavLink();
                        
                        // Dispatch a custom event to notify other scripts
                        document.dispatchEvent(new CustomEvent('headerLoaded'));
                    }, 50);
                }
            })
            .catch(error => {
                console.error('Error loading header:', error);
                isInitialized = false;
            });
    }
    
    if (footer && !footer.hasAttribute('data-loaded')) {
        fetch('components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load footer');
                }
                return response.text();
            })
            .then(data => {
                if (!footerLoaded) {
                    footer.innerHTML = data;
                    footer.setAttribute('data-loaded', 'true');
                    footerLoaded = true;
                    
                    // Dispatch a custom event to notify other scripts
                    document.dispatchEvent(new CustomEvent('footerLoaded'));
                }
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                isInitialized = false;
            });
    }
}

// Cache DOM elements
const elementCache = new Map();

// Get cached element with error handling
function getElement(selector) {
    if (!elementCache.has(selector)) {
        const element = document.querySelector(selector);
        if (element) {
            elementCache.set(selector, element);
        } else {
            console.warn(`Element not found: ${selector}`);
            return null;
        }
    }
    return elementCache.get(selector);
}

// Clear element cache
function clearElementCache() {
    elementCache.clear();
}

// Setup header functionality with debouncing and cleanup
function setupHeaderFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = getElement('.search-btn');

    if (searchBtn && !searchBtn.hasAttribute('data-initialized')) {
        const debouncedSearch = debounce(performSearch, 300);
        searchBtn.setAttribute('data-initialized', 'true');
        searchBtn.addEventListener('click', debouncedSearch);
        
        // Add cleanup function
        cleanupFunctions.push(() => {
            searchBtn.removeEventListener('click', debouncedSearch);
            searchBtn.removeAttribute('data-initialized');
        });
    }

    if (searchInput && !searchInput.hasAttribute('data-initialized')) {
        const debouncedKeypress = debounce(function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        }, 300);

        searchInput.setAttribute('data-initialized', 'true');
        searchInput.addEventListener('keypress', debouncedKeypress);
        
        // Add cleanup function
        cleanupFunctions.push(() => {
            searchInput.removeEventListener('keypress', debouncedKeypress);
            searchInput.removeAttribute('data-initialized');
        });
    }
}

// Add window unload handler
window.addEventListener('unload', () => {
    cleanup();
    clearElementCache();
    isInitialized = false;
});

// Prevent reload loops
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
    cleanup();
    clearElementCache();
    isInitialized = false;
});

// Initialize mobile menu functionality with optimization
function initMobileMenu() {
    try {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (!hamburger || !navLinks) {
            console.warn('Mobile menu elements not found, will try again in 100ms');
            // Try again after a short delay (for dynamically loaded content)
            setTimeout(initMobileMenu, 100);
            return;
        }
        
        if (!hamburger.hasAttribute('data-initialized')) {
            hamburger.setAttribute('data-initialized', 'true');
            
            // Create menu overlay if it doesn't exist
            let overlay = document.querySelector('.menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'menu-overlay';
                document.body.appendChild(overlay);
            }
            
            const toggleMenu = throttle(() => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
                overlay.classList.toggle('active');
                
                // Toggle body scroll
                document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
                
                const searchContainer = getElement('.search-container');
                if (window.innerWidth <= 768 && searchContainer?.classList.contains('active')) {
                    searchContainer.classList.remove('active');
                }
            }, 300);
    
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
    
            // Add window resize handler to automatically close menu
            const closeMenuOnResize = debounce(() => {
                if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }, 200);
    
            window.addEventListener('resize', closeMenuOnResize);
            
            // Add event listeners
            hamburger.addEventListener('click', toggleMenu);
            
            // Add cleanup functions
            cleanupFunctions.push(() => {
                hamburger.removeEventListener('click', toggleMenu);
                overlay.removeEventListener('click', toggleMenu);
                window.removeEventListener('resize', closeMenuOnResize);
                navLinks.querySelectorAll('a').forEach(link => {
                    link.removeEventListener('click', toggleMenu);
                });
                hamburger.removeAttribute('data-initialized');
            });
            
            console.log('Mobile menu initialized successfully');
        }
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
}

// Update cart count with optimization
const updateCartCount = debounce(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    document.querySelectorAll('.cart-count').forEach(element => {
        if (element.textContent !== cartCount.toString()) {
            element.textContent = cartCount;
        }
    });
}, 300);

// Show notification with optimization
function showNotification(message) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    document.body.appendChild(notification);
    
    // Force reflow
    notification.offsetHeight;
    
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    });
    
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add to cart with optimization
function addToCart(productId) {
    // Skip if the current page is index.html - home page has its own handler
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === productId);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

// Global function to reinitialize mobile menu
window.reinitializeMobileMenu = function() {
    console.log('Reinitializing mobile menu...');
    // Reset flags
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.removeAttribute('data-initialized');
    }
    
    // Try to initialize again
    initMobileMenu();
};

// Export functions for use in other files
window.addToCart = addToCart;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;
window.initMobileMenu = initMobileMenu;

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.querySelector('.search-suggestions');
    
    if (searchInput) {
        // Add enter key support for search
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
        
        // Focus event for search input
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.length > 0) {
                showSuggestions();
            }
        });
        
        // Input event for search input
        searchInput.addEventListener('input', showSuggestions);
    }
    
    // Click event to close search suggestions
    if (searchInput && searchSuggestions) {
        document.addEventListener('click', (event) => {
            if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
                searchSuggestions.style.display = 'none';
            }
        });
    }
    
    // Add click event to search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
}

// Initialize scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button if it doesn't exist
    if (!document.querySelector('.scroll-top')) {
        const scrollTopBtn = document.createElement('div');
        scrollTopBtn.className = 'scroll-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollTopBtn);
        
        // Add click event to scroll to top button
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        }
    });
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove all active classes first
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    let activeId = '';
    
    if (currentPage === 'index.html' || currentPage === '') {
        activeId = 'nav-home';
    } else if (currentPage === 'products.html' || currentPage.includes('product-view.html')) {
        activeId = 'nav-products';
    } else if (currentPage === 'category.html') {
        activeId = 'nav-categories';
    } else if (currentPage === 'about.html') {
        activeId = 'nav-about';
    } else if (currentPage === 'contact.html') {
        activeId = 'nav-contact';
    } else if (currentPage === 'cart.html' || currentPage === 'checkout.html' || currentPage === 'order-confirmation.html') {
        // No active nav link for cart-related pages
    } else if (currentPage === 'search.html') {
        // No active nav link for search results
    }
    
    if (activeId) {
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            // Fallback - find link by URL pattern
            document.querySelectorAll('.nav-links a').forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Ensure that the menu is properly initialized for mobile
    setTimeout(() => {
        if (window.reinitializeMobileMenu) {
            window.reinitializeMobileMenu();
        }
    }, 200);
}

// Perform search function
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = encodeURIComponent(searchInput.value.trim());
        window.location.href = `products.html?search=${searchTerm}`;
    }
}

// Sample product list for search suggestions
const products = [
    'Wireless Earbuds',
    'Smart Watch',
    'Laptop Backpack',
    'Bluetooth Speaker',
    'Smartphone',
    'Tablet',
    'Headphones',
    'Gaming Mouse',
    'Keyboard',
    'Monitor',
    'Portable Charger',
    'Camera',
    'Fitness Tracker'
];

// Show search suggestions function
function showSuggestions() {
    const searchInput = document.querySelector('.search-container input');
    const searchSuggestions = document.querySelector('.search-suggestions');
    
    if (!searchInput || !searchSuggestions) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        searchSuggestions.style.display = 'none';
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length > 0) {
        searchSuggestions.innerHTML = '';
        filteredProducts.forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'search-suggestion-item';
            suggestionItem.textContent = product;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = product;
                searchSuggestions.style.display = 'none';
                performSearch();
            });
            searchSuggestions.appendChild(suggestionItem);
        });
        searchSuggestions.style.display = 'block';
    } else {
        searchSuggestions.style.display = 'none';
    }
}

// Debounce function to prevent multiple rapid calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function to limit the rate of function calls
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
} 