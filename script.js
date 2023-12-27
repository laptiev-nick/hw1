document.addEventListener("DOMContentLoaded", function () {
    let categoriesContainer = document.querySelector('.categories-container');
    let productsContainer = document.querySelector('.products-container');
    let productInfoContainer = document.querySelector('.product-info-container');

    let categoryList = categoriesContainer.querySelector('.categories');
    let productList = productsContainer.querySelector('.products');
    let productInfoDiv = productInfoContainer.querySelector('.product__info');

    const getRequest = (url, callback) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(JSON.parse(xhr.responseText));
            }
        };

        xhr.send();
        
    }

    const loadCategories = () => {
        getRequest('https://fakestoreapi.com/products/categories', categories => {
            showCategories(categories);
        });
    }

    const loadProductsByCategory = category => {
        getRequest('https://fakestoreapi.com/products/category/' + category, products => {
            showProducts(products);
        });
    }

    const showCategories = categories => {
        categories.forEach(category => {
            let categoryElement = document.createElement('div');
            categoryElement.textContent = category;
            
            categoryElement.addEventListener('click', () => {
                loadProductsByCategory(category);
            });

            categoryList.appendChild(categoryElement);
        });
    }

    const showProducts = products => {
        clearContainer(productList);
        clearContainer(productInfoDiv);

        products.forEach(product => {
            let productEl = createProductEl(product);
            productList.appendChild(productEl);
        });
    }

    const showProductInfo = product => {
        clearContainer(productInfoDiv);

        let title = document.createElement('h2');
        title.textContent = product.title;

        let price = document.createElement('p');
        price.textContent = 'Price: $' + product.price;

        let description = document.createElement('p');
        description.textContent = 'Description: ' + product.description;

        let buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';

        buyButton.addEventListener('click', () => {
            alert('Product is bought!');
            clearContainer(productList);
            clearContainer(productInfoDiv);
        });

        productInfoDiv.appendChild(title);
        productInfoDiv.appendChild(price);
        productInfoDiv.appendChild(description);
        productInfoDiv.appendChild(buyButton);
    }

    const clearContainer = container => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    const createProductEl = product => {
        let productEl = document.createElement('div');
       
        productEl.classList.add('product');
        productEl.textContent = product.title;

        productEl.addEventListener('click', () => {
            showProductInfo(product);
        });

        return productEl;
    }

    loadCategories();
});
