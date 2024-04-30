document.querySelectorAll('.product').forEach(product => {
    const name = product.getAttribute('data-name');
    const wishlistBtn = product.querySelector('.wishlist');
    const cartBtn = product.querySelector('.cart');
    const buyBtn = product.querySelector('.buy');
 
    wishlistBtn.addEventListener('click', (e) => {
       e.preventDefault();
       console.log(`Added ${name} to wishlist`);
       // Implement your logic to add to wishlist here
    });
 
    cartBtn.addEventListener('click', (e) => {
       e.preventDefault();
       console.log(`Added ${name} to cart`);
       // Implement your logic to add to cart here
    });
 
    buyBtn.addEventListener('click', (e) => {
       e.preventDefault();
       console.log(`Buy ${name} now`);
       // Implement your logic to handle buy now here
    });
 });
 