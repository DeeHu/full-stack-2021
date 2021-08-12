/*
Exercise 1.1 -1.5
*/

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },

      {
        name: 'Using props to pass data',
        exercise: 7
      },

      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Content = (props) => {

  //Use map method to create components
  return (
    <div>
      {props.parts.map(item => <Part part={item.name} exercise={item.exercise} />)} 
    </div>
  )
}
const Total = (props) => {

  // Use reduce method to sum the array value
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const numOfExercise = props.parts.map(item => item.exercise)
  const total = numOfExercise.reduce(reducer) 
  return (
    <div>
      <p> Number of exercise {total}</p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}






export default App;
