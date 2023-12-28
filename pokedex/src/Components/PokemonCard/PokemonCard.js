import React from "react";
import './PokemonCardStyle.js';
import { StyledButtonCapturar, StyledButtonDetalhes, StyledDiv } from "./PokemonCardStyle.js";
import { useNavigate } from "react-router-dom";

export default function PokemonCard(){
    
    const navigate = useNavigate();

    const goToPokedexDetailPage = () => {
        navigate("/Detalhes")
    }
    
    return(
        <>
            <img alt="imagem pokemon"/>
            <StyledDiv>
                <StyledButtonDetalhes onClick={goToPokedexDetailPage}>Detalhes</StyledButtonDetalhes>
                <StyledButtonCapturar >Capturar</StyledButtonCapturar>
            </StyledDiv>
        </>
    );
}