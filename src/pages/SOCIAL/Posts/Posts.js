import React from 'react';
import { useFetchAllPostQuery } from "../../../store";
import Post from "../Post/Post"
const Posts = () => {
    const { data, error, isLoading } = useFetchAllPostQuery();
    let content;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    else if (error) {
        content = <div>Error..</div>
    } else {
        content = data.map((post) => {
            return <Post data={post} />
        })

    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Posts;