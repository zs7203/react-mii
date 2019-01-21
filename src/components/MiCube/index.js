import React from "react"
import styled from "styled-components"

import Cubes from "./Cubes.jsx"
import FloatedCard from "./FloatedCard.jsx"

const Container = styled.div`
  width: 1226px;
  min-width: 1226px;
  margin: 0 auto;
  /* overflow: hidden; */
  display: flex;
  justify-content: space-between;
`

const MiCube = ({cubes, cards}) => (
  <Container>
    <Cubes cubes={cubes} />
    {cards.map((d, i) => (
      <FloatedCard {...d} key={i} />
    ))}
  </Container>
)

export { Cubes, FloatedCard, MiCube }
