//Function to filter products based on multi criteria
function filterProducts(ctx) {
    //get products for the specific category
    ctx.filteredProducts = ctx.products.filter(product => product.category == ctx.category);

    //filter based on price
    if (ctx.selectedPrices && ctx.selectedPrices.length != 0) {
        ctx.filteredProducts = ctx.filteredProducts.filter(product => {
            let isInFilter = false;
            ctx.selectedPrices.forEach(price => {
                if (product.price * (100 - product.discount) / 100 >= price.split('-')[0] 
                && product.price * (100 - product.discount) / 100 <= price.split('-')[1]) {
                    isInFilter = true;
                }
            })
            return isInFilter;
        })
    }
    //filter based on metal type
    if (ctx.selectedMetals && ctx.selectedMetals.length != 0) {
        ctx.filteredProducts = ctx.filteredProducts.filter(product => {
            let isInFilter = false;
            ctx.selectedMetals.forEach(metal => {
                if (product.metal == metal) {
                    isInFilter = true;
                }
            })
            return isInFilter;
        })
    }
    return ctx.filteredProducts;
}

export { filterProducts };