import React from 'react';

const Post = ({ data }) => {
    return (
        <div className="flex flex-col justify-between h-96 mt-4  bg-red-400">
            <div className="h-[20%]">
                avatar
            </div>
            <div className="h-[40%]">
                <p className="font-bold">There is a hole in the pool</p>
                <img
                    className='object-contain'
                    src="https://images.unsplash.com/photo-1533319417894-6fbb331e5513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                    alt="post"
                />
            </div>
            <div className='h-[30%]'>
                <p>description</p>
            </div>
            <div className='flex flex-row justify-between h-[10%]'>
                <p className="ml-6">Like</p>
                <p className="mr-6">save</p>
            </div>
        </div>
    );
};

export default Post;