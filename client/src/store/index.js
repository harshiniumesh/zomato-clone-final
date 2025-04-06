import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./slices/locationSlice";
import { handleChange } from "./slices/locationSlice";
import {
  deliveryReducer,
  handleFilter,
  handleCrossClick,
  handleClearAllAppliedFilters,
} from "./slices/deliverySlice";
import { filterReducer } from "./slices/filterSlice";
import {
  handleSortRadioChange,
  handleCheckboxChange,
  handleRatingRadioChange,
  handleCostRadioChange,
  clearAll,
  handleFilterCount,
  handleFilterCrossClick,
} from "./slices/filterSlice";
import { userReducer, clearUserDetails } from "./slices/userSlice";
import { foodReducer } from "./slices/foodSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    delivery: deliveryReducer,
    filters: filterReducer,
    user: userReducer,
    food: foodReducer,
  },
});

export default store;
export {
  handleChange,
  handleSortRadioChange,
  handleCheckboxChange,
  handleRatingRadioChange,
  handleCostRadioChange,
  clearAll,
  handleFilter,
  handleFilterCount,
  handleCrossClick,
  handleClearAllAppliedFilters,
  handleFilterCrossClick,
  clearUserDetails,
};
export * from "./thunks/fetchLocation";
export * from "./thunks/fetchAllDelivery";
export * from "./thunks/signupThunk";
export * from "./thunks/fetchUserDetails";
export * from "./thunks/loginThunk";
export * from "./thunks/fetchAllFoods";
export * from "./thunks/addToCartThunk";
export * from "./thunks/getCartThunk";
export * from "./thunks/removeFromCart";
export * from "./thunks/addToBookmarksThunk";
export * from "./thunks/getBookmarksThunk";
export * from "./thunks/removeFromBookmarksThunk";
export * from "./thunks/updateUserDetailsThunk";
export * from "./thunks/clearCartThunk";
