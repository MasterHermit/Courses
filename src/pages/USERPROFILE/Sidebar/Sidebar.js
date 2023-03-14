import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
 
    return (
        <div className={`h-auto w-64 bg-cyan-300 text-2xl text-center text-white' ${ isOpen ? 'w-screen md:w-[300px]' : 'w-[50px]' } `}>
            <GiHamburgerMenu className='cursor-pointer' onClick={toggle}/>
            <ul>
                {SidebarData.map((val, key) => {
                    return <NavLink to={val.link} key={key} className="rounded mt-1 mb-4 flex flex-row  ... hover:bg-black hover:text-slate-900 hover:border-b-4 hover:cursor-pointer" onClick={() => { window.location.pathname = val.link }}>
                        <div className='ml-2 text-2xl mt-4 text-white'>{val.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className='ml-4 mt-3 text-xl text-center ... text-white'>{val.title}</div>
                    </NavLink>
                })}
            </ul>

        </div>
    )
}

export default Sidebar;