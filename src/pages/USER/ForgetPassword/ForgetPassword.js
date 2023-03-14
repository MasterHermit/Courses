import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useUserAuth } from '../context/UserAuthContextProvider';
import axios from "axios";

export default function ForgetPassword() {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // const { forgetPasswordHandle } = useUserAuth(); 
    // const handleSubmit = async (e) => {
        
    //     e.preventDefault();
    //     try
    //     {
    //         await forgetPasswordHandle(email);
    //         navigate("/login");
    //     }
    //     catch(err){
    //         console.log(err.message)
    //     }

    // }


    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            email : email
        };

        axios.post('accounts/api/websites/forgot-password-send-otp/',data)
        .then( res => {
            console.log(res)
            navigate("/otp");
        })
        .catch( err => {
            console.log(err)
        })

    }

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-12 text-3xl text-center">FORGET PASSWORD</h1>

                        <form onSubmit={handleSubmit}>

                        <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block border border-grey-light p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="email"
                                value={email}
                                placeholder="Email" />

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className=" border-2 text-center px-2 py-2 rounded bg-red-600 text-white text-2xl ... focus:outline-none my-1 w-64 hover:bg-white hover:text-black md:w-80"
                            >Reset Password</button>
                        </form>



                    </div>


                </div>
            </div>
        </div>
    )
}
