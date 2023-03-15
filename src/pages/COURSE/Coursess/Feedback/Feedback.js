import React from 'react';
import { useFetchFeedbacksQuery } from '../../../../store';
import CreateFeedback from './CreateFeedback/CreateFeedback';
import DisplayFeedback from './DisplayFeedback/DisplayFeedback';


const Feedback = () => {
    const{data,error,isLoading}=useFetchFeedbacksQuery();
    return (
        <div>
            <div>
                <CreateFeedback />
            </div>
            <div className="md:flex md:flex-row md:flex-wrap md:mt-10 md:w-[50rem] md:ml-[32rem]">
                <DisplayFeedback />
                <DisplayFeedback />
                <DisplayFeedback />
                <DisplayFeedback />
            </div>
        </div>
    );
};

export default Feedback;