// script.js

// Product data
const products = [
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 50 },
];

// Shopping cart
let cart = [];

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        console.log(`Added ${product.name} to cart.`);
    } else {
        console.log('Product not found.');
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    console.log(`Removed product with ID ${productId} from cart.`);
}

// Function to display cart contents
function displayCart() {
    console.log('Shopping Cart:');
    cart.forEach(item => {
        console.log(`- ${item.name}: $${item.price} x ${item.quantity}`);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const productId = parseInt(event.target.productId.value);
    addToCart(productId);
    displayCart();
}

// Sample form handling (assuming an HTML form is present)
document.getElementById('productForm').addEventListener('submit', handleFormSubmit);
