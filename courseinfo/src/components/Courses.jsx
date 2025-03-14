import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
  return (
    <div>
        <h1>Web Development Curriculum</h1>
        {courses.map(element => <Course key={element.id} course={element}/>)}
    </div>
  )
}

export default Courses