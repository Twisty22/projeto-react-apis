import React from "react";
import './PokedexListStyle.js';
import Header from "../../Components/Header/Header.js";
import PokemonCard from "../../Components/PokemonCard/PokemonCard.js";

export default function PokedexListPage(){
    return(
        <div>
            <Header/>
            <div>
                <p>Todos os pokémon</p>
                <PokemonCard/>
            </div>
        </div>
    );
}