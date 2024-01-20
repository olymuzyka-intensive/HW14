class Main {
    create() {
        const elem = document.createElement('main');
        elem.classList.add('main');

        return elem;
    }

    init() {
        return this.create();
    }
}

const main = new Main().init();
export {main};