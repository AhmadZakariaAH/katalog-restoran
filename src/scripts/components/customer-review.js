import $ from 'jquery';
import { reviewTemplate } from '../views/templates/template-creator';

class CustomerReview extends HTMLElement {
  render(data) {
    $(this).html(reviewTemplate(data));
  }
}

customElements.define('customer-review', CustomerReview);
