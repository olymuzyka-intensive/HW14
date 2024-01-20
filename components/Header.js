import { nav } from "./Nav.js";

class Header {
    #create() {
        const elem = document.createElement('header');
        elem.classList.add('header');

        elem.innerHTML = `
        <p>THE WIDEST SELECTION AND GUARANTEED BEST DEALS</p>
        `;

        return elem;
    }

    init() {
        const elem = this.#create();

        if (nav) elem.append(nav);

        return elem;
    }
}

const header = new Header().init();
export {header};