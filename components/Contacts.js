class Contacts {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('page');

        elem.innerHTML = '<h1>Contacts</h1>';

        return elem;
    }

    init() {
        return this.create();
    }
}

const contacts = new Contacts().init();
export default contacts;