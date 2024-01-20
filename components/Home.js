class Home {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('home', 'page');

        elem.innerHTML = `<h1>New products</h1>`;

        const catalogElem = document.createElement('div');
        catalogElem.classList.add('catalog__list');

        this.data.reverse();
        this.data.length = 10;

        this.data.forEach((product) => {
            const productElem = document.createElement('div');
            productElem.classList.add('product');

            const productBtnAdd = document.createElement('button');
            productBtnAdd.classList.add('product__btn_add');
            productBtnAdd.innerHTML = 'Add to cart';

            productElem.innerHTML = `
            <img class="product__image" src="${product.image}" alt="${product.title}" />
            <a class="product__title" href="/#product/${product.id}">${product.title}</a>
            <div class="product__price">$${product.price}</div>
            `;

            productElem.append(productBtnAdd);
            catalogElem.append(productElem);
        });

        elem.append(catalogElem);

        return elem;
    }

    #getData() {
        let data = localStorage.getItem('data');
        data = JSON.parse(data);

        if (!data || data.length == 0) return [];

        return data;
    }

    init() {
        this.data = this.#getData();
        return this.create();
    }
}

const home = new Home().init();
export default home;