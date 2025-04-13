
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
$(document).ready(function() {
    $('.hero-section h1').animate({
        opacity: 1,
        marginTop: '0px'
    }, 800);
    
    $('.hero-section p').delay(300).animate({
        opacity: 1,
        marginTop: '0px'
    }, 800);
});
    
function setupProductCardHover() {
    $('.product-card').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'transition': 'transform 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'transition': 'transform 0.3s ease'
            });
        }
    );
}


$(document).ready(function() {
 
    
    renderProducts();
    setupProductCardHover();
    

});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
