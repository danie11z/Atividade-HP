import React from "react"
import Router from "./Router/Router"
import * as S from "./Styles/SApp"

export default function App(){
  return(
    <>
      <S.GlobalStyle />
      <Router />
    </>
  )
}