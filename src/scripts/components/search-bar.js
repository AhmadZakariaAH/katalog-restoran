import $ from "jquery";
import { searchTemplate } from "../views/templates/template-creator";

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    $(this).html(searchTemplate());
    $(this)
      .find("#searchButton")
      .on("click", (event) => {
        event.stopPropagation();
        const query = $(this).find("#search-restaurants").val();
        window.location.href = `#/search/${query}`;
      });
  }
}

customElements.define("search-bar", SearchBar);
