document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productSection = document.getElementById('products');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart('${product._id}')">Add to Cart</button>
                `;
                productSection.appendChild(productCard);
            });
        });
});

function addToCart(productId) {
    // Implement the add to cart functionality
    console.log(`Product ${productId} added to cart`);
}
