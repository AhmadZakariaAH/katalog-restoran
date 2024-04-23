import $ from 'jquery';
import './customer-review';
import './add-review';
import { detailTemplate } from '../views/templates/template-creator';

class RestaurantDetail extends HTMLElement {
  render(data) {
    $(this).html(detailTemplate(data));
    data.categories.forEach((element, index) => {
      const isLastIndex = index === data.categories.length - 1 ? '' : ', ';
      $(this)
        .find('#item-categories')
        .text(
          `${$(this).find('#item-categories').text()}${
            element.name
          }${isLastIndex}`,
        );
    });
    $(this).find('#customerReview').append('<add-review></add-review>');
    $(this).find('add-review').attr('id', `${data.id}`);
    data.customerReviews.forEach((element, index) => {
      $(this)
        .find('#customerReview')
        .append('<customer-review></customer-review>');
      $('customer-review')[index].render(element);
    });
    Object.keys(data.menus).forEach((key) => {
      for (let i = 0; i < data.menus[key].length; i += 1) {
        $(this)
          .find(`.menu-${key} > dl`)
          .append(`<dt>${data.menus[key][i].name}</dt>`);
      }
    });
    $(this)
      .find('.overview-data')
      .each((index, element) => {
        $(element).css('line-height', '1.5em');
      });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
