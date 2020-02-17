import React from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";


const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Welcome = () => (

  <Container>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Sultan Mehrabi - Founder Zensurance, Technology, Business, Entrepreneur</title>
                <link rel="canonical" href="https://sultanmehrabi.com" />
        </Helmet>
      <h1>Welcome</h1>
      <p>I'm rebuilding using GatsbyJS. Please be patient.</p>
      <p>In the meantime you can check out my <a href="https://www.twitter.com/SultanSpeaks">twitter</a> activity</p>
  </Container>
  
)

export default Welcome;