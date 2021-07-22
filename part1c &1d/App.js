import React, { useState } from "react"

/*
* Destructuring
*
const Hello = ({name, age}) => {
  // const name = props.name
  // const age = props.age
  //Helper function
  const bornYear = () => new Date().getFullYear() - age


  return (
    <div>
      <p>
        Hello {name}, you are{age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}



const App = () => {
  const name = "Peter"
  const age = 10
  return (
    <div >
      <h1>Greetings</h1>
      <Hello name='Maya' age={10 + 26}></Hello>
      <Hello name={name} age={age}></Hello>
    </div>
  );
}
*/



/*
*
* State Hook
*
const Display = ({ counter }) => <div>{counter}</div>

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>
 
// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>{props.text}</button>
//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0)
  const increseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setTozero = () => setCounter(0)


  return (
    <div>
      {counter}
      <Display counter={counter} />
      <Button handleClick={increseByOne} text='plus' />
      <Button handleClick={setTozero} text='zero' />
      <Button handleClick={decreaseByOne} text='minus' />
    </div>

  )
}

*/


/**
 * complex state
 * 
 

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the button
      </div>
    )
  }
  return (
    <div>
      button press hitory: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )

}

const App = () => {
  /*
  * Store all states in a single state object
  *
  * 
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})
  }

  return (
    <div>
      <div>{clicks.left}
        <button onClick={handleLeftClick}>left</button></div>
      <div><button onClick={handleRightClick}>right</button>
        {clicks.right}</div>

    </div>
  )

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>{left}
        <Button handleClick={handleLeftClick} text='left' />
      </div>
      <div>
        <Button handleClick={handleRightClick} text='right' />
        {right}
      </div>
      <div>
        <button onClick={()=> console.log('hi')}></button>
  
      </div>

      <History allClicks={allClicks} />

    </div>
  )
}

*/

const Button = ({ handler, text }) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Stats = (props) => {
  return (
    <p>{props.text} {props.num}</p>
  )
}

const Positive = ({ text, good, total }) => {
  if (total === 0) {
    return 0
  }
  return (
    <div>
      <p> {text} {(good / total) * 100}%</p>
    </div>
  )
}

const Average = ({ text, good, neutral, bad, total }) => {
  if (total === 0) {
    return 0
  }
  return (
    <div>
      <p> {text} {((1 * good + 0 * neutral + (-1) * bad) / total)}</p>
    </div>
  )
}

const StatStatus = (props) => {
  if (props.total === 0) {
    return 'No feedback given'
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Stats text='Good' num={props.good} />
            </td>
          </tr>
          <tr>
            <td>
              <Stats text='Neutral' num={props.neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Stats text='Bad' num={props.bad} />
            </td>
          </tr>
          <tr>
            <td>
              <p>All {props.total}</p>
            </td>
          </tr>
          <tr>
            <td>
              <Average text='Average' good={props.good} neutral={props.neutral} bad={props.bad} total={props.total} />
            </td>
          </tr>
          <tr>
            <td>
              <Positive text='Positive' good={props.good} total={props.total} />
            </td>
          </tr>


        </tbody>
      </table>

    </div>
  )
}

const Anecdote = (props) => {

  return (
    <div>
      <h1> Anecdote of the day</h1>
      <h3>{props.anecdotes[props.selected]}</h3>
      <p>has {props.point[props.selected]} votes</p>
      <Button handler={props.handleVote} text='vote' />
      <Button handler={props.handleAnecdote} text='next anecdote' />
      <br />
      <h1>Anecdote with most votes</h1>
      <h3>{props.anecdotes[props.max]}</h3>
      <p>has {props.point[props.max]} votes</p>
    </div>
  )

}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)


  // Anecdote
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const points = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }

  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState(points)
  const [max, setMax] = useState(0)

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }
  const handleVote = () => {
    const copy = { ...point }
    copy[selected] += 1
    setPoint(copy)

    // update max: max is the index of anedote with most votes
    if (point[selected] >= point[max]) {
      setMax(selected)
    }

    // console.log(point)
    // console.log(max)
    // console.log(point[max])
  }


  return (
    <div>

      <Anecdote anecdotes={anecdotes} selected={selected} point={point} handleAnecdote={handleAnecdote} handleVote={handleVote} max={max} />

      <h1> Give feedbacks</h1>
      <Button handler={handleGood} text='Good' />
      <Button handler={handleNeutral} text='Neutral' />
      <Button handler={handleBad} text='Bad' />

      <h1>Statistics</h1>
      <StatStatus total={total} good={good} neutral={neutral} bad={bad} />

    </div>

  )
}

export default App;
