import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
    reducerPath:"user",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://192.168.1.15:8000"
    }),
    endpoints(builder){
        return {
            fetchUserProfile: builder.query({
                query: () => {
                    return {
                        url:"/userprofile/api/website/user-profile/",
                        method:"GET"
                    }
                }
            }),

            updateUserProfile: builder.mutation({
                query: (profile) => {
                    return {
                        headers:{
                            'Content-type':"application/json"
                        },
                        url:"userprofile/api/website/user-profile",
                        method:"POST",
                        body:profile
                    }
                }
            })
        }
    }
})

export const { useFetchUserProfileQuery, useUpdateUserProfileMutation } = userApi;
export { userApi };