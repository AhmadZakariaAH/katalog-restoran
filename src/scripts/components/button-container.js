import $ from "jquery";

class ButtonContainer extends HTMLElement {
  render() {
    $(this).html(`<style>
        .button-main-con {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            border-bottom: 8px solid darkred;
            margin-bottom: 16px;
        }

        .button-class {
            min-height: 48px;
            min-width: 48px;
            border: none;
            background-color: white;
            font-size: 24px;
            margin-bottom: 16px;
        }
        </style>
        <div class='button-main-con'>
        <button id='prev-button' class='button-class'>Prev</button>
        <button id='next-button' class='button-class'>Next</button>
        </div>`);
  }
}

customElements.define("button-container", ButtonContainer);
