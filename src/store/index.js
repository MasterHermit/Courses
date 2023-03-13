import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coursesApi } from "./apis/coursesApi";
import { quizApi } from "./apis/quizApi";
import { socialApi } from "./apis/socialApi";
import { feedbackApi } from "./apis/feedbackApis";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    [socialApi.reducerPath]: socialApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      coursesApi.middleware,
      quizApi.middleware,
      socialApi.middleware,
      feedbackApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export { useFetchCoursesQuery, useFetchCourseQuery } from "./apis/coursesApi";
export { useFetchQuizQuery } from "./apis/quizApi";
export { useFetchAllPostQuery, useCreatePostMutation, useUpdatePostLikeMutation } from "./apis/socialApi";
export { useFetchFeedbacksQuery } from "./apis/feedbackApis";

