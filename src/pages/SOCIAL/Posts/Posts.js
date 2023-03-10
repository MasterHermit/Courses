import React, { useState } from 'react';
import { useFetchAllPostQuery } from "../../../store";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error"
import Post from "../Post/Post"
const Posts = () => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useFetchAllPostQuery(page);
    let content;
    if (isLoading) {
        content = <Loading />
    }
    else if (error) {
        content = <Error />
    } else {
        content = data.map((post) => {
            return <Post key={post.id} data={post} />
        })

    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Posts;