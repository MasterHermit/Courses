import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react"
import FileBase from 'react-file-base64';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreatePostMutation } from '../../../store';

const CreatePost = () => {
    const [addPost, results] = useCreatePostMutation();
    const editor = useRef(null);
    const categories = [
        { categoryId: "1", title: "medical" },
        { categoryId: "2", title: "railway" },
        { categoryId: "3", title: "civil" },
        { categoryId: "4", title: "eng" },
        { categoryId: "5", title: "diploma" },
    ]
    const [post, setPost] = useState({
        title: "",
        banner: "",
        content: "",
        category: ""
    })

    function contentFieldChanaged(data) {
        setPost({ ...post, "content": data })
    }
    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (post.title.trim() === '') {
            toast.error("post  title is required !!")
            console.log("title missing");
            return;
        }

        if (post.content.trim() === '') {
            toast.error("post content is required !!")
            return
        }

        if (post.category === '') {
            toast.error("select some category !!")
            return;
        }
        addPost(post);
        setPost({ title: "", banner: "", content: "", category: "" })
        console.log(post);
    }
    return (
        <div className="flex flex-col items-center w-screen">
            <div className=" w-full mt-6 px-4 md:w-[80%]">
                <form onSubmit={handleSubmit}>

                    <div>
                        <input
                            className='my-4 block w-full  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-[black]'
                            type="text"
                            name="title"
                            placeholder="title"
                            value={post.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-4 ">
                        <FileBase

                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPost({ ...post, banner: base64 })}

                        />
                    </div>

                    <div className="my-4" >
                        <JoditEditor
                            ref={editor}
                            value={post.content}

                            onChange={(newContent) => contentFieldChanaged(newContent)}
                        />
                    </div>
                    <div className="my-4">
                        <label className='mr-2'>Select a Category </label>
                        <select
                            name="category"
                            value={post.category}
                            onChange={handleChange}

                        >
                            <option>
                                --- Categories ---
                            </option>
                            {
                                categories.map((category) => (
                                    <option value={category.categoryId} key={category.categoryId}>
                                        {category.title}
                                    </option>
                                ))
                            }
                        </select>


                    </div>
                    <div className='my-6 flex flex-row justify-center items-center'>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            submit
                        </button>
                    </div>

                    <ToastContainer />

                </form>
            </div>

        </div>

    );
};

export default CreatePost;