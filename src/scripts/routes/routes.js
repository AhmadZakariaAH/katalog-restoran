import Restaurants from "../views/pages/restaurants";
import Favourite from "../views/pages/favourite";
import Detail from "../views/pages/detail";
import SearchedRestaurants from "../views/pages/searchRestaurants";

const routes = {
  "/": Restaurants,
  "/restaurants": Restaurants,
  "/favourite": Favourite,
  "/detail/:id": Detail,
  "/search/:id": SearchedRestaurants,
};

export default routes;
