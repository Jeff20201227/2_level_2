class ProductList {
    _goods;
    _allProducts;

    constructor(container = '.products') {
        this.container = container;
        // this._goods = [];
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }

    _fetchGoods() {
        this._goods = [
            {
                        id: 1,
                        title: 'Notebook',
                        img: 'img/notebook.jpg',
                        price: 20000
                    },
                    {
                        id: 2,
                        title: 'Mouse',
                        img: 'img/Mouse.jpg',
                        price: 1500
                    },
                    {
                        id: 3,
                        title: 'Keyboard',
                        img: 'img/keyboard.jpg',
                        price: 5000
                    },
                    {
                        id: 4,
                        title: 'Gamepad',
                        price: 4500
                    },
        ]

    }

    calcSum() {
        return this._goods.reduce((sum, {price}) => sum + price, 0);
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let product of this._goods) {
            const productObject = new ProductItem(product);
            console.log(productObject);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}


class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}
const productList = new ProductList();
console.log(productList.calcSum() + ' рублей');



// const products = [{
//         id: 1,
//         title: 'Notebook',
//         img: 'img/notebook.jpg',
//         price: 20000
//     },
//     {
//         id: 2,
//         title: 'Mouse',
//         img: 'img/Mouse.jpg',
//         price: 1500
//     },
//     {
//         id: 3,
//         title: 'Keyboard',
//         img: 'img/keyboard.jpg',
//         price: 5000
//     },
//     {
//         id: 4,
//         title: 'Gamepad',
//         price: 4500
//     },
// ];

// const renderProduct = (title, price, img = 'https://dummyimage.com/350x150/00ffae.jpg&text=%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0') => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <img src="${img}" alt="">
//                 <p>${price}</p>
//                 <button class="by-btn">Добавить в корзину</button>
//               </div>`;
// };

// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price, item.img)).join("");
//     console.log(productList);
//     document.querySelector('.products').innerHTML = productList;
// };


// renderProducts(products);

//document.write(products.join(""));
