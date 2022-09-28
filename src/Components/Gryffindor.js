import React, {useState, useEffect} from "react"
import axios from "axios"
import * as S from "../Styles/SGryffindor"

export default function Home(){
    
    const [grifinoria, setGrifinoria] = useState([])

    useEffect(() => {
        axios.get("https://hp-api.herokuapp.com/api/characters/house/Gryffindor")
        .then((res) => {
            setGrifinoria(res.data);
        })
        .catch((error) => {
            console.log("Desculpe, não conseguimos atender sua solicitação", error)
        })
    }, [grifinoria])
    
    return(
        <S.Painel>
            {grifinoria.slice(0, 10).map((item, index) => (
                    <S.Card key={index}>
                        <S.PicBox>
                            <S.Pic src={item.image} />
                        </S.PicBox>
                        <S.InfosBox>
                            <S.Infos>
                                <S.Nome>{item.name}</S.Nome>
                                <S.Birth>★ {item.yearOfBirth}</S.Birth>
                            </S.Infos>
                        </S.InfosBox>
                    </S.Card>
            ))}
        </S.Painel>
    )
}