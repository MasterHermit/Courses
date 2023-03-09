import { useState } from 'react';
import { Parser } from 'html-to-react'
import { FaBookmark, FaHeart } from 'react-icons/fa'

const Post = ({ data }) => {
    const content = Parser().parse(data.content)

    const [color, setColor] = useState('white');
    const [Bookcolor, setBookColor] = useState('white');
    const [readMore, setReadMore] = useState(false);

    function handleClick() {
        setColor(color === 'white' ? 'red' : 'white');
    }

    function handleBookmark() {
        setBookColor(Bookcolor === 'white' ? 'black' : 'white');
    }

    function changeReadMore() {

        setReadMore(prevValue => !prevValue)
    }

    return (
        <div className='shadow-2xl my-6'>
            <div className='flex flex-row pl-1'>
                <div className='mt-3 flex overflow-hidden'>
                    <img className='inline-block h-12 w-12 rounded-full' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHZwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='avatar' />
                </div>
                <div className='flex flex-col ml-3 items-center'>
                    <p>Awesome Ankush</p>
                    <p>Posted on Feb 28</p>
                </div>
            </div>
            <div className='mt-2'>
                {data.banner ? (
                    <img className='w-screen md:w-[650px] md:h-[277px] ' src={data.banner} alt='post' />
                ) : null}
            </div>
            <div className='flex flex-col bg-amber-400 max-w-full md:w-[650px] p-4'>
                <div className='text-3xl font-semibold'>
                    <p>{data.title}</p>
                </div>
                <div className='flex flex-col'>

                    <p className={readMore ? "" : "truncate"}>{content}</p>

                    <button onClick={changeReadMore}>{readMore ? 'Show less' : 'Read more'}</button>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center space-x-2'>
                            <p><FaHeart className='w-6 h-6'
                                onClick={handleClick}
                                style={{ color: color }} /></p>
                            <p className='text-lg'>{data.like}</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <p ><FaBookmark className='w-6 h-6' onClick={handleBookmark}
                                style={{ color: Bookcolor }} /></p>
                            <p className='text-lg'>Bookmark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post