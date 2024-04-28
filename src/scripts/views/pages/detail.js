import $ from 'jquery';
import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurant-API-source';
import '../../components/restaurant-detail';
import '../../components/error-element';
import FavouriteButtonInitiator from '../../utils/favourite-button-presenter';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <restaurant-detail></restaurant-detail>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantAPISource.detailRestaurants(url.id);
    if (detail instanceof Error) {
      const errorType = detail.message === 'Restaurant not found'
        ? 'pageNotFound'
        : 'noConnection';
      $('#mainContent').append('<error-element></error-element>');
      $('error-element')[0].renderError(errorType);
    } else {
      $('restaurant-detail')[0].render(detail);
      FavouriteButtonInitiator.init({
        favouriteButtonContainer: $('#favouriteButtonContainer'),
        favouriteRestaurant: FavouriteRestaurantIdb,
        restaurant: {
          city: detail.city,
          description: detail.description,
          id: detail.id,
          name: detail.name,
          pictureId: detail.pictureId,
          rating: detail.rating,
        },
      });
    }
  },
};

export default Detail;
