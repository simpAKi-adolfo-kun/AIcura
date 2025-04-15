const Products = [
    {
        id: 1,
        name: "Cura SmartWatch",
        price: 59.99,
        image: "images/media/smartwatch.jpg",
        description: "Our Very Own AI powered SmartWatch."
    },
    {
        id: 2,
        name: "Cura Smart Camera",
        price: 79.89,
        image: "images/media/camera.jpg",
        description: "AI Powered Camera with night vision capabilities."
    },
    {
        id: 3,
        name: "Cura Home Assistant",
        price: 139.99,
        image: "images/media/Assitant.jpg",
        description: "Our very own AI Home Assistant, Capable of Communicating in 25 languages."
    },
    {
        id: 4,
        name: "Cura AI Hub",
        price: 299.39,
        image: "images/media/hub.jpg",
        description: "The single tool to make every Device powered by our AI."
    }
];

function renderProducts() {
    const container = document.querySelector('.products-container');
    container.style.display = 'none'
    container.innerHTML = ''; 
    
    Products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price.toFixed(2)}</div>
            </div>
        `;
        container.appendChild(productCard);
    });
}
$('.products-container').hide();
setTimeout(function() {
    renderProducts();
    setupProductCardHover();
});
    
  
    $('.loading').fadeOut(400, function() {
       
        $('.products-container').fadeIn(600);
    });
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeButtonText();
}
function updateThemeButtonText() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const button = document.querySelector('.theme-toggle');
    if (button) {
        button.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

function initializeTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    updateThemeButtonText();
}
function createThemeToggle() {
    const nav = document.querySelector('nav ul');
    if (nav) {
        const li = document.createElement('li');
        li.innerHTML = '<button class="theme-toggle">🌙 Dark Mode</button>';
        nav.appendChild(li);
        
        const button = li.querySelector('.theme-toggle');
        button.addEventListener('click', toggleTheme);
    }
}

$(document).ready(function() {
    initializeTheme();
    createThemeToggle();
    
    $('.hero-section h1').animate({
        opacity: 1,
        marginTop: '0px'
    }, 800);
    
    $('.hero-section p').delay(300).animate({
        opacity: 1,
        marginTop: '0px'
    }, 800);
    
   
    $('.loading').show();
    setTimeout(() => {
        $('.loading').hide();
        renderProducts();
    }, 1500);
});

function setupProductCardHover() {
    $('.product-card').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 6px 12px var(--shadow-color)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 4px 8px var(--shadow-color)'
            });
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupProductCardHover();
});
