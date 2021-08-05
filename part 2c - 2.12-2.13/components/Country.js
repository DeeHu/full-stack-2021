import React, { useState } from 'react'


const Country = ({ country }) => {

    const [isHidden, setIsHidden] = useState(true)

    const toggleVisibility = () => {
        setIsHidden(!isHidden)
        console.log(isHidden)
    }





    return (
        <div>
            {isHidden ?
                <li>{country.name} <button onClick={toggleVisibility}>show</button></li>
                : <div>
                    <h2>{country.name} <button onClick={toggleVisibility}>show</button></h2>
                    <p>{`Caputal: ${country.capital}`}</p>
                    <p>{`Population: ${country.capital}`}</p>
                    <h3>Languages</h3>
                    <ul>
                        {country.languages.map(item => <li> {item.name}</li>)}
                    </ul>
                    <h3>Flag</h3>
                    <svg >
                        <image href={country.flag} width="200" />
                    </svg>

                </div>}
        </div>

    )
}

export default Country