import $ from 'jquery';
import RestaurantAPISource from '../../data/restaurant-API-source';
import '../../components/item-container';
import '../../components/search-bar';
import '../../components/error-element';
import { heroTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return heroTemplate;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.restaurantsList();
    if (restaurants instanceof Error) {
      $('.item-catalogue').append('<error-element></error-element>');
      $('error-element')[0].renderError('noConnectionMainPage');
    } else {
      $('item-container')[0].render(restaurants, 'menu-item');
    }
  },
};

export default Restaurants;
