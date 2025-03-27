import { getData } from './utils/getData.js';
import './components/cardContainer/cardContainer.js';
import CardContainer from './components/cardContainer/cardContainer.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        this.render();
    };

    async render() {
        // AQUI SE PONE LO DE LA APLICACION GRANDE
        this.shadowRoot.innerHTML = `
            <h1>FORTNITE</h1>
            <section>
                <button id="ep-1">Episode 1</button>
                <button id="ep-2">Episode 2</button>
                <button id="ep-3">Episode 3</button>
                <button id="ep-4">Episode 4</button>
                <button id="ep-5">Episode 5</button>
                <button id="ep-6">Episode 6</button>
            </section>
            <card-container></card-container>
        `;

        const data = await getData();

        const elements = data.br;

        const buttonEp1 = this.shadowRoot.getElementById('ep-1');
        const buttonEp2 = this.shadowRoot.getElementById('ep-2');
        const buttonEp3 = this.shadowRoot.getElementById('ep-3');
        const buttonEp4 = this.shadowRoot.getElementById('ep-4');
        const buttonEp5 = this.shadowRoot.getElementById('ep-5');
        const buttonEp6 = this.shadowRoot.getElementById('ep-6');

        buttonEp1.addEventListener('click', () => {
            const filteredElements = elements.filter(element => {
                if(element.introduction) {
                    return element.introduction.chapter === "1";
                }
            });
            const cardContainer = this.shadowRoot.querySelector('card-container');
            const randomElements = filteredElements.sort(() => Math.random() - 0.5);
            cardContainer.setAttribute('elements', JSON.stringify(randomElements.slice(0, 10)));
        });
        
        buttonEp2.addEventListener('click', () => {
            const filteredElements = elements.filter(element => {
                if(element.introduction) {
                    return element.introduction.chapter === "2";
                }
            });
            const cardContainer = this.shadowRoot.querySelector('card-container');
            const randomElements = filteredElements.sort(() => Math.random() - 0.5);
            cardContainer.setAttribute('elements', JSON.stringify(randomElements.slice(0, 10)));
        });

        buttonEp3.addEventListener('click', () => {
            const filteredElements = elements.filter(element => {
                if(element.introduction) {
                    return element.introduction.chapter === "3";
                }
            });
            const cardContainer = this.shadowRoot.querySelector('card-container');
            const randomElements = filteredElements.sort(() => Math.random() - 0.5);
            cardContainer.setAttribute('elements', JSON.stringify(randomElements.slice(0, 10)));
        });

        buttonEp4.addEventListener('click', () => {
            const filteredElements = elements.filter(element => {
                if(element.introduction) {
                    return element.introduction.chapter === "4";
                }
            });
            const cardContainer = this.shadowRoot.querySelector('card-container');
            const randomElements = filteredElements.sort(() => Math.random() - 0.5);
            cardContainer.setAttribute('elements', JSON.stringify(randomElements.slice(0, 10)));
        });

        buttonEp5.addEventListener('click', () => {
            const filteredElements = elements.filter(element => {
                if(element.introduction) {
                    return element.introduction.chapter === "5";
                }
            });
            const cardContainer = this.shadowRoot.querySelector('card-container');
            const randomElements = filteredElements.sort(() => Math.random() - 0.5);
            cardContainer.setAttribute('elements', JSON.stringify(randomElements.slice(0, 10)));
        });

        buttonEp6.addEventListener('click', () => {
            const filteredElements = elements.filter(element => {
                if(element.introduction) {
                    return element.introduction.chapter === "6";
                }
            });
            const cardContainer = this.shadowRoot.querySelector('card-container');
            const randomElements = filteredElements.sort(() => Math.random() - 0.5);
            cardContainer.setAttribute('elements', JSON.stringify(randomElements.slice(0, 10)));
        });
    };

    // AQUI SE PONE EL EVENTO

}

customElements.define('app-container', AppContainer);