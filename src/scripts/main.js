import $ from "jquery";
import "./components/item-container";
import "./components/button-container";
import "./components/menu-item";
import "./components/news-item";
import "./components/news-container";
import DATA from "../public/data/DATA.json";
import NEWS from "../public/data/NEWS.json";

const main = () => {
  $("news-container")[0].render(NEWS.news);

  const totalData = DATA.restaurants.length;
  let currentIndex = 0;
  let cols = Math.max(Math.floor($("#hero-img").width() / 360), 1);

  const adjustPages = (data) => {
    $("item-container:eq(0)").css(
      "grid-template-columns",
      `repeat(${cols}, 1fr)`
    );
    $("menu-item").css("display", "none");
    for (let i = 0; i < cols; i += 1) {
      if (i + currentIndex > data.length - 1) {
        break;
      }
      $(`menu-item:eq(${i + currentIndex})`).css("display", "block");
    }
  };

  $("#next-button").on("click", () => {
    if (currentIndex + cols > totalData - 1) {
      currentIndex = 0;
    } else {
      currentIndex += cols;
    }
    adjustPages(DATA.restaurants);
    for (let i = 0; i < cols; i += 1) {
      if (i + currentIndex > totalData - 1) {
        break;
      }
      $("menu-item")[currentIndex + i].adjustHeight(
        DATA.restaurants[currentIndex + i]
      );
    }
  });

  $("#prev-button").on("click", () => {
    if (currentIndex - cols < 0) {
      currentIndex = totalData - cols + (totalData % cols);
    } else {
      currentIndex -= cols;
    }
    adjustPages(DATA.restaurants);
    for (let i = 0; i < cols; i += 1) {
      if (i + currentIndex > totalData - 1) {
        break;
      }
      $("menu-item")[currentIndex + i].adjustHeight(
        DATA.restaurants[currentIndex + i]
      );
    }
  });

  $(window).on("resize", () => {
    heroResize();
    cols = Math.max(Math.floor($("#hero-img").width() / 360), 1);
    adjustPages(DATA.restaurants);
    for (let i = 0; i < cols; i += 1) {
      if (i + Math.floor(currentIndex / cols) * cols > totalData - 1) {
        break;
      }
      $("menu-item")[Math.floor(currentIndex / cols) * cols + i].adjustHeight(
        DATA.restaurants[Math.floor(currentIndex / cols) * cols + i]
      );
    }
  });

  heroResize();
};

export default main;
