import { renderProductGrid } from './components/products.js';
import { handleCategoryChange, renderCategoryDescription, renderCategories} from './components/category.js';
import { getData } from './data.js';
import { renderPriceRangeFilters } from './components/priceFilter.js';
import { filterProducts } from './util.js';
import { renderMetalTypeFilters } from './components/metalFilter.js'
import { loadMoreHandler } from './components/loadMore.js';
import { renderSortingOptions } from './components/sort.js';


//Start the app
document.addEventListener('DOMContentLoaded', async () => {
    const [products, categories] = await Promise.all([getData('products'), getData('categories')]);


    const ctx = {
        filterProducts,
        renderProductGrid,
        renderPriceRangeFilters,
        renderMetalTypeFilters,
        products,
        categories,
        category: 'Engagement rings',
        selectedPrices: [],
        selectedMetals: [],
        filteredProducts: [],
        shownProducts: [],
        sorting: 'nameAsc',
        gridCounter: 8
    }


    //Initial load
    renderProductGrid(ctx);
    renderCategories(ctx);
    renderCategoryDescription(ctx);
    renderPriceRangeFilters(ctx);
    renderMetalTypeFilters(ctx);
    renderSortingOptions(ctx);

    //category change
    const categoriesAnchors = Array.from(document.querySelectorAll('#categories-select a'));
    categoriesAnchors.forEach(a => a.addEventListener('click', (event) => handleCategoryChange(event, ctx)));

    //load more clicked
    const loadMoreButton = document.querySelector('#load-more-btn');
    loadMoreButton.addEventListener('click', () => loadMoreHandler(ctx));
});
