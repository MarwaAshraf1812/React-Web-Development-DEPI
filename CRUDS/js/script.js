var productName = document.getElementById('ProductName');
var productPrice = document.getElementById('ProductPrice');
var productStatus = document.getElementById('ProductStatus');
var productCategory = document.getElementById('ProductCat');
var addBtnEl = document.getElementById('add');
var resetBtnEl = document.getElementById('reset');
var clearBtnEl = document.getElementById('clear');
var searchInput = document.getElementById('search');
var productTableBody = document.getElementById('TableBody');
var productIndex = 1;


// retrieves and displays products from local storage when the page loads.
displayProducts();


// handles adding new products, saving them to local storage, and updating the table.
addBtnEl.addEventListener('click', function(product) {
    if(productName.value && productPrice.value && productStatus.value && productCategory.value ) {
        var product = {
            'Index': productIndex,
            'Name': productName.value,
            'Price': productPrice.value,
            'Category': productCategory.value,
            'Status': productStatus.value,
        }
        addProductToTable(product);
        saveProductsToLocal(product);
        resetData()
        productIndex++;
    }
    else {
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


/* handls to adding a new row to the product table 
with the given product's details and action buttons for deleting and updating.
*/
function addProductToTable(product) {
    var newRow = document.createElement('tr');
    newRow.innerHTML=  `
            <td>${product.Index}</td>
            <td>${product.Name}</td>
            <td>${product.Price}</td>
            <td>${product.Status}</td>
            <td>${product.Category}</td>
            <td>
                <button class="btn btn-danger text-white" onclick="deleteRow(this)">Delete</button>
                <button class="btn btn-success text-white" onclick="updateRow(this)">Update</button>
            </td>
        `;
        TableBody.appendChild(newRow);
}


function resetData() {
    productName.value = '';
    productPrice.value = '';
    productStatus.value = '';
    productCategory.value = '';
}


/*
save the product to local storage. It retrieves the existing products, 
adds the new product to the list, and saves it back to local storage.
*/
function saveProductsToLocal(product) {
    /*
    - retrieves the string associated with the key 'products' from the local storage
    - parses the string to convert it to an array of objects or an empty array if the string is null
    - adds the new product to the array
    */
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function displayProducts(){
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
        addProductToTable(product);
        productIndex++;
    });
}


// deletes the product row from the table and local storage
function deleteRow(button, index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.Index !== index);
    localStorage.setItem('products', JSON.stringify(products));
    button.parentElement.parentElement.remove();
}

// updates the product row in the table and local storage
