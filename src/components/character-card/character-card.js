import { LitElement, html, css } from "lit-element/lit-element.js";
import styles from "./character-card-styles";
import "@polymer/iron-icon";
import "@polymer/iron-icons";

class CharacterCard extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      character: { type: Object },
      isFavorite: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.character = {};
    this.isFavorite = false;
  }

  render() {
    return html`
      <div class="card">
        <img src=${this.character.image} alt=${this.character.name} />
        <h2>${this.character.name}</h2>
        <p>Especies: ${this.character.species}</p>
        <p>Género: ${this.character.gender}</p>
        <div class="container-icon">
          <button @click=${this.showComponentFavorite}>
            <iron-icon
              icon="favorite"
              class=${this.isFavorite ? "favorite" : ""}
            >
            </iron-icon>
          </button>
        </div>
      </div>
    `;
  }

  showComponentFavorite() {
    this.dispatchEvent(
      new CustomEvent("show-component-favorite", {
        detail: this.character,
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("character-card", CharacterCard);
