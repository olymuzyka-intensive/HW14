class Nav {
    create() {
        const elem = document.createElement('nav');
        elem.classList.add('nav');

        elem.innerHTML = `
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#shop">Shop</a></li>
            <li><a href="/#contacts">Contacts</a></li>
        </ul>
        `;

        return elem;
    }

    init() {
        this.elem = this.create();

        return this.elem;
    }
}

const nav = new Nav().init();
export {nav};