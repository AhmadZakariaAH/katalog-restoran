import $ from 'jquery';
import FavouriteRestaurantIdb from '../data/favourite-restaurant-idb';
import {
  createFavouriteButtonTemplate,
  createFavouritedButtonTemplate,
} from '../views/templates/template-creator';

const FavouriteButtonInitiator = {
  async init({ favouriteButtonContainer, restaurant }) {
    this._favouriteButtonContainer = favouriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavourited();
    } else {
      this._renderFavourite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavouriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavourite() {
    this._favouriteButtonContainer.html(createFavouriteButtonTemplate());

    $('#favouriteButton').on('click', async () => {
      await FavouriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavourited() {
    this._favouriteButtonContainer.html(createFavouritedButtonTemplate());

    $('#favouritedButton').on('click', async () => {
      await FavouriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavouriteButtonInitiator;
