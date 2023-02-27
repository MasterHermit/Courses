import React from "react";
import { useFetchCoursesQuery } from "../../../store";
import CourseCard from "./CourseCard";

const Courses = () => {
  const { data, error, isLoading } = useFetchCoursesQuery();
  let content;
  if (isLoading) {
    content = <div>Loading..</div>;
  } else if (error) {
    content = <div>Error..</div>;
  } else {
    content = data;
    console.log(content);
  }
  return <div>Courses</div>;
};

export default Courses;
