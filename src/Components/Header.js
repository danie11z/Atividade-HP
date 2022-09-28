import React from "react"
import {Link} from "react-router-dom"
import * as S from "../Styles/SHeader"

import Brasao from "../assets/hogwarts.png"
import Discord from "../assets/discord.png"
import Instagram from "../assets/insta.png"
import Twitter from "../assets/twitter.png"

const Header = ({rotaGryffindor, rotaRavenclaw, rotaHufflepuff, rotaSlytherin}) => {
    return(
        <S.Topo>
            <div>
                <Link to="/" title="Início">
                    <img src={Brasao} />
                </Link>
            </div>
            <nav>
                <S.ListaCasas>
                    <S.CasaItem>
                        <S.Casa title="Grifinória" to="/grifinória">{rotaGryffindor}</S.Casa>
                    </S.CasaItem>
                    <S.Dot>•</S.Dot>
                    <S.CasaItem>
                        <S.Casa title="Corvinal" to="/corvinal">{rotaRavenclaw}</S.Casa>
                    </S.CasaItem>
                    <S.Dot>•</S.Dot>
                    <S.CasaItem>
                        <S.Casa title="Lufa-Lufa" to="lufa-lufa">{rotaHufflepuff}</S.Casa>
                    </S.CasaItem>
                    <S.Dot>•</S.Dot>
                    <S.CasaItem>
                        <S.Casa title="Sonserina" to="sonserina">{rotaSlytherin}</S.Casa>
                    </S.CasaItem>
                </S.ListaCasas>
            </nav>
        </S.Topo>
    )
}

export default Header