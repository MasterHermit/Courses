import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import "./Signup.css";

export default function SignUp() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone]=useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState([]);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const navigate = useNavigate();
    // const { signUp, googleSignIn } = useUserAuth();

    const handleGoogleSignIn = async (e) => {

        e.preventDefault();
        try {
            // await googleSignIn();
            console.log("Google Login");
            navigate("/home");
        }
        catch (err) {
            setError(err.message)
        }
    }

    const handleEyeToogle1 = () => {
        setShow1(!show1)
    }

    const handleEyeToogle2 = () => {
        setShow2(!show2)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
        let emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (fullname === "") {
            toast.error("Name field is required");
            return;
        }
        if (fullname.length < 5) {
            toast.error("Please enter a Name of length greater than 5");
            return;
        }
        if (email === "") {
            toast.error("Email field is required");
            return;
        }
        if (!emailpattern.test(email)) {
            toast.error("Please enter valid email address");
            return;
        }
        if(phone === ""){
            toast.error("Phone field is required");
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
        if (confirmPassword === "") {
            toast.error("Confirm Password field is required");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Confirm Password not matched with password");
            return;
        }


        if (error.length === 0) {

            // await signUp(email, password);
            // await signUp(fullname,email,password)

            const data = {
                username:fullname,
                phone_number:phone,
                email:email,
                password:password
            };

            // await axios.post("accounts/api/websites/register",data)
            // await axios.post("http://192.168.1.15:8000/accounts/api/websites/register/",data)
            await axios.get('/accounts/api/websites/dummy-api/')
            .then(
                res => console.log(res)
            )
            .catch( 
                err => console.log(err)
            )

            setFullname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/login");
        }
    };

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-2 text-3xl text-center">Create account</h1>

                        <p className="text-center mb-3 text-sm ..."> Get started with an account on Preplab </p>

                        <GoogleButton className='ml-14 g-btn' onClick={handleGoogleSignIn}>Signin with Google</GoogleButton>

                        <p className="mb-3 w-64 md:w-80 mt-2 mb-2 m-auto text-center">-------- O R -------</p>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                onChange={(e) => setFullname(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded-lg mt-4 mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="fullname"
                                value={fullname}
                                placeholder="Full Name" />

                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="email"
                                value={email}
                                placeholder="Email" />

                            <input
                                type="number"
                                onChange={(e) => setPhone(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="phone"
                                value={phone}
                                placeholder="Phone Number" />

                            <input
                                type={show1 ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="password"
                                value={password}
                                placeholder="Password" />

                            <span className='hideeye' onClick={handleEyeToogle1}>{show1 ? <AiFillEyeInvisible /> : <AiFillEye />}</span>


                            <input
                                type={show2 ? "text" : "password"}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4 bg-blue-300 text-white w-64 md:w-80"
                                name="confirmpassword"
                                value={confirmPassword}
                                placeholder="Confirm Password" />

                            <span className='hideeye' onClick={handleEyeToogle2}>{show2 ? <AiFillEyeInvisible /> : <AiFillEye />}</span>

                            <div className="text-sm text-grey-dark mt-4 mb-3">
                                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                                &nbsp; By registering you agree to our
                                <span className="text-blue-600/100"> Terms & Conditions </span>
                            </div>

                            <button
                                type="submit"
                                disabled={!checked}
                                className=" border-2 text-center px-2 py-3 rounded bg-red-600 text-black text-2xl ... focus:outline-none my-1  w-64 md:w-80"
                            >Create Account</button>


                            <div className="text-grey-dark mt-6 text-center">
                                Already have an account?
                                <NavLink className="no-underline border-b border-blue text-blue-600" to="/login">
                                    Log in
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
