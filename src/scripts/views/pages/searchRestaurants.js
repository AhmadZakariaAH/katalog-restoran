import RestaurantAPISource from "../../data/restaurant-API-source";
import UrlParser from "../../routes/url-parser";
import "../../components/item-container";
import "../../components/search-bar";
import "../../components/error-element";
import $ from "jquery";
import addResponsiveEvent from "../../utils/responsive-pages";

const SearchedRestaurants = {
  async render() {
    return `
      <section class="item-catalogue">
        <h1 id="main-desc" class="section-title">Explore Restaurant</h1>
        <search-bar></search-bar>
        <item-container></item-container>
      </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantAPISource.searchRestaurants(url.id);
    addResponsiveEvent({
      HeroResize: "#hero-img",
        BodyResize: {
          imageId: "#hero-img",
          bodyClass: ".item-catalogue",
        },
        ImageOverlayResize: {
          imageId: "#hero-img",
          overlayClass: ".overlay-desc",
        },
        AdjustGridColumn: "#hero-img",
    });
    if (restaurants instanceof Error) {
      $(".item-catalogue").append("<error-element></error-element>");
      $("error-element")[0].renderError('noConnectionMainPage');
    } else {
      $("item-container")[0].render(restaurants, "menu-item");
    }
  },
};

export default SearchedRestaurants;
