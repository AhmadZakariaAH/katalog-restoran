import Restaurants from '../views/pages/restaurants';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';
import SearchedRestaurants from '../views/pages/searchRestaurants';
import Others from '../views/pages/others';

const routes = {
  '/': Restaurants,
  '/restaurants': Restaurants,
  '/favourite': Favourite,
  '/detail/:id': Detail,
  '/search/:id': SearchedRestaurants,
  '/others': Others,
};

export default routes;
