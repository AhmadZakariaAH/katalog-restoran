import $ from "jquery";
import "./menu-item";

class ItemContainer extends HTMLElement {
  render(data, type) {
    data.forEach((element, index) => {
      $(this).append(`<${type}></${type}>`);
      $(`${type}`)[index].render(element);
    });
  }
}

customElements.define("item-container", ItemContainer);
