import { LitElement, html } from "lit-element";
import styles from "./home-page-styles";
import "../components/character-card/character-card.js";
import "../components/favorite-characters/favorite-characters.js";

class HomePage extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      characters: { type: Array },
      favorites: { type: Array },
      showFavorites: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.characters = [];
    this.favorites = [];
    this.showFavorites = false;
  }

  firstUpdated() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      this.characters = data.results;
    } catch (error) {
      console.error(error);
    }
  }

  showComponentFavorite(character) {
    console.log(character);
    if (this.favorites.some((fav) => fav.id === character.id)) {
      this.favorites = this.favorites.filter((fav) => fav.id !== character.id);
    } else {
      this.favorites = [...this.favorites, character];
    }
  }

  favoritesModal() {
    this.showFavorites = !this.showFavorites;
  }

  isFavorite(character) {
    return this.favorites.some((fav) => fav.id === character.id);
  }

  render() {
    return html`
      <h1>Home page</h1>
      <button class="favorites-button" @click=${this.favoritesModal}>
        Mostrar favoritos
      </button>
      <div class="modal ${this.showFavorites ? "show" : ""}">
        <div class="modal-content">
          <span @click=${this.favoritesModal}>&times;</span>
          ${this.favorites.length !== 0
            ? html`<favorite-characters
                .showComponentFavorite=${this.showComponentFavorite}
                .favorites=${this.favorites}
              >
              </favorite-characters>`
            : html`<p>No hay favoritos</p>`}
        </div>
      </div>
      <div
        class="container-card ${this.characters.length === 0 ? "skeleton" : null}"
      >
        ${this.characters.length === 0
          ? html` <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>
              <div class="skeleton-card"></div>`
          : html` ${this.characters.map(
              (character) => html`
                <character-card
                  .character=${character}
                  .isFavorite=${this.isFavorite(character)}
                  @show-component-favorite=${() =>
                    this.showComponentFavorite(character)}
                >
                </character-card>
              `
            )}`}
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);
