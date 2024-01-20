class Product {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('product', 'page');

        const product = this.data;

        const productBtnAdd = document.createElement('button');
        productBtnAdd.classList.add('product__btn_add');
        productBtnAdd.innerHTML = 'Add to cart';

        elem.innerHTML = `
        <h1 class="product__title">${product.title}</h1>
        <div class="product__category">${product.category}</div>

        <div class="product__image"><img src="${product.image}" alt="${product.title}" /></div>
        
        <div class="product__content">
            <div class="product__description">$${product.description}</div>
            <div class="product__price">$${product.price}</div>
            <div class="product__reviews">Rate ${product.rating.rate}. Count reviews ${product.rating.count}</div>
        </div>`;

        elem.append(productBtnAdd);

        return elem;
    }

    #getProductId() {
        const id = location.href.split('/').pop();

        if (!id) return;
        return id;
    }

    #getData(id) {
        if (!id) return;

        let data = localStorage.getItem('data');
        data = JSON.parse(data);

        data = data.find((product) => product.id == id);

        if (!data || data.length == 0) return [];

        return data;
    }

    init() {
        const id = this.#getProductId();
        this.data = this.#getData(id);
        return this.create();
    }
}

const product = new Product().init();
export default product;