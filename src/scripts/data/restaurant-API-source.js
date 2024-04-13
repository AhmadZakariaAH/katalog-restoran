import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantAPISource {
  static async restaurantsList() {
    try {
      console.log("start fetch");
      const response = await fetch(API_ENDPOINT.RESTAURANTS);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    } finally {
      console.log("end fetch");
    }
  }

  static async favouriteRestaurants() {
    const response = await fetch(API_ENDPOINT.FAVOURITE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async postReview(query) {
    try {
      const data = query;
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseJson = await response.json()
    } catch(error) {
      console.log(error)
    }
  }
}

export default RestaurantAPISource;
