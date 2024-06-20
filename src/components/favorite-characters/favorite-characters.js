import {LitElement, html, css} from 'lit-element/lit-element.js';
import styles from './favorite-characters-styles'
import '../character-card/character-card.js';

class FavoriteCharacters extends LitElement {
    static get styles() {
        return [styles]
    }

    static get properties() {
        return {
            favorites: {type: Array}
        }
    }

    constructor(){
        super();
        this.favorites = [];
        this.showComponentFavorite = () => {};
    }

    render() {
        return html`
           <div class="favorites-container">
            ${this.favorites.map((character) => html`
                <character-card
                .character=${character}
                .isFavorite=${true}
                @show-component-favorite=${() => this.showComponentFavorite(character)}
                >
                </character-card>
            `)}
           </div>
        `;
    }
}

customElements.define('favorite-characters', FavoriteCharacters);