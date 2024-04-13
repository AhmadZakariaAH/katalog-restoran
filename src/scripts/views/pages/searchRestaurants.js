import RestaurantAPISource from "../../data/restaurant-API-source";
import UrlParser from "../../routes/url-parser";
import "../../components/item-container";
import "../../components/search-bar";
import $ from "jquery";

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
    $("item-container")[0].render(restaurants, "menu-item");
  },
};

export default SearchedRestaurants;
