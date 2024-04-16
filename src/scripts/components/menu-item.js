import $ from 'jquery';
import { restaurantTemplate } from '../views/templates/template-creator';

class MenuItem extends HTMLElement {
  render(data) {
    $(this).html(restaurantTemplate(data));
    $(this).find('.main-container').attr('id', `item-${data.id}`);
    $(`#item-${data.id}`).find('.desc-container').attr('id', `desc-${data.id}`);
    $(`#item-${data.id}`)
      .find('.img-container > img')
      .attr('id', `img-${data.id}`);

    $(`#img-${data.id}`).on('load', () => {
      if ($(`#item-${data.id}`).height() > $(window).height() * 0.7) {
        while ($(`#item-${data.id}`).height() > $(window).height() * 0.7) {
          $(`#desc-${data.id}`).height($(`#desc-${data.id}`).height() - 10);
          if ($(`#desc-${data.id}`).height() < 40) {
            break;
          }
        }
      } else if (
        $(`#desc-${data.id} > p`).height() > $(`#desc-${data.id}`).height()
      ) {
        while ($(`#item-${data.id}`).height() < $(window).height() * 0.7) {
          $(`#desc-${data.id}`).height($(`#desc-${data.id}`).height() + 10);
          if ($(`#desc-${data.id}`).height() > $(window).height() * 0.8) {
            break;
          }
          if (
            $(`#desc-${data.id} > p`).height()
            < $(`#desc-${data.id}`).height() + 80
          ) {
            $(`#desc-${data.id}`).height('auto');
            break;
          }
        }
      }
    });
  }
}

customElements.define('menu-item', MenuItem);
