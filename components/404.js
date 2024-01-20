class P404 {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('page');

        elem.innerHTML = `
            <h1>Страница не найдена</h1>
            <p>Попробуйте начать с главной страницы по <a href="/">ссылке</a></p>
        `;

        return elem;
    }

    init() {
        return this.create();
    }
}

const p404 = new P404().init();
export default p404;