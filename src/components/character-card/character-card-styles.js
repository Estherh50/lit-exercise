import { css } from "lit-element";

export default css`
  .card {
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    text-align: center;
    height: 100%;
    box-sizing: border-box;
  }

  .card img {
    width: 100px;
    height: 100px;
  }

  .card button {
    margin-top: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .card button iron-icon {
    color: var(--icon-color, grey);
  }

  .favorite {
    --icon-color: red;
  }

  .container-icon {
    float: inline-end;
  }
`;
