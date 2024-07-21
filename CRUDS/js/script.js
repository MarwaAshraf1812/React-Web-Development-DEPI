var productName = document.getElementById('ProductName');
var productPrice = document.getElementById('ProductPrice');
var productStatus = document.getElementById('ProductStatus');
var productCategory = document.getElementById('ProductCat');
var addBtnEl = document.getElementById('add');
var productTableBody = document.getElementById('TableBody');
var productIndex = 1;


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
        clearData()
        productIndex++;
    }
    else {
        alert('Please fill all fields');
    }
});

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

function clearData() {
    productName.value = '';
    productPrice.value = '';
    productStatus.value = '';
    productCategory.value = '';
}
