// Element References
var productName = document.getElementById('ProductName');
var productPrice = document.getElementById('ProductPrice');
var productStatus = document.getElementById('ProductStatus');
var productCategory = document.getElementById('ProductCat');
var addBtnEl = document.getElementById('add');
var resetBtnEl = document.getElementById('reset');
var clearBtnEl = document.getElementById('clear');
var productTableBody = document.getElementById('TableBody');
var searchInput = document.getElementById('search');
var productIndex = 1;

// Regular Expressions for Validation
const productRegex = /^[a-zA-Z\s]+$/;
const productPriceRegex = /^[0-9]+$/;

// Validation Function
function isValidProductInputs(productName, productPrice, productCategory, productStatus) {
    if (!productRegex.test(productName)) {
        alert('Invalid Product Name');
        return false;
    }
    if (!productPriceRegex.test(productPrice)) {
        alert('Invalid Product Price');
        return false;
    }
    if (!productRegex.test(productCategory)) {
        alert('Invalid Product Category');
        return false;
    }
    if (!productRegex.test(productStatus)) {
        alert('Invalid Product Status');
        return false;
    }
    return true;
}


// Add Product Event Handler
addBtnEl.addEventListener('click', function() {
    if (isValidProductInputs(productName.value, productPrice.value, productCategory.value, productStatus.value)) {
        var product = {
            'Index': productIndex,
            'Name': productName.value,
            'Price': productPrice.value,
            'Category': productCategory.value,
            'Status': productStatus.value,
        };
        addProductToTable(product);
        saveProductsToLocal(product);
        resetData();
        productIndex++;
    } else {
        alert('Please fill all fields');
    }
});

// Add Product to Table
function addProductToTable(product) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${product.Index}</td>
        <td>${product.Name}</td>
        <td>${product.Price}</td>
        <td>${product.Status}</td>
        <td>${product.Category}</td>
        <td>
            <button class="btn btn-danger text-white" onclick="deleteProduct(this, ${product.Index})">Delete</button>
            <button class="btn btn-success text-white" onclick="updateProduct(this, ${product.Index})">Update</button>
        </td>
    `;
    swapButtonTo('Add Product');
    productTableBody.appendChild(newRow);
}

// Reset Input Fields
function resetData() {
    productName.value = '';
    productPrice.value = '';
    productStatus.value = '';
    productCategory.value = '';
}

// Reset Input Fields Event Handler
resetBtnEl.addEventListener('click', resetData);

// Clear All Products Event Handler
clearBtnEl.addEventListener('click', function() {
    localStorage.removeItem('products');
    productTableBody.innerHTML = '';
    productIndex = 1;
});

// Filters the products based on the search input
searchInput.addEventListener('input', function() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let searchValue = searchInput.value.toLowerCase();
    productTableBody.innerHTML = '';
    products.forEach(product => {
        // includes: It takes a substring argument and it checks if substring argument exists in the string
        if (product.Name.toLowerCase().includes(searchValue) || product.Category.toLowerCase().includes(searchValue) || product.Status.toLowerCase().includes(searchValue)) {
            addProductToTable(product);
        }
    });
});

// Delete Product from Local Storage and Table
function deleteProduct(button, index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.Index !== index);
    localStorage.setItem('products', JSON.stringify(products));
    button.parentElement.parentElement.remove();
}

// updates the product in the table and local storage
function updateProduct(button, index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    // find: Return the first element which satisfies the condition
    let product = products.find(product => product.Index === index);
    productName.value = product.Name;
    productPrice.value = product.Price;
    productStatus.value = product.Status;
    productCategory.value = product.Category;
    deleteProduct(button, index);
    swapButtonTo('Update Product');
}

// Swap Button Text
function swapButtonTo(action) {
    addBtnEl.textContent = action;
}

// save the product to local storage
function saveProductsToLocal(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

// Display Products from Local Storage
function displayProducts() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
        addProductToTable(product);
        productIndex++;
    });
};

// Load Products on DOM Content Loaded
document.addEventListener('DOMContentLoaded', displayProducts);
