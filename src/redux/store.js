import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./auth/reducer";
import categoriesReducer from "./categories/reducer";
import notifReducer from "./notif/reducer";
import talentsReducer from "./talents/reducer";
import paymentReducer from "./payments/reducer";
import eventsReducer from "./events/reducer";
import listsReducer from "./lists/reducer";
import orderReducer from "./orders/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  talents: talentsReducer,
  payments: paymentReducer,
  events: eventsReducer,
  lists: listsReducer,
  orders: orderReducer,
});
const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
