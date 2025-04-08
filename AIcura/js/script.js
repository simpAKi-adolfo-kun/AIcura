//  Product Data
const Products = [
    {
        id: 1,
        name: "Cura SmartWatch",
        price: 59.99,
        image: "images\media\smartwatch.jpg",
        description: "Our Very Own AI powered SmartWatch."
    },
    {
        id: 2,
        name: "Cura Smart Camera",
        price: 79.89,
        image: "images\media\camera.jpg",
        description: "AI Powered Camera with night vision capabilities."
    },
    {
        id: 3,
        name: "Cura Home Assistant",
        price: 139.99,
        image: "images\media\Assitant.jpg",
        description: "Our very own AI Home Assistent, Capable of Communicating in 25 languages."
    },
    {
        id: 4,
        name: "Cura AI HuB",
        price: 299.39,
        image: " images\media\hub.jpg",
        description: "The single tool to make every Device powered by our AI."
    }
];

// Render  Products
function renderProducts() {
    const container = $('.products-');
    
    Products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${images}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <button class="view-btn">View Details</button>
                </div>
            </div>
        `;
        container.append(productCard);
    });images
}

// Initialize  Page
$(document).ready(() => {
    renderProducts();

    $(document).on('mouseenter', 'view-btn', function () {
        $(this).css('background-color', ' #3498db');
    }).on('mouseleave', 'view-btn', function () {
        $(this).css('background-color', ' #2980b9');
    });
});