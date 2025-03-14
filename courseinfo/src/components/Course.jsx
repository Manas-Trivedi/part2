import React from 'react'
import Part from './Part';
import Total from './Total';

const Course = ({ course }) => {
    return (
      <>
        <h1>{course.name}</h1>
        {course.parts.map((element, index) => (
          <Part key={index} course={element} />
        ))}
        <Total course={course}/>
      </>
    );
}

export default Course