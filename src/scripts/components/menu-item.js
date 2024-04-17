import $ from "jquery";
import { restaurantTemplate } from "../views/templates/template-creator";
import addResponsiveEvent from "../utils/responsive-pages";

class MenuItem extends HTMLElement {
  render(data) {
    $(this).html(restaurantTemplate(data));
    $(this).find(".main-container").attr("id", `item-${data.id}`);
    $(`#item-${data.id}`).find(".desc-container").attr("id", `desc-${data.id}`);
    $(`#item-${data.id}`)
      .find(".img-container > img")
      .attr("id", `img-${data.id}`);

    $(`#img-${data.id}`).on("load", () => {
      addResponsiveEvent({
        AdjustItemHeight: data.id,
      });
    });
  }
}

customElements.define("menu-item", MenuItem);
