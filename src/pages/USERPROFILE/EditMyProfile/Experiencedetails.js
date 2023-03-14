import React, { useState } from "react";

function Experiencedetails() {
  const [company, setcompany] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Role, setRole] = useState("");
  const [Technologyused, setTechnologyused] = useState("");
  const [startdate, setstartdate] = useState(null);
  const [enddate, setenddate] = useState(null);
  const [currentwork, setcurrentwork] = useState("");
  const [save, setsave] = useState("");

  const handlecompany = (e) => {
    setcompany(e.target.value);
    //console.log(company, e.target.value);
  };
  const handledesignation = (e) => {
    setDesignation(e.target.value);
  };
  const handlerole = (e) => {
    setRole(e.target.value);
  };
  const handletechnologyused = (e) => {
    setTechnologyused(e.target.value);
  };

  const handlestartdate = (e) => {
    setstartdate(e.target.value);
  };
  const handleenddate = (e) => {
    setenddate(e.target.value);
  };
  const handlecurrentwork = (e) => {
    setcurrentwork(e.target.value);
  };
  const handleCancel = (e) => {
    setsave("");
  };
  const handleSave = (e) => {
    setsave(e.target.value);
  };

  return (
    <div className=" mx-7 mt-7  h-screen flex justify-center items-center ">
      <form action="" className=" sm:w-3/5 ">
        <h1 className="font-serif text-2xl font-bold"> EXPERIENCE</h1>
        <div>
          <div className="flex-col space-y-4">
            <div>
              <div>
                <label className=" font-serif">COMPANY</label>
              </div>
              <input
                type="text"
                value={company}
                onChange={handlecompany}
                className=" bg-gray-200 rounded w-full  "
              ></input>
            </div>
            <div>
              <div>
                <label className="font-serif">DESIGNATION</label>
              </div>

              <input
                type="text"
                value={Designation}
                onChange={handledesignation}
                className=" bg-gray-200 rounded w-full  "
              ></input>
            </div>
            <div>
              <div>
                <label className="font-serif">ROLE</label>
              </div>
              <input
                type="text"
                value={Role}
                onChange={handlerole}
                className=" bg-gray-200 rounded w-full "
              ></input>
            </div>
            <div>
              <div>
                <label className="space-y-12 font-serif">TECHNOLOGY USED</label>
              </div>
              <input
                type="text"
                value={Technologyused}
                onChange={handletechnologyused}
                className=" bg-gray-200 rounded w-full  mb-4"
              ></input>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <div>
                <label className="font-serif">START DATE</label>
              </div>
              <input
                type="date"
                value={startdate}
                onChange={handlestartdate}
                className="bg-gray-200  rounded "
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
                className="bg-gray-200  rounded "
              ></input>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label className="font-serif">CURRENTLY WORKING</label>
            </div>
            <input
              type="text"
              value={currentwork}
              onChange={handlecurrentwork}
              className=" bg-gray-200 rounded w-full "
            ></input>
          </div>
        </div>
        <div className="sm:w-3/5">
          <div className=" pt-2 flex gap-2 justify-end">
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
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-24 h-10 rounded"
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Experiencedetails;