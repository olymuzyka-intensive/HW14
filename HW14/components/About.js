class About {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('page');

        elem.innerHTML = '<h1>About</h1>';

        return elem;
    }

    init() {
        return this.create();
    }
}

const about = new About().init();
export default about;