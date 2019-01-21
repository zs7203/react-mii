import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 1226px;
  min-width: 1226px;
  overflow: hidden;
  /* background-color: #fff; */
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTitle = styled.h2`
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
`

const BaseContainer = ({ title, slot, children }) => (
  <Container>
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      {slot && slot}
    </Header>
    {children}
  </Container>
)

const BaseBoard = styled.div`
  display: flex;
  justify-content: space-between;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 300px repeat(2, 143px);
  grid-template-columns: repeat(5, 234px);
  grid-gap: 14px;
  /* background-color: #fff; */
`

// 左箭头图片
const LeftSVG = ({ width = 18, height = 18 }) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path d="M724 896q-15.008 0-27.008-10.016L272.992 544.992q-16-12.992-16-34.016t16-34.016L695.008 137.952q14.016-11.008 32-8.992t29.504 16 9.504 32-16 28.992l-380 304.992 382.016 307.008q14.016 11.008 16 28.992t-10.016 32q-12.992 16.992-34.016 16.992z" />
  </svg>
)

// 右箭头图片
const RightSVG = ({ width = 18, height = 18 }) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path d="M300.992 896q15.008 0 27.008-10.016L752 544.992q16-12.992 16-34.016t-16-34.016L329.984 137.952q-14.016-11.008-32-8.992t-29.504 16-9.504 32 16 28.992l380 304.992L272.96 817.952q-14.016 11.008-16 28.992t8.992 32q14.016 16.992 35.008 16.992z" />
  </svg>
)

const Arrow = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  transition: all 0.2s linear;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  & path {
    fill: ${props => (props.disabled ? '#e0e0e0' : '#757575;')};
    transition: all 0.2s linear;
  }
  &:hover path {
    fill: ${props => (props.disabled ? '#e0e0e0' : '#ff6700')};
    transition: all 0.2s linear;
  }
`

const ArrowGroup = styled.div`
  width: 70px;
  height: 25px;
  border: 1px solid #e0e0e0;
  & > div {
    flex: 1;
  }

  & > div:first-child {
    border-right: 1px solid #e0e0e0;
  }
`

const ArrowNavigator = ({ index = 1, handleLeftClick, handleRightClick }) => (
  <ArrowGroup>
    <Arrow disabled={index === 0} onClick={handleLeftClick}>
      <LeftSVG />
    </Arrow>
    <Arrow disabled={index === 1} onClick={handleRightClick}>
      <RightSVG />
    </Arrow>
  </ArrowGroup>
)

const Tabs = styled.div`
  display: inline-block;
`

const Tab = styled.div`
  display: inline-block;
  margin-left: 30px;
  transition: all 0.2s linear;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
  }
`

const TabGroup = ({ tabs, onMouseEnter }) => (
  <Tabs>
    {tabs.map((tab, index) => (
      <Tab onMouseEnter={() => onMouseEnter(index)}>{tab}</Tab>
    ))}
  </Tabs>
)

export { BaseContainer, BaseBoard, ArrowNavigator, GridContainer, TabGroup }
