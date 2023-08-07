import { html, render } from '../lib.js';
const productContainer = document.querySelector('.product-grid');
const counterContainer = document.querySelector('.product-counter');
const loadMoreButton = document.querySelector('#load-more-btn');
const cartAlert = document.getElementById('cartAlert');


// Function to render product tiles
function renderProductGrid(ctx) {

    ctx.filteredProducts = ctx.filterProducts(ctx);
    //Logic to display appropriate items in the grid
    if (ctx.shownProducts.length > ctx.filteredProducts.length) {
        ctx.gridCounter = 8;
    }

    if (ctx.filteredProducts.length >= ctx.gridCounter - 8) {
        ctx.shownProducts = ctx.filteredProducts.slice(0, ctx.gridCounter);
    }

    if (ctx.filteredProducts.length < 8) {
        ctx.shownProducts = ctx.filteredProducts.slice(0, ctx.filteredProducts.length)
    }

    if (ctx.shownProducts.length != ctx.filteredProducts.length) {
        loadMoreButton.style.display = 'block';
    } else {
        loadMoreButton.style.display = 'none';
    }
    //Logic to sort items
    if (ctx.sorting == 'nameAsc') {
        ctx.shownProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (ctx.sorting == 'nameDesc') {
        ctx.shownProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (ctx.sorting == 'priceAsc') {
        ctx.shownProducts.sort((a, b) => (a.price * (100 - a.discount) / 100) - (b.price * (100 - b.discount) / 100));
    } else if (ctx.sorting == 'priceDesc') {
        ctx.shownProducts.sort((a, b) => (b.price * (100 - b.discount) / 100) - (a.price * (100 - a.discount) / 100));
    }

    const productTemplate = (product) => html`
            <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Metal: ${product.metal}</p>
            <p>${product.description}</p>
            ${product.discount == 0 
                ? html`<p>Price: $${product.price}</p>` 
                : html`<p>Price: <s>${product.price}</s> $${product.price  * (100 - product.discount) / 100}</p>`}
            
            <p>Ratings: ${product.rating} stars</p>
            <button @click= ${onClick} class="add-to-cart">Add to Cart</button>
        </div>`

    const countTemplate = (ctx) => html`
        <span id="product-count">${ctx.shownProducts.length}</span> out of <span id="total-products">${ctx.filteredProducts.length} products</span>
    `
    render(countTemplate(ctx), counterContainer);
    render(ctx.shownProducts.map(productTemplate), productContainer);
}
//Handle add to cart event
function onClick() {
    cartAlert.style.display = 'block';
    setTimeout(() => {
        cartAlert.style.display = 'none';
    }, 2000);
}


export {
    renderProductGrid
}