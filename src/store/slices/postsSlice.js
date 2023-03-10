import { createSlice } from "@reduxjs/toolkit";
import { useFetchAllPostQuery } from "../index"



const postsSlice = createSlice({
    name: "posts",
    initialState: {
        page: 1,
        searchTerm: "",
        posts: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        getPosts(state, action) {
         
        }

    }
})