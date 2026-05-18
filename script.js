/* ============================================
   DATOS DE PRODUCTOS
   ============================================ */

const products = [
    {
        id: 1,
        name: 'Camiseta Premium Rojo',
        category: 'Casual',
        price: 1340.99,
        emoji: '👕',
        description: 'Camiseta de algodón 100% puro'
    },
    {
        id: 2,
        name: 'Pantalón Deportivo Negro',
        category: 'Deportiva',
        price: 1590.99,
        emoji: '🩳',
        description: 'Pantalón cómodo para entrenar'
    },
    {
        id: 3,
        name: 'Hoodie Premium Blanco',
        category: 'Casual',
        price: 2790.99,
        emoji: '🧥',
        description: 'Sudadera con capucha moderna'
    },
    {
        id: 4,
        name: 'Zapatillas Deportivas',
        category: 'Zapatos',
        price: 1290.99,
        emoji: '👟',
        description: 'Zapatillas para correr con estilo'
    },
    {
        id: 5,
        name: 'Gorra Snapback Rojo',
        category: 'Accesorios',
        price: 1240.99,
        emoji: '🧢',
        description: 'Gorra ajustable modern style'
    },
    {
        id: 6,
        name: 'Camiseta Hombre Clásica',
        category: 'Hombre',
        price: 1390.99,
        emoji: '👔',
        description: 'Camiseta elegante para hombre'
    },
    {
        id: 7,
        name: 'Vestido Mujer Elegante',
        category: 'Mujer',
        price: 1900.99,
        emoji: '👗',
        description: 'Vestido premium para mujer'
    },
    {
        id: 8,
        name: 'Zapatos Formales Negro',
        category: 'Zapatos',
        price: 1490.99,
        emoji: '👞',
        description: 'Zapatos elegantes y cómodos'
    },
    {
        id: 9,
        name: 'Sudadera Deportiva Roja',
        category: 'Deportiva',
        price: 6900.99,
        emoji: '🏃',
        description: 'Sudadera para máximo rendimiento'
    },
    {
        id: 10,
        name: 'Pantalón Casual Hombre',
        category: 'Hombre',
        price: 540.99,
        emoji: '👖',
        description: 'Pantalón versátil y cómodo'
    },
    {
        id: 11,
        name: 'Bolso Premium Mujer',
        category: 'Accesorios',
        price: 1000.00,
        emoji: '👜',
        description: 'Bolso de cuero genuino'
    },
    {
        id: 12,
        name: 'Reloj Deportivo',
        category: 'Accesorios',
        price: 1179.99,
        emoji: '⌚',
        description: 'Reloj inteligente para deportistas'
    }
];

/* ============================================
   VARIABLES GLOBALES
   ============================================ */

let cart = [];
let currentFilter = 'todos';

/* ============================================
   INICIALIZACIÓN
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderProducts(products);
    setupEventListeners();
    loadCartFromStorage();
    updateCartDisplay();
}

/* ============================================
   CONFIGURAR EVENT LISTENERS
   ============================================ */

function setupEventListeners() {
    // Menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer click en un link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Carrito
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
        renderCartItems();
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Búsqueda
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Botón volver arriba
    const scrollToTop = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTop.classList.add('show');
        } else {
            scrollToTop.classList.remove('show');
        }
    });

    scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmit);

    // Animaciones al hacer scroll
    observeElements();
}

/* ============================================
   RENDERIZAR PRODUCTOS
   ============================================ */

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.emoji}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-buttons">
                <button class="product-btn btn-add-to-cart" onclick="addToCart(${product.id})">
                    Carrito
                </button>
                <button class="product-btn btn-buy-now" onclick="buyNow(${product.id})">
                    Comprar
                </button>
            </div>
        </div>
    `;
    return card;
}

/* ============================================
   FUNCIONES DEL CARRITO
   ============================================ */

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartDisplay();
    saveCartToStorage();
    showNotification(`${product.name} agregado al carrito`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCartToStorage();
    renderCartItems();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="padding: 40px; text-align: center; color: #999;">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <small style="color: #999;">Cantidad: ${item.quantity}</small>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = '$' + total.toFixed(2);
}

function buyNow(productId) {
    addToCart(productId);
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('active');
    renderCartItems();
    document.querySelector('.cart-modal').scrollIntoView({ behavior: 'smooth' });
}

function saveCartToStorage() {
    localStorage.setItem('polanco_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('polanco_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

/* ============================================
   FILTRAR PRODUCTOS
   ============================================ */

function filterProducts(category) {
    currentFilter = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    let filtered;
    if (category === 'todos') {
        filtered = products;
    } else {
        filtered = products.filter(p => p.category === category);
    }

    renderProducts(filtered);
}

/* ============================================
   BÚSQUEDA
   ============================================ */

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    renderProducts(filtered);
    
    if (filtered.length === 0) {
        showNotification('No se encontraron productos');
    }
}

/* ============================================
   VALIDACIÓN DE FORMULARIO
   ============================================ */

function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validaciones
    if (!name || name.length < 3) {
        showNotification('El nombre debe tener al menos 3 caracteres');
        return;
    }

    if (!validateEmail(email)) {
        showNotification('Por favor ingresa un email válido');
        return;
    }

    if (!phone || phone.length < 10) {
        showNotification('Por favor ingresa un teléfono válido');
        return;
    }

    if (!message || message.length < 10) {
        showNotification('El mensaje debe tener al menos 10 caracteres');
        return;
    }

    // Si todo es válido
    showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.');
    document.getElementById('contactForm').reset();
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ============================================
   NOTIFICACIONES
   ============================================ */

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #E63946 0%, #A4161A 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(230, 57, 70, 0.4);
        z-index: 3000;
        animation: slideInNotification 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar animaciones para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInNotification {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutNotification {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   INTERSECTION OBSERVER - ANIMACIONES AL SCROLL
   ============================================ */

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.product-card, .category-card, .offer-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   UTILITARIOS
   ============================================ */

// Animar números en contadores
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Función para agregar clase active después de scroll
function addScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Inicializar animaciones de scroll
addScrollAnimations();

/* ============================================
   EFECTOS DE SONIDO (Opcional)
   ============================================ */

// Crear efecto sonoro al agregar al carrito
function playAddToCartSound() {
    // Usar Web Audio API para crear un sonido simple
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

/* ============================================
   FUNCIONES AVANZADAS
   ============================================ */

// Función para animar entrada de elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });

    elements.forEach(el => observer.observe(el));
}

// Función para crear efecto parallax en hero
function createParallaxEffect() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
        }
    });
}

// Inicializar parallax
createParallaxEffect();

/* ============================================
   UTILIDADES DE ACCESIBILIDAD
   ============================================ */

// Mejorar navegación por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const cartModal = document.getElementById('cartModal');
        if (cartModal.classList.contains('active')) {
            cartModal.classList.remove('active');
        }
    }
});

// Soporte para modo oscuro (opcional)
function initializeDarkModeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        // Aplicar tema oscuro si lo prefiere el usuario
        // Implementar según sea necesario
    }
}

console.log('%c🎉 LISMELIN STORE iniciada correctamente - Tienda de Lismelin 👑', 'color: #E63946; font-size: 14px; font-weight: bold;');
