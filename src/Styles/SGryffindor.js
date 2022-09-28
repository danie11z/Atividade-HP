import styled from "styled-components"

export const Painel = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-content: space-evenly;
    height: 370vh;
`

export const Card = styled.div`
    display: flex;
    width: 40vw;
    border-radius: 5%;
    border: solid;
    height: 56vh;
`

export const PicBox = styled.div`
    display: flex;
    height: 55vh;
`

export const Pic = styled.img`
    width: 20vw;
    height: 55vh;
    border-radius: 5% 0 0 5%;
`

export const InfosBox = styled.div`
    border-left: solid;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 55vh;
    background-image: linear-gradient(60deg, #220901, #621708, #941B0C);
    border-radius: 0 5% 5% 0;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 55%;
`

export const Nome = styled.h3`
    font-size: 3vw;
    text-align: center;
`

export const Birth = styled.p`
    font-size: 1.6vw;
`