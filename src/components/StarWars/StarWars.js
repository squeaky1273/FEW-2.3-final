import React from 'react'
import { useState } from 'react'
import Title from '../Title/Title';
import Details from '../Detail/Detail';

import './StarWars.css';

function StarWars() {
    const [number, setNumber] = useState(0)
    const [data, setData] = useState(null)
    const [homeworld, setHomeWorld] = useState(null)
    const [character, setCharacter] = useState([])

    async function getCharacter() {
        const path=`https://swapi.dev/api/people/${number}/`
        
        const res = await fetch(path)
        const json = await res.json()

        const name = json.name
        const height = json.height
        const mass = json.mass
        const hair_color = json.hair_color
        const eye_color = json.eye_color
        console.log(json)
        setData({ name, height, mass, hair_color, eye_color})

        const hw_res = await fetch(json.homeworld)
        const hw_json = await hw_res.json()

        console.log(hw_json.name)
        setHomeWorld(hw_json.name)
    }

    return (
        <div className="StarWars">
            {/* <Details data={data ? data : null } /> */}
            {data ? <Title {...data}/>: null}
            <Details data={data ? data : null } homeworld={homeworld} />
            <form
            onSubmit={e => {
                e.preventDefault()
                getCharacter()
            }}>
            <input 
                pattern='[0-9]+'
                placeholder='enter number'
                value={number} 
                onChange={(e) => setNumber(e.target.value)}
            />
            <button>Get Character</button>
            <input
                type='button' 
                value='Save Character' 
                onClick={ () =>  setCharacter( character => [ ...character, data])}
            />
            </form>    
            { character.map((char) => {
                return (
                    <div className="Character">
                        <Title name={char.name} />
                        <h5>Height: {char.height}</h5>
                        <h5>Hair Color: {char.hair_color}</h5>
                        <h5>Eye Color: {char.eye_color}</h5>
                        <h5>homeworld: {homeworld}</h5>
                    </div>
                )
            }) 
            }
        </div>
    )
}

export default StarWars