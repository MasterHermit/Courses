import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const socialApi = createApi({
    reducerPath: "social",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints(builder) {
        return {
            fetchAllPost: builder.query({
                query: () => {
                    return {
                        url: "/posts",
                        method: "GET",
                    }
                }
            }),
            createPost: builder.mutation({
                query: (payload) => {
                    console.log(payload);
                    return {
                        url: "/posts",
                        body: payload,
                        method: "POST",
                    }
                }
            })
        }
    }
})

export const { useFetchAllPostQuery, useCreatePostMutation } = socialApi
export { socialApi }