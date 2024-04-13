import $ from "jquery";
import { fetchFailed } from "../views/templates/template-error";

class ErrorElement extends HTMLElement {
  render(error) {
    switch (error.message) {
      case "Failed to fetch":
        $(this).html(fetchFailed(error));
        $(".error-container").append(`
                <h3>Check your internet connection.</h3>
                `);
        break;
      case "Cannot read properties of undefined (reading 'render')":
        $(this).html("<h2>Page not found</h2>");
        break;
      default:
        console.log(error.message);
    }
  }
}

customElements.define("error-element", ErrorElement);
