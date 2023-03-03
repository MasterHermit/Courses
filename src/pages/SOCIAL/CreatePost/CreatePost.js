import React, { useState } from 'react';
import FileBase from 'react-file-base64';

const CreatePost = () => {
    const [postData, setPostData] = useState({ category: '', title: '', description: '', selectedFile: '' });
    function handleChange(e) {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="w-screen h-screen flex flex-col ">
            <div className="flex flex-col  w-auto my-auto justify-items-center border-2 border-red-600">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the title"
                        className=' mb-[20px] text-2xl  border-2 border-red-600 '
                        value={postData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        cols="40"
                        rows="4"
                        name="description"
                        placeholder="What do you want to talk about?"
                        className='border-2 border-red-600 mb-[20px]'
                        value={postData.description}
                        onChange={handleChange}
                    />
                    <div className="mb-[20px]" ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                    <button
                        type="button"
                        className='border-2 text-2xl border-red-600'
                    >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;