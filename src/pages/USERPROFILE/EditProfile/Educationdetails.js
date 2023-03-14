import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Educationdetails() {
  const [university, setuniversity] = useState("");
  const [degree, setdegree] = useState("");
  const [marks, setmarks] = useState(null);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [save, setsave] = useState("");
  const [error, seterror] = useState("");

  const handleuniversity = (e) => {
    setuniversity(e.target.value);
  };
  const handledegree = (e) => {
    setdegree(e.target.value);
  };
  const handlemarks = (e) => {
    setmarks(e.target.value);
  };
  const handlestartdate = (e) => {
    setstartdate(e.target.value);
  };
  const handleenddate = (e) => {
    setenddate(e.target.value);
  };
  const handleCancel = (e) => {
    //setsave("");
    setuniversity("");
    setdegree("");
    setmarks(null);
    setstartdate("");
    setenddate("");
  };
  const handleSave = (e) => {
    setsave(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror([]);
    if (university === "") {
      toast.error("University feild is Required");
      return;
    }
    if (degree === "") {
      toast.error("Degree feild is Required");
      return;
    }
    if (marks === null) {
      toast.error("Marks obtained is Required");
      return;
    }
    if (startdate === "") {
      toast.error("Start date is Required");
      return;
    }
    if (enddate === "") {
      toast.error("End date feild is Required");
      return;
    }
    if (Date.parse(enddate) <= Date.parse(startdate)) {
      toast.error("Invalid End date");
      return;
    }
  };

  return (
    <div className="mx-7 mt-7  h-screen flex  justify-center items-center ">
      <form onSubmit={handleSubmit} className="  sm:w-3/5 ">
        <h1 className="text-xl font-bold font-serif">EDUCATION </h1>
        <div className="flex-col">
          <div>
            <div>
              <label className="font-serif">UNIVERSITY</label>
            </div>
            <input
              type="text"
              value={university}
              onChange={handleuniversity}
              className="  bg-gray-200 rounded  w-full "
            ></input>
          </div>
          <div className="mt-3">
            <div>
              <label className="font-serif">DEGREE</label>
            </div>
            <input
              type="text"
              value={degree}
              onChange={handledegree}
              className=" w-full   bg-gray-200 rounded "
            ></input>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <label className="font-serif">MARKS OBTAINED (in percentage)</label>
          </div>

          <input
            type="number"
            value={marks}
            onChange={handlemarks}
            min="1"
            max="100"
            className=" bg-gray-200 rounded"
          ></input>
        </div>
        <div className="mt-3 flex space-x-4">
          <div>
            <div>
              <label className="font-serif">START DATE</label>
            </div>

            <input
              type="date"
              value={startdate}
              onChange={handlestartdate}
              className=" bg-gray-200 rounded"
            ></input>
          </div>
          <div>
            <div>
              <label className="font-serif">END DATE</label>
            </div>

            <input
              type="date"
              value={enddate}
              onChange={handleenddate}
              className=" bg-gray-200 rounded"
            ></input>
          </div>
        </div>
        <div className="mt-4">
          <div className=" pt-2 flex gap-2 justify-end">
            <button
              type="submit"
              value={save}
              onClick={handleCancel}
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-24 h-10  border border-red-500 hover:border-transparent rounded "
            >
              CANCEL
            </button>
            <button
              type="submit"
              value={save}
              onClick={handleSave}
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

export default Educationdetails;