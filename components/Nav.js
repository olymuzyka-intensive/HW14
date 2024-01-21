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


class Burger {
    create() {
        const burgerElem = document.createElement('burger');
        burgerElem.classList.add('burger');

        burgerElem.innerHTML = `<span> </span>`;
        burgerElem.addEventListener('click', function(){
            this.classList.toggle('active');
            document.querySelector('.nav').classList.toggle('open')
        });  
        
        return burgerElem;
    }
    
    init() {
        this.burgerElem = this.create();

        return this.burgerElem;
    }
}

const burger = new Burger().init();
export { burger };