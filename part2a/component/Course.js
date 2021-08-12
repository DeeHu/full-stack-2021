import React from 'react'


const Part = ({ part }) => {
  return (
    <div>
      <li> {part.name} {part.exercises}</li>
    </div>

  )

}


const Course = ({ course }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const arr = course.parts.map(part => part.exercises)
  const total = arr.reduce(reducer)



  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(
          part => <Part key={part.id} part={part} />
        )}
        <li>total of {total} exercises</li>
      </ul>
    </div>
  )
}

export default Course
