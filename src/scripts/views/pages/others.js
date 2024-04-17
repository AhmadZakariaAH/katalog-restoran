import $ from "jquery";
import addResponsiveEvent from "../../utils/responsive-pages";
import RestaurantAPISource from "../../data/restaurant-API-source";
import NEWS from "../../../public/data/NEWS.json";
import "../../components/news-container";
import { othersPageTemplate } from "../templates/template-creator";

const Others = {
  async render() {
    return othersPageTemplate;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.restaurantsList();
    addResponsiveEvent({
      HeroResize: "#hero-img",
      BodyResize: {
        imageId: "#hero-img",
        bodyClass: ".main-section",
      },
      ImageOverlayResize: {
        imageId: "#hero-img",
        overlayClass: ".overlay-desc",
      },
      AdjustGridColumn: "#hero-img",
    });
    if (restaurants instanceof Error) {
      $("#reservation-form").prepend("<error-element></error-element>");
      $("error-element")[0].renderError("noConnectionMainPage");
    } else {
      restaurants.forEach((element) => {
        $("#reservation-restaurant").append(`<option>${element.name}</option>`);
      });
      $("news-container")[0].render(NEWS.news);
    }
  },
};

export default Others;
