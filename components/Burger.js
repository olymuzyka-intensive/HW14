class Burger {
    create() {
        const burgerElem = document.createElement('burger');
        burgerElem.classList.add('burger');

        burgerElem.innerHTML = `<span> </span>`;
        
        return burgerElem;
    }
    
    init() {
        this.burgerElem = this.create();

        return this.burgerElem;
    }
}

const burger = new Burger().init();
export { burger };