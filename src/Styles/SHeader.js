import styled from "styled-components"
import {Link} from "react-router-dom"

export const Topo = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 56vh;
    justify-content: space-evenly;
`

export const ListaCasas = styled.ul`
    display: flex;
    width: 60vw;
    justify-content: space-evenly;
`

export const CasaItem = styled.li`
    width: 7.7vw;
    display: flex;
    justify-content: center;
`

export const Casa = styled(Link)`
    text-decoration: none;
    font-size: 1.7vw;
    font-weight: 500;

    &:hover{
        font-weight: 700;
    }
`

export const Dot = styled.li`
    font-size: 1.7vw;
`