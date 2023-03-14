import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const myCoursesApi = createApi({
    reducerPath: "courses",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints(builder) {
        return {
            fetchMyCourses: builder.query({
                query: () => {
                    return {
                        url: "/mycourses",
                        // url: "users/:user_id/mycourses",
                        method: "GET"
                    };
                },
            }),

            fetchInprogressCourses: builder.query({
                query: () => {
                    return {
                        url: "/mycourses_inprogress",
                        // url: "users/:user_id/mycourses/inprogress",
                        method: "GET"
                    };
                },
            }),

            fetchCompletedCourse: builder.query({
                query: () => {
                    return {
                        url: "/mycourses_completed",
                        // url:"users/:user_id/mycourses/completed",
                        method: "GET"
                    }
                }
            })
        }
    }
});

export const { useFetchMyCoursesQuery, useFetchInprogressCoursesQuery, useFetchCompletedCourseQuery } = myCoursesApi;
export { myCoursesApi };