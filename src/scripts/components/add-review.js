import $ from "jquery";
import { addReviewTemplate } from "../views/templates/template-creator";
import RestaurantAPISource from "../data/restaurant-API-source";
import './error-element';

class AddReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    $(this).html(addReviewTemplate);
    $(this).find('#addReviewButton').on('click', (event) => {
      event.stopPropagation;
      $('#addReviewButton').css('display', 'none');
      $('#addReviewForm').css('display', 'block');
    })
    $('#reviewCancelButton').on('click', (event) => {
      event.stopPropagation;
      $('#addReviewForm').css('display', 'none');
      $('#addReviewButton').css('display', 'block');
    })
    $('#addReviewForm').on('submit', async (event) => {
      event.preventDefault();
      const reviewData = {
        id: $(this).attr('id'),
        name: $('#addReviewName').val(),
        review: $('#addReviewText').val()
      }
      const postReview = await RestaurantAPISource.postReview(reviewData)
      if (postReview === 'ERROR') {
        $(this).before('<error-element></error-element>');
        $("error-element")[0].renderError('postFailed');
      }
    })
  }
}

customElements.define("add-review", AddReview);
