import PokedexPage from '../Pages/PokedexPage/PokedexPage.js';
import PokedexListPage from '../Pages/PokedexListPage/PokedexListPage.js';
import PokedexDetailPage from '../Pages/PokedexDetailPage/PokedexDetailPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.js'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <PokedexListPage/>}/>
                <Route path="Pokedex" element={ <PokedexPage/>}/>
                <Route path="Detalhes" element={ <PokedexDetailPage/>}/>
                <Route path="*" element={ <ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}