import React from 'react'
import { useState } from 'react'
import Details from '../Detail/Detail';

function StarWars() {
    const [number, setNumber] = useState(0)
    const [data, setData] = useState(null)
    // const [character, setCharacter] = useState([])

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
    }

    return (
        <div className="StarWars">
            {/* <Title name={data ? data.name : 'No character chosen'} /> */}
            {/* <Details data={data ? data : null } /> */}
            {data ? <Details {...data}/>: null}
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
            {/* <input 
                type='button' 
                value='Save Character' 
                onClick={ () =>  setCharacter( characters => [ ...characters, data])}
            /> */}
            </form>    
        </div>
    )
}

export default StarWars