import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Country from './components/Country'



const App = () => {
    const [countries, setCountries] = useState([])
    const [showCountry, setShowCountry] = useState([])
    const [filterInput, setFilterInput] = useState('')

    const hook = () => {
        console.log('effect')

        const eventHandler = (response) => {
            console.log('promise fulfilled')
            setCountries(response.data)
        }
        const promise = axios.get('https://restcountries.eu/rest/v2/all')

        promise.then(eventHandler)

        // axios
        //   .get('http://localhost:3001/notes')
        //   .then(response => {
        //     console.log('promise fulfilled')
        //     setNotes(response.data)
        //   })

    }

    useEffect(hook, [])
    console.log('render', countries.length, 'countries')



    // To check if a name contains the filteredPerson

    const handleFilter = (input) => {

        const result = countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()))
        setShowCountry(result)

        console.log(result)
        console.log(showCountry)

    }


    const handleFilterChange = (event) => {
        setFilterInput(event.target.value)
        handleFilter(filterInput)

    }

    return (
        <div>
            {/* filter section */}
            <h2>Find countries</h2>
            <input value={filterInput} onChange={handleFilterChange} />


            {/* show section */}
            {1 === showCountry.length ?
                <Country country={showCountry[0]} />
                : showCountry.length > 10 ? <p>Warning: too many matches, specify another filter!</p>
                    :
                    <div>
                        <ul>
                            {showCountry.map(country => <Country country={country} />)}
                        </ul>
                    </div>


            }



        </div>
    )

}

export default App