import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'


const App = () => {
    const [persons, setPersons] = useState([])

    const [showPerson, setShowPerson] = useState(persons)
    const [filteredPerson, setFilteredPerson] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const hook = () => {
        console.log('effect')

        const eventHandler = (response) => {
            console.log('promise fulfilled')
            setPersons(response.data)
        }
        const promise = axios.get('http://localhost:3001/persons')

        promise.then(eventHandler)

        // axios
        //   .get('http://localhost:3001/notes')
        //   .then(response => {
        //     console.log('promise fulfilled')
        //     setNotes(response.data)
        //   })

    }

    useEffect(hook, [])
    console.log('render', persons.length, 'notes')


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