import { html, render } from "../lib.js";
const container = document.querySelector('.price-filter');

//Function to render price filters
function renderPriceRangeFilters(ctx) {
  const allPrices = ctx.filteredProducts.map(product => product.price);
  const maxPrice = Math.ceil(Math.max(...allPrices));
  const minPrice = Math.floor(Math.min(...allPrices));
  const priceRanges = [];
  for (let i = minPrice; i < maxPrice; i += 1000) {
    priceRanges.push(i);
  }
  
  const priceRangeTemplate = (priceRanges) => html`
        <h4>Filter by Price</h4>
        ${priceRanges.map(inputRowTemplate)}`

  const inputRowTemplate = (initialValue) => html`
        <label>
          <input  type="checkbox" name="price" value=${`${initialValue}-${(initialValue + 999.99).toFixed(2)}`}>
           ${`${initialValue}-${(initialValue + 999.99).toFixed(2)}`}
        </label>`

  Array.from(document.querySelectorAll('input[name="price"]')).forEach(input => input.checked = false);
  render(priceRangeTemplate(priceRanges), container);
  Array.from(document.querySelectorAll('input[name="price"]')).forEach(el => {
    el.removeEventListener('click', handlePriceFiltering);
    el.addEventListener('click', () => handlePriceFiltering(ctx))
  });
}


function handlePriceFiltering(ctx) {
  ctx.selectedPrices = [];
  Array.from(document.querySelectorAll('input[name="price"]')).forEach(input => input.checked ? ctx.selectedPrices.push(input.value) : null);
  ctx.renderProductGrid(ctx);
}


export {
  renderPriceRangeFilters,
  handlePriceFiltering
}