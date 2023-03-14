import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const myJobsApi = createApi({
    reducerPath:"jobs",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8001"
    }),
    endpoints(builder){
        return {
            fetchJobs: builder.query({
                query: () => {
                    return {
                        url : "/jobs",
                        method:"GET"
                    };
                }
            }),
        }
    }
});

export const  { useFetchJobsQuery } = myJobsApi;
export { myJobsApi };