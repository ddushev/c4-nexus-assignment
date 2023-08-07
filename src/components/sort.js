import { render, html } from '../lib.js';

const sortContainer = document.querySelector('.sorting');

//Function to render sorting options
export function renderSortingOptions(ctx) {

    const sortingTemplate = () => html`
    <label for="sort-select">Sort by:</label>
    <select @change=${onClick} id="sort-select">
      <option value="nameAsc">Alphabetical (A-Z)</option>
      <option value="nameDesc">Alphabetical (Z-A)</option>
      <option value="priceAsc">Price (Low to High)</option>
      <option value="priceDesc">Price (High to Low)</option>
    </select>`

    render(sortingTemplate(), sortContainer);
  
    function onClick(event) {
        ctx.sorting = event.target.value;
        ctx.renderProductGrid(ctx);
    }
}

