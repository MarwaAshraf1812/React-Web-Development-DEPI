# Product Management CRUD Application

This is a simple product management application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of products. The application uses vanilla JavaScript for the front-end logic and `localStorage` for storing the product data.

## Features

- Add new products with name, price, category, and status.
- Validate product inputs using regular expressions.
- Display products in a table format.
- Search for products by name, category, or status.
- Update existing products.
- Delete individual products.
- Clear all products from the table and `localStorage`.
- Responsive user interface.

## Getting Started

### Prerequisites

To run this application, you only need a modern web browser that supports JavaScript and `localStorage`.

### Usage

1. **Add a Product**:
    - Fill in the "Product Name", "Product Price", "Product Category", and "Product Status" fields.
    - Click the "Add Product" button.
    - The product will be added to the table and saved to `localStorage`.

2. **Reset Input Fields**:
    - Click the "Reset" button to clear all input fields.

3. **Clear All Products**:
    - Click the "Clear" button to remove all products from the table and `localStorage`.

4. **Search for Products**:
    - Type in the search input to filter products by name, category, or status.

5. **Update a Product**:
    - Click the "Update" button next to a product in the table.
    - The product details will be loaded into the input fields.
    - Modify the details and click the "Update Product" button to save changes.

6. **Delete a Product**:
    - Click the "Delete" button next to a product in the table to remove it.

## Code Structure

- `index.html`: Contains the HTML structure of the application.
- `styles.css`: Contains the CSS styles for the application.
- `scripts.js`: Contains the JavaScript logic for managing products.

## JavaScript Functions

- `isValidProductInputs(productName, productPrice, productCategory, productStatus)`: Validates product inputs using regular expressions.
- `addProductToTable(product)`: Adds a product to the table.
- `resetData()`: Resets the input fields.
- `deleteProduct(button, index)`: Deletes a product from the table and `localStorage`.
- `updateProduct(button, index)`: Loads a product's details into the input fields for editing.
- `swapButtonTo(action)`: Changes the text of the add/update button.
- `saveProductsToLocal(product)`: Saves a product to `localStorage`.
- `displayProducts()`: Displays all products from `localStorage`.

## Regular Expressions

- `productRegex`: `^[a-zA-Z\s]+$` - Matches product names, categories, and statuses containing alphabetic characters and spaces.
- `productPriceRegex`: `^[0-9]+$` - Matches product prices containing numeric characters only.

## Acknowledgements

- This project uses vanilla JavaScript and `localStorage` for simplicity and ease of learning.
- Inspired by various CRUD tutorial projects available online.

Feel free to modify and use this application as needed for your projects.
