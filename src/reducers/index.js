import { combineReducers } from 'redux';
import BundleReducer from '../components/Bundles/store/bundle.reducer'
import StarterReducer from '../components/Starters/store/starter.reducer'
import MainDishesReducer from '../components/MainDishes/store/main-dishes.reducer'
import SidesReducer from '../components/Sides/store/sides.reducer';
import DessertReducer from '../components/Desserts/store/desserts.reducer'
import FavoriteReducer from '../components/Favorites/store/favorites.reducer'
import CartReducer from '../components/Cart/store/cart.reducer'

export default combineReducers({
    BundleReducer,
    StarterReducer,
    MainDishesReducer,
    SidesReducer,
    DessertReducer,
    FavoriteReducer,
    CartReducer
});