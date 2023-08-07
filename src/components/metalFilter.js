import { html, render } from '../lib.js';
const container = document.querySelector('.metal-filter');

//Function to render metal filters
function renderMetalTypeFilters(ctx) {
    const allMetalTypes = ctx.filteredProducts.map(product => product.metal);
    let uniqueMetalTypes = [];
    allMetalTypes.forEach(metal => {
        uniqueMetalTypes.includes(metal) ? null : uniqueMetalTypes.push(metal);
    });
    const metalFilterTemplate = (metalTypes) => html`
        <h4>Filter by Metal</h4>
            ${metalTypes.map(inputRowTemplate)}`

    const inputRowTemplate = (metal) => html`
        <label>
          <input type="checkbox" name="metal" value=${metal}> ${metal}
        </label>
    `
    Array.from(document.querySelectorAll('input[name="metal"]')).forEach(input => input.checked = false);
    render(metalFilterTemplate(uniqueMetalTypes), container);
    Array.from(document.querySelectorAll('input[name="metal"]')).forEach(el => {
        el.removeEventListener('click', handleMetalFilterChange);
        el.addEventListener('click', () => handleMetalFilterChange(ctx))
      });
}

function handleMetalFilterChange(ctx) {
    ctx.selectedMetals = [];
    Array.from(document.querySelectorAll('input[name="metal"]')).forEach(input => input.checked ? ctx.selectedMetals.push(input.value) : null);
    ctx.renderProductGrid(ctx);
  }

export {
    renderMetalTypeFilters,
    handleMetalFilterChange
}