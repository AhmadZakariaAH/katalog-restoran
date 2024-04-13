import RestaurantAPISource from "../../data/restaurant-API-source";

const Favourite = {
  async render() {
    return `
        <h2>Favourite Page</h2>
      `;
  },

  async afterRender() {
    const favourites = await RestaurantAPISource.favouriteRestaurants();
    console.log(favourites);
  },
};

export default Favourite;
