import $ from 'jquery';

class LoadingIndicator extends HTMLElement {
  render() {
    $(this).html(`
            <div class='loading-circle'></div>
            <h2>Fetching data...</h2>
        `);
  }
}

customElements.define('loading-indicator', LoadingIndicator);
