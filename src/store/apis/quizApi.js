import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const quizApi = createApi({
    reducerPath: "quiz",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000"
    }),
    endpoints(builder) {
        return {
            fetchQuiz: builder.query({
                query: (user) => {
                    return {
                        url: "/quiz",
                        params: {
                            userId: user.id
                        },
                        method: "GET"
                    }
                }
            })
        }
    }
})


export const { useFetchQuizQuery } = quizApi;
export { quizApi } ;