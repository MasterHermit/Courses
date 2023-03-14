import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import "./Login.css";
// import { useUserAuth } from '../context/UserAuthContextProvider';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState([]);
    const [show, setShow] = useState(false);
    const [loggedIn,setLoggedIn]=useState(false);


    const navigate = useNavigate();
    // const { logIn, googleSignIn } = useUserAuth();

    const handleGoogleSignIn = async (e) => {

        e.preventDefault();
        try {
            // await googleSignIn();
            console.log("Google Signin");
            navigate("/home");
        }
        catch (err) {
            setError(err.message)
        }
    }

    const handleEyeToogle = () => {
        setShow(!show)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
        let emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (email === "") {
            toast.error("Email field is required");
            return;
        }
        if (!emailpattern.test(email)) {
            toast.error("Please enter valid email address");
            return;
        }
        if (password === "") {
            toast.error("Password field is required");
            return;
        }
        if (!passwordpattern.test(password)) {
            toast.error("Please Enter a password with atleast One Uppercase letter,One Lowercase Letter,One numeric and one special character");
            return;
        }
        if (password.length < 5) {
            toast.error("Password Length must be greater than 5");
            return;
        }


        console.log(error.length)

        console.log(error)

        if (error.length === 0) {
            // await logIn(email, password);

            const data = {
                email:email,
                password:password
            }

            // const response = await axios.post("http://192.168.1.15:8000/accounts/api/websites/api/token/",data,{withCredentials:true});
            // const response = await axios.post("api/token/",data,{withCredentials:true});
            // console.log(response.data);
            // const { data } = response;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

            axios.post("accounts/api/websites/api/token/",data)
            .then( res => {
                localStorage.setItem('token',res.data.token);
                setLoggedIn(true)
            })
            .catch( error => { 
                console.log(error)
            })

            setEmail("");
            setPassword("");
            navigate("/home");
        }
    };

    // if( loggedIn ){
    //     navigate("/home");
    // }

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-2 text-3xl text-center">Login</h1>

                        <p className="text-center mb-3 text-sm ..."> Log in and start managing your Profile </p>

                        <GoogleButton className='ml-10 md:ml-14 g-btn' onClick={handleGoogleSignIn}>Signin with Google</GoogleButton>

                        <p className="mb-3 w-64 md:w-80 mt-2 mb-2 m-auto text-center">-------- O R -------</p>


                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="email"
                                value={email}
                                placeholder="Email" />

                            <input
                                type={show ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="password"
                                value={password}
                                placeholder="Password" />

                            <span className='hideeye' onClick={handleEyeToogle}>{show ? <AiFillEyeInvisible /> : <AiFillEye />}</span>

                            <div className=" text-sm text-grey-dark mt-4 mb-2">
                                <input className="mr-1" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                                Remember me
                                <span className="text-blue-600/100 ml-10 md:ml-24">
                                    <NavLink to={'/forgetPassword'}>Forget password?</NavLink>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className=" border-2 text-center px-2 py-3 rounded bg-red-600 text-black text-2xl ... focus:outline-none my-1 w-64 md:w-80"
                            >Login</button>

                            <div className="text-grey-dark mt-6">
                                New to Preplabs?
                                <NavLink className="no-underline border-b border-blue text-blue-600" to="/">
                                    Create an account
                                </NavLink>.
                            </div>
                        </form>



                    </div>

                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

