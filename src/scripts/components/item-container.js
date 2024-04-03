import $ from "jquery";
import "./menu-item";
import "./button-container";

class ItemContainer extends HTMLElement {
  render(data, type) {
    $(this).html(`<style>
        
        </style>`);
    data.forEach((element, index) => {
      $(this).append(`<${type}></${type}>`);
      $(`${type}`)[index].render(element);
      if (index !== 0) {
        $(`${type}:eq(${index})`).css("display", "none");
      }
    });
    if (type === "menu-item") {
      this.adjustItem($("#hero-img").width(), data, 0);
    }
  }

  adjustItem(screenWidth, data, index) {
    const cols = Math.max(Math.floor(screenWidth / 360), 1);
    $(this).css("grid-template-columns", `repeat(${cols}, 1fr)`);
    $("menu-item").css("display", "none");
    for (let i = index; i < cols + index; i += 1) {
      if (i > data.length - 1) {
        i -= data.length - 1;
      }
      $(`menu-item:eq(${i})`).css("display", "block");
    }
  }
}

customElements.define("item-container", ItemContainer);
