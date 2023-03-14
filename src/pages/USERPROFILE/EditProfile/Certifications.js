import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Certifications() {
    const [coursename, setCoursename] = useState("");
    const [startdate, setSdate] = useState("");
    const [enddate, setEdate] = useState("");
    const [org, setOrg] = useState("");
    const [skill, setSkill] = useState("");
    const [desc, setDesc] = useState("");
    const [save, setSave] = useState("");
    const [file, setFile] = useState(null);
    const [error,setError] = useState("");

    const handlecoursename = (e) => {
        setCoursename(e.target.value)
        console.log(coursename)
    }

    const handlesdate = (e) => {
        setSdate(e.target.value)
        console.log(startdate)
    }

    const handleedate = (e) => {
        setEdate(e.target.value)
        console.log(enddate)
    }

    const handleorg = (e) => {
        setOrg(e.target.value)
        console.log(org)
    }

    const handleskill = (e) => {
        setSkill(e.target.value)
        console.log(skill)
    }

    const handledesc = (e) => {
        setDesc(e.target.value)
        console.log(desc)
    }

    const handlecancel = (e) => {
        setCoursename("")
        setSdate("")
        setEdate("")
        setOrg("")
        setSkill("")
        setDesc("")
        setSave("")

        //console.log(cancel)
    }
    const handlesave = (e) => {
        setSave(e.target.value)

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
    if(Date.parse(enddate) <= Date.parse(startdate)){
        toast.error("Invalid End Date")
        return;
    }
};



    return (
        <div className='md:flex md:flex-row md:items-center md:justify-center'> 
            <form onSubmit={handleSubmit} className='font-serif ml-5 mt-5 mr-5'>
                <h1 className='text-3xl py-5 font-bold'>CERTIFICATIONS</h1>

                <div className='space-y-8'>
                    <div className='mx-0'>
                        <label className='text-black-600'>COURSE NAME</label>
                        <br />
                        <input className='bg-gray-200 rounded w-full md:w-full' type="coursename" value={coursename} onChange={handlecoursename} />
                    </div>

                    <div className='flex space-x-2 mx-2'>
                        <div>
                            <label className='text-black-600'>START DATE</label>
                            <br />
                            <input className='bg-gray-200 rounded w-full md:w-full' type='date'  value={startdate} onChange={handlesdate} />
                        </div>

                        <div> 
                            <label className='text-black-600'>END DATE</label>
                            <br />
                            <input className='bg-gray-200 rounded w-full md:w-full' type='date' value={enddate} onChange={handleedate} />
                        </div>

                    </div>

                    <div>
                        <label className='text-black-600 mx-2'>ORGANISATION</label>
                        <br />
                        <input className='bg-gray-200 rounded w-full md:w-full mx-2' type="org" value={org} onChange={handleorg} />
                    </div>

                    <div>
                        <label className='text-black-600 mx-2'>PROJECT</label>
                        <br />

                        <input className='bg-gray-200 rounded md:w-full w-full mx-2 ' type="skill" value={skill} placeholder="Skills used..." onChange={handleskill} />
                        <br />
                        <br/>
                        <textarea className='bg-gray-200 rounded md:w-full w-full mx-2' placeholder='Description...(within approximately 200 words)' rows={5} cols={40} type="desc" value={desc} onChange={handledesc} />

                    </div>

                </div>
                <br />

                <div className="md:w-1/2">
                    <div className=" pt-2 flex gap-3 justify-end">
                        <button
                            type="submit" value={save} onClick={handlecancel}
                            className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white w-24 h-10  border border-red-500 hover:border-transparent rounded mx-2"
                        >Cancel
                        </button>
                        <button
                            type="submit" value={save} onClick={handlesave}
                            className="bg-blue-500 border-2 hover:bg-indigo-800 hover:border-sky-400 text-white font-bold w-24 h-10 rounded"
                        >Save
                        </button>
                    </div>
                </div>
                <br/>
            </form>
            <ToastContainer/>
        </div>
    )
}