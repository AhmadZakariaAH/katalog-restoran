import { spyOn } from 'jest-mock';
import '../src/scripts/components/search-bar';
import $ from 'jquery';
import App from '../src/scripts/views/app';
import RestaurantAPISource from '../src/scripts/data/restaurant-API-source';
import indexHtmlTemplate from './helper/index-html-template';
import '../src/scripts/components/item-container';

describe('Search restaurants', () => {
  const renderRestaurants = (restaurants) => {
    $('item-container')[0].render(restaurants, 'menu-item');
    $('item-container').trigger('restaurant:updated');
  };

  beforeEach(() => {
    document.body.innerHTML = indexHtmlTemplate();
    document.body.innerHTML += '<search-bar></search-bar>';
    const app = new App({
      button: $('#hamburgerButton'),
      drawer: $('.nav-mobile'),
      content: $('#mainContent'),
      loadingIndicator: $('#loadingIndicator'),
      skipLink: $('.skip-link'),
    });

    $(window).on('hashchange', () => {
      app.renderPage();
    });
  });

  afterEach(() => {
    $(window).off('hashchange');
    jest.resetAllMocks();
  });

  describe('a) Searching the restaurants', () => {
    it('should change the URL when user submitted the query', () => {
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      expect(window.location.hash.startsWith('#/search/')).toBeTruthy();
    });

    it('should change the URL to #/search/- when user query is empty-ish', () => {
      document.querySelector('#search-restaurants').value = '';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      expect(window.location.hash).toEqual('#/search/-');

      document.querySelector('#search-restaurants').value = ' ';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      expect(window.location.hash).toEqual('#/search/-');

      document.querySelector('#search-restaurants').value = '       ';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      expect(window.location.hash).toEqual('#/search/-');

      document.querySelector('#search-restaurants').value = '\t';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      expect(window.location.hash).toEqual('#/search/-');
    });

    it('should be able to ask the model to search the restaurant', async () => {
      const searchMock = await spyOn(RestaurantAPISource, 'searchRestaurants');
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      window.dispatchEvent(new Event('hashchange'));
      expect(searchMock).toHaveBeenCalled();
      searchMock.mockClear();
    });

    it('should ask the model to search the restaurant only once', async () => {
      const searchMock = await spyOn(RestaurantAPISource, 'searchRestaurants');
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      window.dispatchEvent(new Event('hashchange'));
      expect(searchMock).toHaveBeenCalledTimes(1);
      searchMock.mockClear();
    });

    it('should be able to ask the model to search the restaurant matched with query inputted by user', async () => {
      const searchMock = await spyOn(RestaurantAPISource, 'searchRestaurants');
      document.querySelector('#search-restaurants').value = 'resto';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      window.dispatchEvent(new Event('hashchange'));
      expect(searchMock).toHaveBeenCalledWith('resto');
      searchMock.mockClear();
    });
  });

  describe('b) Returning and showing the restaurant data', () => {
    beforeEach(() => {
      document.querySelector('#search-restaurants').value = 'resto';
      document.querySelector('#searchForm').dispatchEvent(new Event('submit'));
      window.dispatchEvent(new Event('hashchange'));
    });

    afterEach(() => {
      $('item-container').off('restaurant:updated');
    });

    it('should be able to return the found restaurant matched with query inputted by user', (done) => {
      $('item-container').on('restaurant:updated', () => {
        expect(document.querySelectorAll('menu-item').length).toEqual(3);
        $('item-container').html('');
        done();
      });
      const searchMock = spyOn(RestaurantAPISource, 'searchRestaurants');
      searchMock.mockImplementation((query) => {
        if (query === 'resto') {
          return [
            {
              id: 'resto111',
              name: 'Makan mudah',
              description: 'Lorem ipsum',
              pictureId: '22',
              city: 'Medan',
              rating: 3.7,
            },
            {
              id: 'resto222',
              name: 'Minum gampang',
              description: 'Dolor sit amet',
              pictureId: '23',
              city: 'Medan',
              rating: 3.7,
            },
            {
              id: 'resto333',
              name: 'Kenyang sangat',
              description: 'Kekenyangan',
              pictureId: '24',
              city: 'Medan',
              rating: 3.7,
            },
          ];
        }

        return [];
      });
      renderRestaurants(searchMock('resto'));
      searchMock.mockClear();
      searchMock.mockReset();
    });

    it('should show the name the found restaurant matched with query inputted by user', (done) => {
      $('item-container').on('restaurant:updated', () => {
        const restaurantItem = document.querySelectorAll('#item-name');
        expect(restaurantItem.item(0).textContent).toEqual('Makan mudah');
        expect(restaurantItem.item(1).textContent).toEqual('Minum gampang');
        expect(restaurantItem.item(2).textContent).toEqual('Kenyang sangat');
        $('item-container').html('');
        done();
      });
      const searchMock = spyOn(RestaurantAPISource, 'searchRestaurants');
      searchMock.mockImplementation((query) => {
        if (query === 'resto') {
          return [
            {
              id: 'restoA',
              name: 'Makan mudah',
              description: 'Lorem ipsum',
              pictureId: '22',
              city: 'Medan',
              rating: 3.7,
            },
            {
              id: 'restoB',
              name: 'Minum gampang',
              description: 'Dolor sit amet',
              pictureId: '23',
              city: 'Medan',
              rating: 3.7,
            },
            {
              id: 'restoC',
              name: 'Kenyang sangat',
              description: 'Kekenyangan',
              pictureId: '24',
              city: 'Medan',
              rating: 3.7,
            },
          ];
        }

        return [];
      });
      renderRestaurants(searchMock('resto'));
      searchMock.mockClear();
      searchMock.mockReset();
    });

    it('shows no restaurant if no restaurants found according to the user query', (done) => {
      $('item-container').on('restaurant:updated', () => {
        expect(document.querySelectorAll('menu-item').length).toEqual(0);
        done();
      });
      const searchMock = spyOn(RestaurantAPISource, 'searchRestaurants');
      searchMock.mockImplementation((query) => []);
      renderRestaurants(searchMock('resto'));
      searchMock.mockClear();
      searchMock.mockReset();
    });

    it('should not include the restaurant that has no id or rating property', (done) => {
      $('item-container').on('restaurant:updated', () => {
        expect(document.querySelectorAll('menu-item').length).toEqual(1);
        done();
      });
      const searchMock = spyOn(RestaurantAPISource, 'searchRestaurants');
      searchMock.mockImplementation((query) => {
        if (query === 'resto') {
          return [
            {
              id: 'resto111',
              name: 'Makan mudah',
              description: 'Lorem ipsum',
              pictureId: '22',
              city: 'Medan',
              rating: 3.7,
            },
            {
              name: 'Minum gampang',
              description: 'Dolor sit amet',
              pictureId: '23',
              city: 'Medan',
              rating: 3.7,
            },
            {
              name: 'Kenyang sangat',
              description: 'Kekenyangan',
              pictureId: '24',
              city: 'Medan',
              rating: 3.7,
            },
          ];
        }

        return [];
      });
      renderRestaurants(searchMock('resto'));
      searchMock.mockClear();
      searchMock.mockReset();
    });

    it('should not include the restaurant if its rating is not between 0 and 5', (done) => {
      $('item-container').on('restaurant:updated', () => {
        expect(document.querySelectorAll('menu-item').length).toEqual(1);
        done();
      });
      const searchMock = spyOn(RestaurantAPISource, 'searchRestaurants');
      searchMock.mockImplementation((query) => {
        if (query === 'resto') {
          return [
            {
              id: 'resto444',
              name: 'Makan mudah',
              description: 'Lorem ipsum',
              pictureId: '22',
              city: 'Medan',
              rating: 3.7,
            },
            {
              id: 'resto555',
              name: 'Minum gampang',
              description: 'Dolor sit amet',
              pictureId: '23',
              city: 'Medan',
              rating: -3.7,
            },
            {
              id: 'resto666',
              name: 'Kenyang sangat',
              description: 'Kekenyangan',
              pictureId: '24',
              city: 'Medan',
              rating: 6.9,
            },
          ];
        }

        return [];
      });
      renderRestaurants(searchMock('resto'));
      searchMock.mockClear();
      searchMock.mockReset();
    });
  });
});
