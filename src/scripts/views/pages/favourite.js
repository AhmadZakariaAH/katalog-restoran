import $ from 'jquery';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import '../../components/item-container';
import '../../components/error-element';
import { heroTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `<section class="hero">
    <picture id="heroPicture">
      <source 
        type="image/webp" 
        srcset="./images/heros/hero-image_1-small.webp"
        media="(max-width: 425px)">
      <source 
        type="image/webp" 
        srcset="./images/heros/hero-image_1-medium.webp"
        media="(max-width: 768px)">
      <source 
        type="image/webp" 
        srcset="./images/heros/hero-image_1-large.webp">
      <source 
        type="image/jpeg" 
        srcset="./images/heros/hero-image_1-small.jpg"
        media="(max-width: 425px)">
      <source 
        type="image/jpeg" 
        srcset="./images/heros/hero-image_1-medium.jpg"
        media="(max-width: 768px)">
      <img
        id="hero-img"
        src="./images/heros/hero-image_1-large.jpg"
        alt="Hero image"
      />
    </picture>
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
    <h1 id="main-desc" class="section-title">Favourite Restaurant</h1>
    <item-container></item-container>
  </section>
  `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurant();
    if (!restaurants.length) {
      $('.item-catalogue').append('<error-element></error-element>');
      $('error-element')[0].renderError('noFavourite');
    } else {
      $('item-container')[0].render(restaurants, 'menu-item');
    }
  },
};

export default Favourite;
