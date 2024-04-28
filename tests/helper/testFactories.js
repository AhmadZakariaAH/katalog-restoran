import $ from 'jquery';
import FavouriteRestaurantIdb from '../../src/scripts/data/favourite-restaurant-idb';
import FavouriteButtonInitiator from '../../src/scripts/utils/favourite-button-presenter';

const createFavouriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavouriteButtonInitiator.init({
    favouriteButtonContainer: $('#favouriteButtonContainer'),
    favouriteRestaurant: FavouriteRestaurantIdb,
    restaurant,
  });
};

export { createFavouriteButtonPresenterWithRestaurant };
