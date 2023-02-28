import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <div className="courseCard-container">
      <div className="thumbnail">
        <img src={course.thumbnail} alt={course.title} />
      </div>
      <div className="course-content">
        <div className="course-desc">
          <p>{course.title}</p>
          <p>{course.instructor_name}</p>
        </div>
        <div className="course-rating"></div>
      </div>
    </div>
  );
};

export default CourseCard;
