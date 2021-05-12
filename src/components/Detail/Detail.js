import React from 'react'

function Details(props) {
    const { name, height, hair_color, eye_color }  = props
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Height: {height}</h3>
            <h3>Hair Color: {hair_color}</h3>
            <h3>Eye Color: {eye_color}</h3>
        </div>
    )

}
export default Details;