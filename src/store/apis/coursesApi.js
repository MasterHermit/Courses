import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      fetchCourses: builder.query({
        query: () => {
          return {
            url: "/courses",
            method: "GET",
          };
        },
      }),
      fetchCourse: builder.query({
        query: (id) => {
          return {
            ur: `/courses/${id}`,
            method: "GET",
          }
        }
      })
    };
  },
});

export const { useFetchCoursesQuery, useFetchCourseQuery } = coursesApi;
export { coursesApi };
