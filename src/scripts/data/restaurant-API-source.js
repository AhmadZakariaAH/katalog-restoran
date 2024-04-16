import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPISource {
  static async restaurantsList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANTS);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  static async favouriteRestaurants() {
    const response = await fetch(API_ENDPOINT.FAVOURITE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      if (responseJson.error) {
        throw new Error('Restaurant not found');
      } else {
        return responseJson.restaurant;
      }
    } catch (error) {
      return error;
    }
  }

  static async searchRestaurants(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  static async postReview(query) {
    try {
      const data = query;
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return 'ERROR';
    }
  }
}

export default RestaurantAPISource;
