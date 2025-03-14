import React from 'react'

const Total = ({ course }) => {
  let sum = course.parts.reduce((accumulator, element) => accumulator + element.exercises, 0)
  return (
      <strong>The Course has {sum} exercises</strong>
  )
}

export default Total