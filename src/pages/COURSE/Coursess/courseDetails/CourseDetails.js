import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCourseQuery } from '../../../../store';
import Error from "../../../Error/Error";
import Accordion from "./Accordion";
import Footer from "../../../../components/Footer/Footer";

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
            content:
                'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
        {
            id: 'lk2j35lkj',
            label: 'Can I use Javascript on a project?',
            content:
                'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
        {
            id: 'l1kj2i0g',
            label: 'Can I use CSS on a project?',
            content:
                'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
    ];


    const [showMore, setShowMore] = useState(false);
    const info = "When I read something on websites and saw a show more/less button, I thought it was a good feature because it makes everything on the website look more clean. So I would like to share an easy way to insert a show more/less button by using React- State Hook."
    return (
        <div className='flex flex-col  h-auto  '>
            <div className='  m-2 md:m-6'>
                <p className='font-bold text-3xl'>
                    Javascript in your finger tips : touch me
                </p>
                <div className='my-4 py-2'>
                    <p>PrepLabs</p>
                    <p>language - English</p>
                    <p>Updated on Feb, 2023</p>
                    <p>Development, Python</p>
                    <p>Uses in  ---- --- -------</p>
                    <p>40+ hours</p>
                    <p>10 lectures</p>
                </div>
            </div>
            <div className=' m-2 md:m-6'>
                <p className='overflow-clip leading-relaxed'>
                    {showMore ? info : `${info.substring(0, 20)}... `}
                    <button
                        className='underline'
                        onClick={() => setShowMore(prevVal => !prevVal)}>
                        {showMore ? "show less" : " show more"}
                    </button>
                </p>
                <div className="mt-6">Course Details klkdkjljklf</div>
            </div>
            <div className='m-2 md:m-6'>
                <div className='h-auto  '>
                    <p className='text-2xl font-bold mb-6'>Course Content</p>
                    <Accordion items={items} />
                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetails;