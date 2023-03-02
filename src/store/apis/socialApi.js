import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const socialApi = createApi({
    reducerPath: "social",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints(builder) {
        return {
            fetchAllPost: builder.query({
                query: (user) => {
                    return {
                        url: "/posts",
                        params: {
                            userId: user.id
                        },
                        method: "GET",
                    }
                }
            })
        }
    }
})

export const { useFetchAllPostQuery } = socialApi
export { socialApi }