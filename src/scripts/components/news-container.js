import $ from 'jquery';
import './news-item';

class NewsContainer extends HTMLElement {
  render(data) {
    data.forEach((element, index) => {
      $(this).append('<news-item></news-item}>');
      $('news-item')[index].render(element);
    });
  }
}

customElements.define('news-container', NewsContainer);
