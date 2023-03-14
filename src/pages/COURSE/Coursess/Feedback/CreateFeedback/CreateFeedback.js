import React, { useState } from 'react';
import "./CreateFeedback.css"

const CreateFeedback = () => {
    const [feedback, setFeedback] = useState({
        star: "",
        feedback_content: ""
    })
    const [hover, setHover] = useState(0);
    const handleOnChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value })
    }

    return (

        <form className="w-full h-[28rem] border-2 shadow-sm">
            <div>
                <div className="star-rating h-[2rem] ml-2 text-2xl">
                    {[...Array(5)].map((star, index) => {
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= feedback.star ? "star on" : "star off"}
                                onClick={() => setFeedback.star(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(feedback.star)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div>
                <textarea
                    id="comment"
                    name="comment"
                    value={feedback.feedback_content}
                    onChange={handleOnChange}
                    className="inline-block w-full h-[22rem] px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                    placeholder="Enter your comment here........"
                ></textarea>
            </div>
            <div className='text-center m-2'>
                <button type="submit" className='bg-blue-700 px-2  font-semibold text-xl text-white shadow-lg hover:scale-110 transition duration-300 ease-linear'>
                    Submit
                </button>
            </div>
        </form>

    );
};

export default CreateFeedback;