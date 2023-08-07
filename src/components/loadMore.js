export function loadMoreHandler(ctx) {
    ctx.gridCounter+= 8;
    ctx.renderProductGrid(ctx);
    
}