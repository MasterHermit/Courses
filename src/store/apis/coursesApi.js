import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      fetchCourses: builder.query({
        query: (user) => {
          return {
            url: "/courses",
            params:{
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCoursesQuery } = coursesApi;
export { coursesApi };
