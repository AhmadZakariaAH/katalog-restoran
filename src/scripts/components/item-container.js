import $ from 'jquery';
import './menu-item';

class ItemContainer extends HTMLElement {
  render(data, type) {
    data.forEach((element, index) => {
      if (
        Object.prototype.hasOwnProperty.call(element, 'id')
        && Object.prototype.hasOwnProperty.call(element, 'rating')
      ) {
        if (element.rating >= 0 && element.rating <= 5) {
          $(this).append(`<${type}></${type}>`);
          $(`${type}`)[index].render(element);
        }
      }
    });
  }
}

customElements.define('item-container', ItemContainer);
