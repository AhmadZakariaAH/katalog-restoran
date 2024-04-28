import { itActsAsFavouriteRestaurantModel } from './contracts/favouriteRestaurantContracts';
import FavouriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurantIdb.getAllRestaurant()).forEach(
      async (restaurant) => {
        await FavouriteRestaurantIdb.deleteRestaurant(restaurant.id);
      },
    );
  });

  itActsAsFavouriteRestaurantModel(FavouriteRestaurantIdb);
});
