import $ from 'jquery';
import { searchTemplate } from '../views/templates/template-creator';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    $(this).html(searchTemplate());
    $(this)
      .find('#searchForm')
      .on('submit', (event) => {
        event.preventDefault();
        const query = $(this).find('#search-restaurants').val();
        window.location.href = `#/search/${query === '' ? '-' : query}`;
      });
  }
}

customElements.define('search-bar', SearchBar);
