import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coursesApi } from "./apis/coursesApi";
import { quizApi } from "./apis/quizApi";
import { socialApi } from "./apis/socialApi";
import { feedbackApi } from "./apis/feedbackApis";
import { userApi } from "./apis/userApi";
import { myCoursesApi } from "./apis/myCoursesApi";
import { myJobsApi } from "./apis/myJobsApi";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    [socialApi.reducerPath]: socialApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [myCoursesApi.reducerPath]:myCoursesApi.reducer,
    [myJobsApi.reducerPath]:myJobsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      coursesApi.middleware,
      quizApi.middleware,
      socialApi.middleware,
      feedbackApi.middleware,
      userApi.middleware,
      myCoursesApi.middleware,
      myJobsApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export { useFetchCoursesQuery, useFetchCourseQuery } from "./apis/coursesApi";
export { useFetchQuizQuery } from "./apis/quizApi";
export { useFetchAllPostQuery, useCreatePostMutation, useUpdatePostLikeMutation } from "./apis/socialApi";
export { useFetchFeedbacksQuery } from "./apis/feedbackApis";
export { useFetchMyCoursesQuery, useFetchInprogressCoursesQuery, useFetchCompletedCourseQuery } from './apis/myCoursesApi';
export { useFetchJobsQuery } from "./apis/myJobsApi";
export { useFetchUserProfileQuery, useUpdateUserProfileMutation } from "./apis/userApi";
