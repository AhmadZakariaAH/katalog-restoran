import $ from 'jquery';
import {
  createFavouriteButtonTemplate,
  createFavouritedButtonTemplate,
} from '../views/templates/template-creator';

const FavouriteButtonInitiator = {
  async init({ favouriteButtonContainer, favouriteRestaurant, restaurant }) {
    this._favouriteButtonContainer = favouriteButtonContainer;
    this._restaurant = restaurant;
    this._favouriteRestaurant = favouriteRestaurant;

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
    const restaurant = await this._favouriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavourite() {
    this._favouriteButtonContainer.html(createFavouriteButtonTemplate());

    $('#favouriteButton').on('click', async () => {
      await this._favouriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavourited() {
    this._favouriteButtonContainer.html(createFavouritedButtonTemplate());

    $('#favouritedButton').on('click', async () => {
      await this._favouriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavouriteButtonInitiator;
