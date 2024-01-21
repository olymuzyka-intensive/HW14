class Footer {
    create() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');

        elem.innerHTML = `
            <p>Favorite brands and the hottest trends</p>
        `;

        return elem;
    }

    init() {
        return this.create();
    }
}

const footer = new Footer().init();
export {footer};