class Card extends HTMLElement {
    // USAREMOS SOLO DATOS RELEVANTES PARA LOS ATRIBUTOS (POR EK EJEMPLO SOLO USARE ESOS 3)
    name;
    description;
    image;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    static get observedAttributes() {
        return ['name', 'description', 'image'];
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'name') {
            this.name = newValue;
        }
        if(name === 'description') {
            this.description = newValue;
        }
        if(name === 'image') {
            this.image = newValue;
        }
        this.render();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        this.shadowRoot.innerHTML = `
            <div style="border: 1px solid black; margin: 10px; padding: 10px; width: 200px;">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <img src="${this.image}" alt="${this.name}" style="width: 100px; height: 100px;">
            </div>
        `;
    }
}

export default Card;
customElements.define('app-card', Card);