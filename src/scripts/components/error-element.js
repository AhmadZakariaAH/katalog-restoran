import $ from "jquery";
import { fetchFailedTemplate, pageNotFoundTemplate, postFailedTemplate, fetchFailedMainPageTemplate } from "../views/templates/template-error";

class ErrorElement extends HTMLElement {
  renderError(error) {
    this[error]();
  }

  noConnection() {
    $(this).html(fetchFailedTemplate());
  }

  noConnectionMainPage() {
    $(this).html(fetchFailedMainPageTemplate());
  }

  pageNotFound() {
    $(this).html(pageNotFoundTemplate());
  }

  postFailed() {
    $(this).html(postFailedTemplate());
  }
}

customElements.define("error-element", ErrorElement);
