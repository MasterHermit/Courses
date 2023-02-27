import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coursesApi } from "./apis/coursesApi";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(coursesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchCoursesQuery } from "./apis/coursesApi";
