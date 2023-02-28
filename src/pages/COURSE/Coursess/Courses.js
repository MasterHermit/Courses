import React from "react";
import { useFetchCoursesQuery } from "../../../store";
import CourseCard from "./CourseCard";
import "./Courses.css";

const Courses = () => {
  const { data, error, isLoading } = useFetchCoursesQuery();
  let content;
  if (isLoading) {
    content = <div>Loading..</div>;
  } else if (error) {
    content = <div>Error..</div>;
  } else {
    content = data.map((course) => {
      return <CourseCard course={course} />;
    });
  }
  return <div className="courses-container">{content}</div>;
};

export default Courses;
