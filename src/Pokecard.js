import React from "react";
import "./Pokecard.css";

let API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard ({exp, id, name, type}) {
    let img = `${API_URL}${id}.png`

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img className="Pokecard-img" src={img} alt={name} />
            <div className="Pokecard-type">Type: {type}</div>
            <div className="Pokecard-exp">Exp: {exp}</div>
        </div>
    )
}

export default Pokecard;