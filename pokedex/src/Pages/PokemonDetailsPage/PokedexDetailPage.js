import React from "react";
import './PokedexDetailStyle.js';
import Header from "../../Components/Header/Header.js";

export default function PokedexDetailPage(){
    return(
        <>
            <Header/>
            <div>
                <div>
                    <img alt="imagem frontal"/>
                    <img alt="imagem traseira"/>
                </div>
                <div>
                    <p>Stats</p>
                    <p>HP: 46</p>
                    <p>attack</p>
                    <p>defense</p>
                    <p>special-attack</p>
                    <p>special-defense</p>
                    <p>speed</p>
                </div>
                <div>
                    <div>
                        <p>Type 1</p>
                        <p>Type 2</p>
                    </div>
                    <div>
                        <p>Moves</p>
                        <p>move 1</p>
                        <p>move 2</p>
                        <p>move 3</p>
                    </div>
                </div>
            </div>
        </>
    );
}