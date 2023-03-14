import React, {useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditProfile() {
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [cn, setCn] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [we, setWe] = useState("");
    const [save, setSave] = useState("");
    const [file, setFile] = useState(null);
    const [error,setError] = useState("");


    const handlefname = (e) => {
        setfName(e.target.value)
        console.log(fname)
    }

    const handlelname = (e) => {
        setlName(e.target.value)
        console.log(lname)
    }

    const handleemail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handlecn = (e) => {
        setCn(e.target.value)
        console.log(cn)
    }

    const handledate = (e) => {
        setDate(e.target.value)
        console.log(date)
    }

    const handlegender = (e) => {
        setGender(e.target.value)
        console.log(gender)
    }

    const handlewe = (e) => {
        setWe(e.target.value)
        console.log(we)
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError([]);
        if (fname === "") {
            toast.error("First Name field is required")
            return;
        }
        if (fname.length < 5) {
            toast.error("Please enter a Name of length greater than 5")
            return;

        }

        if (email === "") {
            toast.error("Email field is required")
            return;
        }
        if (cn === "") {
            toast.error("Contact Number field is required")
            return;
        }
        if (date === "") {
            toast.error("Date of Birth field is required")
            return
        }
    }



    const handlecancel = (e) => {
        setfName("")
        setlName("")
        setEmail("")
        setCn("")
        setDate("")
        setWe("")
        setFile("")
        setSave("")
    }

    const handlesave = (e) => {
        setSave(e.target.value)
    }

    

    return (

        <div className='md:flex md:flex-row md:items-center md:justify-center'>
            <form onSubmit={handleSubmit}  className='font-serif ml-5 mt-5 mr-5 ' >
                
                <h1 className='text-3xl py-5 font-bold'>EDIT PROFILE</h1>
                

                <div className='space-y-8'>
                    <div className='flex md:w-1/2 w-full space-x-16 '>

                        <div>
                            <label className='text-black-600 '>FIRST NAME*</label>
                            <br />

                            <input className='bg-gray-200 rounded-sm md:w-64 w-full' type="fname" value={fname} placeholder="Abhipsa" onChange={handlefname} />


                        </div>

                        <div>
                            <label className='text-black-600'>LAST NAME</label>
                            <br />
                            <input className='bg-gray-200 rounded-sm md:w-64 w-full' type="lname" value={lname} placeholder="Bhujabala" onChange={handlelname} />
                        </div>
                    </div>


                    <div>
                        <label className='text-black-600'>E-MAIL*</label>
                        <br />
                        <input className='bg-gray-200 rounded w-full md:w-1/2' type="email" value={email} placeholder="abhipsabhujababala@gmail.com" onChange={handleemail}  />
                    </div>

                    <div>
                        <label className='text-black-600'>CONTACT NUMBER*</label>
                        <br />
                        <input className='bg-gray-200 rounded w-full md:w-1/2' type="cn" value={cn} onChange={handlecn} />
                    </div>

                    <div className='flex md:w-1/2 w-screen space-x-16'>
                        <div>
                            <label className='text-black-600'>BIRTH DATE*</label>
                            <br />
                            <input className='bg-gray-200 rounded-sm ' type='date' value={date} placeholder='Enter BirthDate' onChange={handledate} />
                        </div>

                        <div >
                            <label className='text-black-600'>SELECT GENDER*</label>
                            <br />
                            <select className='bg-gray-200 rounded-sm w-32' name="gender" onChange={handlegender} >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>

                            </select>
                        </div>
                    </div>


                    <div>
                        <label className='text-black-600'>WORK EXPERIENCE*</label>
                        <br />
                        <select className='bg-gray-200 rounded-sm w-full md:w-1/2' name="we" onChange={handlewe} >
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>

                        </select>
                    </div>

                    <div>
                        <input type="file" onChange={handleFileChange} />

                        <button onClick={handlesave}></button>
                        <p>Upload Resume</p>
                    </div>

                    <div>

                    </div>


                </div>
                <br />

                <div className="md:w-1/2">
                    <div className=" pt-2 flex gap-2 justify-end">
                        <button
                            type="submit"
                            value={save}
                            onClick={handlecancel}
                            className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white w-24 h-10  border border-red-500 hover:border-transparent rounded "
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            value={save}
                            onClick={handlesave}
                            className="bg-blue-500 border-2 hover:bg-indigo-800 hover:border-sky-200 text-white font-bold w-24 h-10 rounded"
                            >
                            Save
                        </button>
                    </div>
                </div>

            </form>
            <ToastContainer/>
        </div>


    )
    
}