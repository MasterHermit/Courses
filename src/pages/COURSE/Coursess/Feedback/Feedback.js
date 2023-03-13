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
            <div className="md:flex md:flex-row md:flex-wrap md:ml-24">
                <DisplayFeedback />
                <DisplayFeedback />
                <DisplayFeedback />
                <DisplayFeedback />
            </div>
        </div>
    );
};

export default Feedback;