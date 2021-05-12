import React from 'react'

function Details(props) {
    const { height, hair_color, eye_color, homeworld }  = props
    return (
        <div>
            <h5>Height: {height}</h5>
            <h5>Hair Color: {hair_color}</h5>
            <h5>Eye Color: {eye_color}</h5>
            <h5>homeworld: {homeworld}</h5>
        </div>
    )

}
export default Details;