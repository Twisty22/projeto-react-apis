import React from "react";
import { StyledButton, StyledHeader, StyledLogo } from "./HeaderStyle.js";
import { useNavigate } from "react-router-dom";

export default function Header(){
    
    const navigate = useNavigate();

    const goToPokedexPage = () => {
        navigate("/Pokedex")
    }   

    return(
        <>
            <StyledHeader>
                <StyledLogo/>
                <StyledButton onClick={goToPokedexPage}>
                    <p>Ver minha Pokedex</p>
                </StyledButton>
            </StyledHeader>
        </>
    );
}