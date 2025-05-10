// Global Component initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hamburger menu functionality
    const initGlobalMobileMenu = function() {
        const header = document.getElementById('header');
        
        // If header is already loaded
        if (header && header.querySelector('.hamburger')) {
            initializeMobileMenu();
        } else {
            // If header isn't loaded yet, wait for the headerLoaded event
            document.addEventListener('headerLoaded', initializeMobileMenu);
        }
    };
    
    // Function to initialize hamburger menu
    function initializeMobileMenu() {
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
            
            // Remove any existing click handlers
            const newHamburger = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(newHamburger, hamburger);
            
            // Add event listeners
            newHamburger.addEventListener('click', toggleMenu);
            
            // Close menu when clicking on overlay
            overlay.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
            
            // Close menu when clicking on nav links
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 992 && navLinks.classList.contains('active')) {
                        toggleMenu();
                    }
                });
            });
            
            // Close menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    newHamburger.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            console.log('Mobile menu initialized by components.js');
            
            // Set active nav link
            setActiveNavLink();
        }
    }
    
    // Set active nav link for the current page
    function setActiveNavLink() {
        try {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            // Remove all active classes first
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
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
            if (!activeId && currentPage.includes('product-view.html')) {
                activeId = 'nav-products';
            }
            
            // Apply active class to the correct nav item
            if (activeId) {
                const activeLink = document.getElementById(activeId);
                if (activeLink) {
                    activeLink.classList.add('active');
                } else {
                    // Fallback to URL matching
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        if (link.getAttribute('href') === currentPage) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        } catch (error) {
            console.error('Error setting active nav link:', error);
        }
    }
    
    // Initialize the mobile menu
    initGlobalMobileMenu();
    
    // Rerun initialization when window is fully loaded (to catch any late DOM changes)
    window.addEventListener('load', function() {
        setTimeout(initGlobalMobileMenu, 500);
    });
    
    // Make the setActiveNavLink function available globally
    window.setComponentActiveNavLink = setActiveNavLink;
}); 