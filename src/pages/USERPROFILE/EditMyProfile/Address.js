import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Address() {
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [pincode, setpincode] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [save, setsave] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [twitter, settwitter] = useState("");
  const [insta, setinsta] = useState("");
  const [fb, setfb] = useState("");
  const [error, setError] = useState([]);

  const handleaddress1 = (e) => {
    setaddress1(e.target.value);
  };
  const handleaddress2 = (e) => {
    setaddress2(e.target.value);
  };
  const handlepincode = (e) => {
    setpincode(e.target.value);
  };
  const handleCity = (e) => {
    setcity(e.target.value);
  };
  const handlestate = (e) => {
    setstate(e.target.value);
  };
  const handlelinkedin = (e) => {
    setlinkedin(e.target.value);
    console.log(linkedin);
  };
  const handletwitter = (e) => {
    settwitter(e.target.value);
  };
  const handleinsta = (e) => {
    setinsta(e.target.value);
  };
  const handlefb = (e) => {
    setfb(e.target.value);
  };
  const handleCancel = (e) => {
    setsave("");
    setaddress1("");
    setaddress2("");
    setpincode("");
    setcity("");
    setstate("");
    setlinkedin("");
    setfb("");
    settwitter("");
    setinsta("");
  };
  const handlesave = (e) => {
    setsave(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    let pincodepattern = /^[1-9][0-9]{5}$/;
    let linkedinurl =
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/;
    // let twitterurl =
    //   /^(http(s):\/\/.)[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/;
    // let instaurl =
    //   /^(http(s):\/\/.)[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/;
    // let fburl =
    //   /^(http(s):\/\/.)[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/;
    if (address1 === "") {
      toast.error("Address feild is Required");
      return;
    }
    if (pincode === "") {
      toast.error("Pincode is Required");
      return;
    }
    if (pincodepattern.test(pincode) == false) {
      toast.error("Please enter valid pincode");
      return;
    }
    if (city === "") {
      toast.error("City is required");
      return;
    }
    if (city.length < 3) {
      toast.error("Invalid Input");
      return;
    }
    if (state === "") {
      toast.error("State is required");
      return;
    }
    if (state.length < 3) {
      toast.error("Invalid State input");
      return;
    }

    if (linkedin.trim() === "" || linkedinurl.test(linkedin) === true) {
      console.log("correct linkedin URL");
    } else {
      toast.error("Invalid Linkedin  URL");
      return;
    }
    if (twitter.trim() === "" || linkedinurl.test(twitter) === true) {
      console.log("correct twitter URL");
    } else {
      toast.error("Invalid Twitter  URL");
      return;
    }
    if (insta.trim() === "" || linkedinurl.test(insta) === true) {
      console.log("correct insta url");
    } else {
      toast.error("Invalid Instagram URL");
      return;
    }
    if (fb.trim() === "" || linkedinurl.test(fb) === true) {
      console.log("correct facebook url");
    } else {
      toast.error("Invalid Facebook URL");
      return;
    }
  };
  return (
    <div className=" mx-7 mt-5 sm:h-screen sm:flex sm:flex-row sm:justify-center sm:items-center">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="text-2xl font-serif font-bold  "> ADDRESS</h1>
          <div className="flex-col space-y-4">
            <div>
              <div>
                <label className="font-serif">ADDRESS 1</label>
              </div>
              <input
                type="text"
                name="address"
                value={address1}
                onChange={handleaddress1}
                className=" bg-gray-200 rounded w-full sm:w-full"
              ></input>
            </div>
            <div>
              <div>
                <label className="font-serif">ADDRESS 2</label>
              </div>
              <input
                type="text"
                value={address2}
                onChange={handleaddress2}
                className="  bg-gray-200 rounded w-full mb-4 sm:w-full"
              ></input>
            </div>
          </div>
          <div className="flex-wrap sm:flex sm:space-x-4">
            <div>
              <div>
                <label className="font-serif ">PINCODE </label>
              </div>
              <input
                type="text"
                name="pincode"
                value={pincode}
                onChange={handlepincode}
                className=" bg-gray-200 rounded"
              ></input>
            </div>
            <div>
              <div>
                <label className="font-serif">CITY</label>
              </div>
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleCity}
                className=" bg-gray-200 rounded "
              ></input>
            </div>
            <div>
              <div>
                <label className="font-serif">STATE</label>
              </div>
              <input
                type="text"
                name="state"
                value={state}
                onChange={handlestate}
                className=" bg-gray-200 rounded"
              ></input>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-serif font-bold mt-4">SOCIAL LINKS</h1>
          <div>
            <div>
              <label className="font-serif">Linked In</label>
            </div>
            <input
              type="text"
              value={linkedin}
              onChange={handlelinkedin}
              className="  bg-gray-200 rounded w-full mb-4 sm:w-full"
            ></input>
          </div>
          <div>
            <div>
              <label className="font-serif">Twitter</label>
            </div>
            <input
              type="text"
              value={twitter}
              onChange={handletwitter}
              className="  bg-gray-200 rounded w-full mb-4 sm:w-full"
            ></input>
          </div>
          <div>
            <div>
              <label className="font-serif">Instagram</label>
            </div>
            <input
              type="text"
              value={insta}
              onChange={handleinsta}
              className="  bg-gray-200 rounded w-full mb-4 sm:w-full"
            ></input>
          </div>
          <div>
            <div>
              <label className="font-serif">Facebook</label>
            </div>
            <input
              type="text"
              value={fb}
              onChange={handlefb}
              className="  bg-gray-200 rounded w-full mb-4 sm:w-full"
            ></input>
          </div>
        </div>
        <div className=" sm:w-3/5">
          <div className=" pt-2 flex gap-2 justify-end  ">
            <button
              type="submit"
              value={save}
              onClick={handleCancel}
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-24 h-10  border border-red-500 hover:border-transparent rounded"
            >
              CANCEL
            </button>
            <button
              type="submit"
              value={save}
              onClick={handlesave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-24 h-10 rounded"
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Address;