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

        <form className="w-full border-2 border-red-600 ">
            <div>
                <div className="star-rating">
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
                    className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your comment here"
                ></textarea>
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>

    );
};

export default CreateFeedback;