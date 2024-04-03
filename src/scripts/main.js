import $ from "jquery";
import "./components/item-container";
import "./components/button-container";
import "./components/menu-item";
import "./components/news-item";
import "./components/news-container";
import DATA from "../public/data/DATA.json";
import NEWS from "../public/data/NEWS.json";

const main = () => {
  const heroResize = () => {
    $("#hero-img").css("max-width", `${$(window).width()}px`);
    $("#hero-img").css("max-height", "100vh");
    if ($("#hero-img").height() > $(window).height()) {
      if ($("#hero-img").width() < 1200) {
        $("#hero-img").height("auto");
        $("#hero-img").width("100%");
      } else {
        $("#hero-img").height("100vh");
        $("#hero-img").width(($("#hero-img").height() / 2) * 3);
      }
    } else {
      $("#hero-img").height("auto");
    }

    $(".main-section").width($(".hero").find("#hero-img").width());
    $(".item-catalogue").width($(".hero").find("#hero-img").width());

    if ($(window).width() >= 1024) {
      $(".overlay-desc").css("max-width", $("#hero-img").width() * 0.7);
      const transformValue =
        -$("#hero-img").width() / 2 +
        $(".overlay-desc").width() / 2 +
        parseFloat($(".overlay-desc").css("padding-left"));
      $(".overlay-desc").css("transform", `translateX(${transformValue}px)`);
    } else {
      $(".overlay-desc").css("transform", "none");
      $(".overlay-desc").css("max-width", "none");
    }
  };

  for (let i = 0; i < DATA.restaurants.length; i += 1) {
    $("#reservation-restaurant").append(
      `<option>${DATA.restaurants[i].name}</option>`
    );
  }

  $("item-container")[0].render(DATA.restaurants, "menu-item");
  $("news-container")[0].render(NEWS.news);
  $(".item-catalogue").append("<button-container></button-container>");
  $("button-container")[0].render();

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

  let toggleNavMobile = false;
  $("header")
    .find(".main-head > .hamburger-icon")
    .on("click", () => {
      if (toggleNavMobile) {
        $("header").find(".nav-mobile").css("display", "none");
        toggleNavMobile = false;
      } else {
        $("header").find(".nav-mobile").css("display", "flex");
        $("header").find(".nav-mobile > ul").css("width", "100%");
        toggleNavMobile = true;
      }
    });

  heroResize();
};

export default main;
