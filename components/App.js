import { header } from "./Header.js";
import { main } from "./Main.js";
import { footer } from "./Footer.js";

class App {
    #create() {
        const elem = document.createElement('div');
        elem.classList.add('app');

        return elem;
    }

    #router() {
        const getContent = async (moduleName = '') => {
            const timestamp = new Date().getTime();

            if (!moduleName) {
                let hash = location.hash;
                hash = hash.slice(1);

                if (!hash && location.pathname == '/') hash = 'home';

                if (hash.indexOf('/') != -1) hash = hash.split('/')[0];
                
                if (hash) moduleName = hash;
            }
            
            const content = await import(`./${moduleName}.js?v=${timestamp}`)
            .then(module => module.default)
            .catch(error => null);

            if (!content) {
                getContent('404');
                return;
            }

            main.innerHTML = '';
            main.append(content);
        };
        
        window.addEventListener('hashchange', () => { getContent(); });
        getContent();
    }

    #routerV2() {
        const getContent = async (moduleName = '') => {
            const timestamp = new Date().getTime();

            const content = await import(`./${moduleName}.js?v=${timestamp}`)
            .then(module => module.default)
            .catch(error => null);

            if (!content) {
                getContent('404');
                return;
            }

            main.innerHTML = '';
            main.append(content);
        };

        let links = document.querySelectorAll('a');

        links = Array.prototype.filter.call(links, (a) => {
            if ((a.hostname == 'localhost' || a.hostname == '127.0.0.1' || a.hostname == 'sitename.com') 
                && !a.hash && a.pathname != '/') return a;
        });

        links.forEach((a) => {
            a.addEventListener('click', (event) => {
                event.preventDefault();

                let name = event.target.pathname.slice(1);

                getContent(name);

                history.pushState(null, null, `/${name}`);
            })
        });
    }

    #renderHead() {
        document.head.innerHTML = `
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" href="/css/media.css">
        `;
    }

    #render() {
        if (!this.elem) return;
        if (header) this.elem.append(header);

        if (main) this.elem.append(main);

        if (footer) this.elem.append(footer);
        document.body.prepend(this.elem);
    }

    async getData() {
        // console.log('start get data');

        let data = localStorage.getItem('data');

        if (data && data.length > 0) {
            // console.log('end get local data');
            return true;
        }

        data = await fetch('https://fakestoreapi.com/products')
        .then(response => response.text());

        if (data && data.length > 0) {
            localStorage.setItem('data', data);

            // console.log('end get server data');
            
            return true;
        }
        
        return false;
    }

    async init() {
        if (!await this.getData()) return;

        // console.log('init loaded!');

        this.elem = this.#create();
        this.#renderHead();
        this.#render();

        this.#router();
        // this.#routerV2();
    }
}

export default new App().init();