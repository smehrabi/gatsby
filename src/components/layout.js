import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "dark" ? "white" : "black")};
    background-color: ${props => ( props.theme === "dark" ? "black" : "white")}
  }
`
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
)