# PLP for E-store

# Overview
PLP on which you can choose between three categories, filter based on two criterias simultaneously, sort by number of criterias and add to cart a specific product. You can find the PLP on this link - https://c4-nexus.github.io/

# Technical stack
1. HTML
2. CSS
3. JS
4. Lit-html

# To install locally
1. Clone https://github.com/c4-nexus/c4-nexus.github.io.git
2. Open index.html with live server or other preffered local server

# Implementation
- Most of the components (categories, category description, products' grid, price and metal filters) are dynamically built using lit-html templating library based on the data fetched from the '/data/' folder stored as JSON(/data/products.json and /data/categories.json)

- The app is initialized from the 'main.js' file after the DOMContentLoaded event is triggered. Most of the components(category,product,filters,sorting and load more handlers and render functions) are imported and along with other needed information are attached to the 'ctx' object to be shared between modules with dependancy injection in order to avoid circular dependancy.

- Header - made to be sticky using CSS and also to navigate between the categories. Every time a new category is selected the category name, category description, product grid and the filters are re-rendered based on the fetched data. Only the selected sorting option is kept. Initially only 8 products will be displayed in the product grid when a category is selected.

- Product counter(x of y products) - showing the number of products in the current category based on selected filters(number Y) and the number of currently displayed products(number X) in the product grid.

- Product grid - fetching the data according to the selected category. Using CSS to achieve a grid-like structure initially loading 2 rows with 4 items per row and adding 2 more rows with every 'Load more' button click. Every product is displayed with the respective information for image, name, metal type short description, price, rating and 'Add to cart' button.

- Filters - Checkboxes to filter the data based on price of the products or their metal type.
The price filters are rendered based on the minimal and maximum product price for the selected category with range of 1000 units($). The metal type is also rendered based on all metal types for the currently selected category. Multiple price ranges and metal types can be selected at a time resulting in combined filtering capabilities. For desktop users the filters are positioned on the left of the product grid and for mobile users on top of it. 

- Sorting - products can be sorted based on price or name in ascending or descending order

- Load more - if more products are available than the initially 8 which are displayed pressing the button will load 8 more or the remaining if less than 8 and the button will disapear.

- Footer - static section containing set of links e.g., T&C, Privacy Policy, Contact Us
