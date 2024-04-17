import $ from "jquery";
import FavouriteRestaurantIdb from "../../data/favourite-restaurant-idb";
import "../../components/item-container";
import "../../components/error-element";
import addResponsiveEvent from "../../utils/responsive-pages";

const Favourite = {
  async render() {
    return `
    <section class="hero">
      <img
        id="hero-img"
        src="./images/heros/hero-image_1.jpg"
        alt="Hero image"
      />
      <div class="hero-overlay">
        <div class="overlay-desc">
          <q
            >Discover the best eateries near you! From cozy cafes to upscale
            dining, find your perfect culinary experience with Taste Treat.
          </q>
        </div>
      </div>
    </section>
    <section class="item-catalogue">
      <h1 id="main-desc" class="section-title">Favourite Restaurants</h1>
      <item-container></item-container>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurant();
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
    if (!restaurants.length) {
      $(".item-catalogue").append("<error-element></error-element>");
      $("error-element")[0].renderError("noFavourite");
    } else {
      $("item-container")[0].render(restaurants, "menu-item");
    }
  },
};

export default Favourite;
