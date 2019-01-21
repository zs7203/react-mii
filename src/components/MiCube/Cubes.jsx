import React, { Component } from "react"
import styled from "styled-components"

const CubeItem = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 85px;
  padding: 0 3px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  fill: rgba(255, 255, 255, 0.7);
  background-color: rgb(95, 87, 80);
  cursor: pointer;
  :hover {
    color: rgba(255, 255, 255, 1);
     fill: rgba(255, 255, 255, 1);
    transition: all 0.2s;
    text-decoration: none;
  }
  ::before {
    position: absolute;
    content: "";
    background-color: ${props => (props.top ? "#665e57" : "transparent")};
    top: 0px;
    left: 6px;
    width: 64px;
    height: 1px;
  }
  ::after {
    position: absolute;
    content: " ";
    background-color: ${props => (props.left ? "#665e57" : "transparent")};
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
  }
`

const Icon = ({ icon }) => (
  <div style={{ marginBottom: "2px" }}>
    <svg
      className="icon"
      aria-hidden="true"
      width="24px"
      height="24px"
    >
      <use xlinkHref={icon} />
    </svg>
  </div>
)

const Cube = styled.div`
  width: 228px;
  display: flex;
  flex-wrap: wrap;
`

export default ({cubes}) => (
  <Cube>
    {cubes.map(cube => (
      <CubeItem
        href={cube.href}
        top={cube.top}
        left={cube.left}
        key={cube.icon}
      >
        <Icon icon={cube.icon} />
        <span>{cube.text}</span>
      </CubeItem>
    ))}
  </Cube>
)
