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

// handles adding new products, saving them to local storage, and updating the table.
addBtnEl.addEventListener('click', function() {
    if (productName.value && productPrice.value && productStatus.value && productCategory.value) {
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

// handles deleting a data from inputs
resetBtnEl.addEventListener('click', function() {
    resetData();
});

// handles deleting all data from local storage and the table
clearBtnEl.addEventListener('click', function() {
    localStorage.removeItem('products');
    productTableBody.innerHTML = '';
    productIndex = 1;
});

// handles adding a new row to the product table with the given product's details and action buttons for deleting and updating.
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
            <button class="btn btn-success text-white" onclick="updateproduct(this, ${product.Index})">Update</button>
        </td>
    `;
    productTableBody.appendChild(newRow);
}

// resets the input fields
function resetData() {
    productName.value = '';
    productPrice.value = '';
    productStatus.value = '';
    productCategory.value = '';
}

// save the product to local storage. It retrieves the existing products, adds the new product to the list, and saves it back to local storage.
function saveProductsToLocal(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

// deletes the product row from the table and local storage
function deleteProduct(button, index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.Index !== index);
    localStorage.setItem('products', JSON.stringify(products));
    button.parentElement.parentElement.remove();
}

// updates the product row in the table and local storage
function updateproduct(button, index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    // find: Return the first element which satisfies the condition
    let product = products.find(product => product.Index === index);
    productName.value = product.Name;
    productPrice.value = product.Price;
    productStatus.value = product.Status;
    productCategory.value = product.Category;
    deleteProduct(button, index);
}

// filters the products based on the search input
searchInput.addEventListener('input', function() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let searchValue = searchInput.value.toLowerCase();
    productTableBody.innerHTML = '';
    products.forEach(product => {
        if (product.Name.toLowerCase().includes(searchValue) || product.Category.toLowerCase().includes(searchValue) || product.Status.toLowerCase().includes(searchValue)) {
            addProductToTable(product);
        }
    });
});

// displays the products from local storage
function displayProducts() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
        addProductToTable(product);
        productIndex++;
    });
};

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
