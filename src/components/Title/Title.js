import React from 'react'

function Title(props){
    const { name } = props

    return(
        <div>
            <h3>{name}</h3>   
        </div>
    )

}

export default Title