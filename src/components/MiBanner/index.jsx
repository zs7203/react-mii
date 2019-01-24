import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 1226px;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;
`;

export default ({src, href='/'}) => (
  <Container>
    <a href={href}>
      <img src={src} width="1226px"/>
    </a>
  </Container>
)
