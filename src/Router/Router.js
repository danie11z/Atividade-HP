import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "../Components/Header"
import Home from "../Components/Home"
import Gryffindor from "../Components/Gryffindor"
import Ravenclaw from "../Components/Ravenclaw"
import Hufflepuff from "../Components/Hufflepuff"
import Slytherin from "../Components/Slytherin"

export default function Router (){
    return(
        <BrowserRouter>
            <Header rotaGryffindor="Grifinória" rotaRavenclaw="Corvinal" rotaHufflepuff="Lufa-Lufa" rotaSlytherin="Sonserina"  />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/grifinória" element={<Gryffindor />} />
                <Route path="/corvinal" element={<Ravenclaw />} />
                <Route path="/lufa-lufa" element={<Hufflepuff />} />
                <Route path="/sonserina" element={<Slytherin />} />
            </Routes>
        </BrowserRouter>
    )
}