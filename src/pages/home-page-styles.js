import { css } from "lit-element";

export default css`
  h1 {
    font-size: 1.2rem;
  }
  .container-card {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 22rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
  .skeleton {
    overflow: hidden;
  }
  .skeleton-card {
    background-color: #f0f0f0;
    height: 22rem;
    width: 15rem;
    border-radius: 8px;
    animation: shimmer 2s infinite linear;
  }

  @keyframes shimmer {
    0% {
      background-color: #eae9f0;
    }
    25% {
      background-color: #dfe1ea;
    }
    50% {
      background-color: #d6d9e7;
    }
    100% {
      background-color: #d2d6e7;
    }
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    padding-top: 60px;
    span {
      float: inline-end;
      cursor: pointer;
      padding: 10px;
    }
  }

  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .show {
    display: block;
  }

  .favorites-button {
    background-color: rgb(20 36 95);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 20px 0;
    display: block;
    text-align: center;
  }

  .favorites-button:hover {
    background-color: rgb(64 106 255);
  }
`;
