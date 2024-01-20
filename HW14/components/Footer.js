class Footer {
    create() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');

        elem.innerHTML = `
            Footer
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis nulla voluptas <a href="https://google.com">aperiam esse perferendis</a>? Consequuntur aliquam quos nostrum mollitia <a href="/#news">perspiciatis</a> unde, dignissimos porro odio quo quidem deleniti pariatur aspernatur?</p>
        `;

        return elem;
    }

    init() {
        return this.create();
    }
}

const footer = new Footer().init();
export {footer};