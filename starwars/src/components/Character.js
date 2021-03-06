import React from 'react';
import './StarWars.css';

// Props
const Character = (props) => {
    return (
        <div className="character">
        <div>Name: {props.character.name}</div>
        <div>Gender: {props.character.gender}</div>
        <div>Hair Color: {props.character.hair_color}</div>
        <div>Eyes: {props.character.eye_color}</div>
        <div>Height: {props.character.height}</div>
        <div>Mass: {props.character.mass}</div>


        
        </div>
    )

}



export default Character;