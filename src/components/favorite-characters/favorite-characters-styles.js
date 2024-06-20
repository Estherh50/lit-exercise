import { css } from "lit-element";

export default css`
  .favorites-container {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 22rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`