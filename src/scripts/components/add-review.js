import $ from "jquery";
import { addReviewTemplate } from "../views/templates/template-creator";
import RestaurantAPISource from "../data/restaurant-API-source";

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
    $('#addReviewForm').on('submit', (event) => {
      event.preventDefault();
      const reviewData = {
        id: $(this).attr('id'),
        name: $('#addReviewName').val(),
        review: $('#addReviewText').val()
      }
      RestaurantAPISource.postReview(reviewData)
    })
  }
}

customElements.define("add-review", AddReview);
