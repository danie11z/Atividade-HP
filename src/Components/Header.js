import React from "react"
import {Link, Routes, Route} from "react-router-dom"
import * as S from "../Styles/SHeader"

import Home from "./Home"
import Gryffindor from "./Gryffindor"
import Ravenclaw from "./Ravenclaw"
import Hufflepuff from "./Hufflepuff"
import Slytherin from "./Slytherin"

import Brasao from "../assets/hogwarts.png"
import Discord from "../assets/discord.png"
import Instagram from "../assets/insta.png"
import Twitter from "../assets/twitter.png"

const App = () => {
    return(
        <S.Topo>
            <div>
                <Link to="/" title="Início">
                    <img src={Brasao} />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/grifinória">Grifinória</Link>
                    </li>
                    <li>
                        <Link to="/corvinal">Corvinal</Link>
                    </li>
                    <li>
                        <Link to="lufa-lufa">Lufa-Lufa</Link>
                    </li>
                    <li>
                        <Link to="sonserina">Sonserina</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <div>
                    <a href="#" title="Entre no nosso Discord">
                        <img src={Discord} alt="Logo branco do Discord" />
                    </a>
                </div>
                <div>
                    <a href="#" title="Visite nosso Instagram">
                        <img src={Instagram} alt="Logo branco do Instagram" />
                    </a>
                </div>
                <div>
                    <a href="#" title="Visite nosso Twitter">
                        <img src={Twitter} alt="Logo branco do Twitter" />
                    </a>
                </div>
            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/grifinória" element={<Gryffindor />} />
                <Route path="/corvinal" element={<Ravenclaw />} />
                <Route path="/lufa-lufa" element={<Hufflepuff />} />
                <Route path="/sonserina" element={<Slytherin />} />
            </Routes>
        </S.Topo>
    )
}

export default App