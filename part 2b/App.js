//import Note from './components/Note'
import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'

/*
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new Note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log(notes);
  }

  const handleNoteChange = (event) => {
    //console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const noteToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {noteToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
*/


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [showPerson, setShowPerson] = useState(persons)
  const [filteredPerson, setFilteredPerson] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  // To check if the name has already existed
  const same = (name) => {
    const arr = persons.map(person => person.name.toLowerCase().replace(/\s/g, ''))
    if (arr.includes(name.toLowerCase().replace(/\s/g, ''))) {
      //setSameName(true)
      return true
    }
    return false
  }

  // To check if a name contains the filteredPerson

  const hasPerson = (input) => {

    const result = persons.filter(person => person.name.toLowerCase().includes(input.toLowerCase()))

    setShowPerson(result)
    console.log(result)
    console.log(showPerson)

  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    console.log(same(newName))

    if (same(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
    console.log(persons);
  }



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilteredPerson(event.target.value)
    hasPerson(filteredPerson)

  }

  return (
    <div>
      {/* filter section */}
      <Filter filteredPerson={filteredPerson} handleFilterChange={handleFilterChange} />

      {/* form to add names */}
      <h2>Add a new</h2>
      <Form addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />

      {/* Number section */}
      <h2>Numbers</h2>
      <ul>
        {showPerson.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
      </ul>
    </div>
  )

}

export default App