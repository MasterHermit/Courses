import { FaBookmark, FaHeart } from 'react-icons/fa'
import { useState } from 'react'

const Post = ({ data }) => {

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
    let ImagesUrl = "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"



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
                {ImagesUrl ? (
                    <img className='w-screen md:w-[650px] md:h-[277px] ' src={ImagesUrl} alt='post' />
                ) : null}
            </div>
            <div className='flex flex-col bg-amber-400 max-w-full md:w-[650px] p-4'>
                <div className='text-3xl font-semibold'>
                    <p>22 Valuable Lessons From Decade of Software Engineering</p>
                </div>
                <div className='flex flex-col'>
                    <p className={readMore ? "" : "truncate"}>Objectively composed of unrelated words, Lorem ipsum owes its existence to Marco Tullio Cicerone and to some steps of his De finibus bonorum et malorum (The highest good and the highest evil) written in 45 BC , a classic of Latin literature dating back more than 2000 years ago.

                        The discovery was made by Richard McClintock , a professor of Latin at Hampden-Sydney College in Virginia, who faced the impetuous recurrence of the dark word consectetur in the text Lorem ipsum researched its origins to identify them in sections 1.10.32 and 1.10.33 of the aforementioned Cicero's philosophical work.

                        The words taken from one of the dialogues contained in the De finibus are therefore the pieces of the most famous nonsensical text in the world.</p>
                    <p />
                    <button onClick={changeReadMore}>{readMore ? 'Show less' : 'Read more'}</button>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center space-x-2'>
                            <p><FaHeart className='w-6 h-6'
                                onClick={handleClick}
                                style={{ color: color }} /></p>
                            <p className='text-lg'>123</p>
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