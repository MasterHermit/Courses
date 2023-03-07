import React from "react";
import { useFetchCoursesQuery } from "../../../store";
import Card from "./Cards/Card";
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer"
import { MdCastForEducation } from "react-icons/md"

const Courses = () => {
  const { data, error, isLoading } = useFetchCoursesQuery();
  let content;
  if (isLoading) {
    content = <div>Loading..</div>;
  } else if (error) {
    content = <div>Error..</div>;
  } else {
    content = data.map((course) => {
      return <Card key={course.course_id} course={course} />;
    });
  }
  return <div className="flex flex-col">

    <Hero />
    <div className="flex flex-col flex-wrap m-6 md:ml-24">
      <div className=" flex flex-row items-center m-6 text-6xl">
        <span><MdCastForEducation /></span>
        <p className="ml-6">Courses</p>

      </div>
      <div className="flex flex-row flex-wrap">
        {content}
      </div>
    </div>

    <Footer />
  </div>;
};

export default Courses;
