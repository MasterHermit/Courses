import React from 'react';
import { useFetchAllPostQuery } from "../../store";

const Posts = ({ user }) => {
    const { data, error, isLoading } = useFetchAllPostQuery(user);
    let content;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    else if (error) {
        content = <div>Error..</div>
    } else {
        content = data
        console.log(content);
    }
    return (
        <div>
            
        </div>
    );
};

export default Posts;