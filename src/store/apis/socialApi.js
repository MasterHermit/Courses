import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const socialApi = createApi({
    reducerPath: "social",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints(builder) {
        return {
            fetchAllPost: builder.query({
                query: (pageNo) => {
                    return {
                        url: `/posts?page=${pageNo}`,
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
            }),
            updatePost: builder.mutation({
                query: (payload) => {

                }
            }),
            updatePostLike: builder.mutation({
                query: (payload) => {

                }
            })
        }
    }
})

export const { useFetchAllPostQuery, useCreatePostMutation, useUpdatePostLikeMutation } = socialApi
export { socialApi }