import React, { useState, useEffect } from 'react';
import OTPInput from "otp-input-react";
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-input-2/lib/style.css'
// import PhoneInput from 'react-phone-input-2';

import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function OTP() {

    // const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    const navigate = useNavigate();

    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const resendOTP = () => {
        setMinutes(1);
        setSeconds(30);
        setOtp("");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const handleSubmit = () => {
        console.log("Handle Submit");

        const data = {
            email: email,
            otp: otp
        };

        axios.post('accounts/api/websites/forgot-password-verify-otp/', data)
            .then(res => {
                console.log(res)
                navigate("/ResetPassword");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>

            <div className="h-screen   bg-sky-100 py-20 px-3">
                <div className="container mx-auto border-5 border-orange-500">
                    <div className="max-w-sm mx-auto md:max-w-lg border-2">
                        <div className="w-full">
                            <div className="bg-zinc-300 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">OTP VERIFICATION</h1>

                                {/* <PhoneInput
                                    country='us'
                                    value={number}
                                    onChange={(e)=>setNumber(e.target.value)}
                                    placeholder="Enter the Phone Number"
                                />                */}



                                <input
                                    type="email"
                                    className="mt-3 p-3 w-64 md:w-64"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="Enter the Email"
                                />


                                <div className="flex flex-col mt-4">
                                    <span>Enter the OTP you received </span>
                                </div>



                                <OTPInput className="ml-5 md:ml-32 mt-6  w-full" value={otp} onChange={handleChange} autoFocus OTPLength={6} otpType="number" disabled={false} secure separator={<span>-</span>} />

                                <div className="countdown-text mt-3">
                                    {seconds > 0 || minutes > 0 ? (
                                        <p>
                                            Time Remaining:
                                            <span className='text-emerald-500'>
                                                {minutes < 10 ? `0${minutes}` : minutes}:
                                                {seconds < 10 ? `0${seconds}` : seconds}
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="mt-2 mb-2">Didn't recieve code?</p>
                                    )}

                                    <button className="mt-3 text-2xl"
                                        disabled={seconds > 0 || minutes > 0}
                                        style={{
                                            color: seconds > 0 || minutes > 0 ? "black" : "#FF5630",
                                        }}
                                        onClick={resendOTP}
                                    >
                                        Resend OTP
                                    </button>

                                    <button className="mt-3 bg-green-700 p-2 text-xl text-white block ml-20 md:ml-32 hover:text-black hover:bg-white w-36 md:w-64" onSubmit={handleSubmit}>
                                        Verify
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}









