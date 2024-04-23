import $ from 'jquery';
import transformDate from '../utils/transformDate-helper';
import { newsItemTemplate } from '../views/templates/template-creator';

class NewsItem extends HTMLElement {
  render(data) {
    $(this).html(newsItemTemplate(data, this.formatDate(data)));
  }

  formatDate(data) {
    this._newsDate = new Date(data.date);
    return transformDate(this._newsDate);
  }
}

customElements.define('news-item', NewsItem);
