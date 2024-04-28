import FavouriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Add restaurant to favourite', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favouriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the add to favourite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('#favouriteButton')).toBeTruthy();
  });

  it('should not show the remove from favourite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('#favouritedButton')).toBeFalsy();
  });

  it('Should be able to add a restaurant to favourite', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector('#favouriteButton')
      .dispatchEvent(new Event('click'));
    const restaurant = await FavouriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavouriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when it is already added', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector('#favouriteButton')
      .dispatchEvent(new Event('click'));
    await FavouriteRestaurantIdb.putRestaurant({ id: 1 });
    expect(await FavouriteRestaurantIdb.getAllRestaurant()).toEqual([
      { id: 1 },
    ]);
    await FavouriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({});
    document
      .querySelector('#favouriteButton')
      .dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});

describe('Remove restaurant from favourite', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favouriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavouriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show the remove from favourite button when the restaurant has been added before', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('#favouritedButton')).toBeTruthy();
  });

  it('should not show the add to favourite button when the restaurant has been added before', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('#favouriteButton')).toBeFalsy();
  });

  it('should be able to remove restaurant from favourite', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector('#favouritedButton')
      .dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw an error when user click the remove button if the removed restaurant is not on the list', async () => {
    await TestFactories.createFavouriteButtonPresenterWithRestaurant({ id: 1 });
    await FavouriteRestaurantIdb.deleteRestaurant(1);
    document
      .querySelector('#favouritedButton')
      .dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
