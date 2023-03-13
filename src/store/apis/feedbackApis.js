import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const feedbackApi = createApi({
    reducerPath: "feedback",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
    }),
    endpoints(builder) {
        return {
            fetchFeedbacks: builder.query({
                query: () => {
                    return {
                        url: "/feedback",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useFetchFeedbacksQuery } = feedbackApi;
export { feedbackApi };