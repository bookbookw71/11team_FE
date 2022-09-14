import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../modules/usersSlice";
import users from "../modules/users";
import postSlice from "../modules/postSlice";
import bookSlice from "../modules/bookSlice";
const store = configureStore({
  reducer: {
    users,
    postSlice,
    usersSlice,
    bookSlice,
  },
});

export default store;
