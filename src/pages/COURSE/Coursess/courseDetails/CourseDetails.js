import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCourseQuery } from '../../../../store';
import Error from "../../../Error/Error"
import './CourseDetails.css';
import Accordion from "./Accordion";
import Footer from "../../../../components/Footer/Footer"
import { CiApple } from 'react-icons/ci';
import { RiEnglishInput } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';
import { BsCalendar2Date } from 'react-icons/bs';
import { BsHourglassTop } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs';
import Feedback from '../Feedback/Feedback';

// import Accordion from './Accordion';
// import Footer from "../../../../components/Footer/Footer"
// import { CiApple } from 'react-icons/ci';
// import { RiEnglishInput } from 'react-icons/ri';
// import { AiOutlineCalendar } from 'react-icons/ai';
// import { DiJavascript1 } from 'react-icons/di';
// import { BsCalendar2Date } from 'react-icons/bs';
// import { BsHourglassTop } from 'react-icons/bs';
// import { BsBook } from 'react-icons/bs';



const CourseDetails = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useFetchCourseQuery(id);
    let content;
    if (isLoading) {
        content = <div>Loading....</div>
    } else if (error) {
        content = <Error />
    } else {
        content = data
    }

    const { course_id,
        title,
        language,
        updated_date,
        course_type,
        course_uses,
        time_duration_,
        no_of_lectures,
        ...curriculum } = content

    const items = [
        {
            id: 'l2kj5',
            label: 'Can I use React on a project?',
            content: [
                {
                    title: "hooks in react",
                    time: "13.46"
                },
                {
                    title: "hooks in react",
                    time: "13.46"
                },
                {
                    title: "hooks in react",
                    time: "13.46"
                },
            ]

        },

    ];


    const [showMore, setShowMore] = useState(false);
    const info = "When I read something on websites and saw a show more/less button, I thought it was a good feature because it makes everything on the website look more clean. So I would like to share an easy way to insert a show more/less button by using React- State Hook."
    return (
        <div className='flex flex-col  h-auto'>
            <div className='  m-1 md:m-2 course__banner'>
                <p className='font-bold text-3xl text-white m-1'>
                    Javascript in your finger tips : touch me
                </p>
                <p className='m-1 text-zinc-200 text-justify font-medium '>
                    Go from complete novice to expert in Javascript using step
                    -by-step, no-assumptions learning.
                </p>
                <div className='my-4 py-2 text-zinc-900 font-medium hover:font-bold'>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <CiApple />
                        </span>
                        <p className='ml-2'>PrepLabs</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <RiEnglishInput />
                        </span>
                        <p className='ml-2'>language - English</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <AiOutlineCalendar />
                        </span>
                        <p className='ml-2'>Updated on feb,2023</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <DiJavascript1 />
                        </span>
                        <p className='ml-2'>Development, Javascript</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <BsCalendar2Date />
                        </span>
                        <p className='ml-2'>Uses in ---- --- ------</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <BsHourglassTop />
                        </span>
                        <p className='ml-2'>40+ hours</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                            <BsBook />
                        </span>
                        <p className='ml-2'>10 lectures</p>
                    </span>
                </div>
            </div>
            <div className=' m-1 md:m-2 bg-zinc-300'>
                <p className='font-bold text-xl bg-zinc-400'>
                    <span className='ml-2'>
                        Course Description
                    </span>
                </p> 
                <p className='overflow-clip leading-relaxed m-2 text-justify'>
                    {showMore ? info : `${info.substring(0, 80)}... `}
                    <button
                        className='underline bg-blue-700 text-white hover:bg-blue-600 rounded-lg px-2'
                        onClick={() => setShowMore(prevVal => !prevVal)}>
                        {showMore ? "show less" : " show more"}
                    </button>
                </p>
                <div className="mt-5 ml-2">Course Details klkdkjljklf</div>
            </div>
            <div className='m-2 md:m-6 bg-slate-300'>
                <div className='h-auto  '>
                    <p className='text-2xl font-bold mb-6 ml-1'>Course Content</p>
                    <Accordion items={items} />
                </div>
                <div>

                </div>
            </div>
            <div className='m-2 md:m-6'>
                <p className='text-2xl font-bold mb-6'>Feedback</p>
                <Feedback />
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetails;