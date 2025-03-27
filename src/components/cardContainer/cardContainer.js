import '../card/card.js';
import Card from '../card/card.js';

class CardContainer extends HTMLElement {
    elements = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        this.render();
    };

    static get observedAttributes() {
        return ['elements'];
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'elements') {
            this.elements = JSON.parse(newValue);
            this.render();
        }
    };

    render() {
        this.shadowRoot.innerHTML = `
            <h1>Cards Info</h1>
        `;

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'center';

        // vamos a ver si podemos meter los elementos!!

        this.elements.forEach(element => {
            // const card = document.createElement('p');
            // card.textContent = element.name;
            // container.appendChild(card);

            const card = document.createElement('app-card'); // El card debe tener el mismo nombre que el componente que creamos

            card.setAttribute('name', element.name);
            card.setAttribute('description', element.description);
            card.setAttribute('image', element.images.icon);

            container.appendChild(card);
        });

        this.shadowRoot.appendChild(container);
    }
}

export default CardContainer;
customElements.define('card-container', CardContainer);