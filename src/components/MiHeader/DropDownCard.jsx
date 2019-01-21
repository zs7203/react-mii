import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 204px;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
`

const CardFlag = styled.div`
  display: block;
  width: 66px;
  height: 22px;
  margin-left: 50%;
  top: 0px;
  left: -33px;
  position: absolute;
  text-align: center;
  color: #ff6700;
  border: 1px solid #ff6700;
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 11;
`

const CardFigure = styled.div`
  width: 160px;
  height: 110px;
  margin: 36px auto 16px;
  text-align: center;
`

const CardFigureLink = styled.a`
  display: block;
  color: #757575;
  text-decoration: none;
`

const CardFigureImg = styled.img`
  width: 160px;
  height: 110px;
`

const CardTitle = styled.p`
  color: #333333;
  margin: 0;
`

const CardPrice = styled.p`
  color: #ff6700;
  margin: 0;
`

const CardFence = styled.div`
  width: 1px;
  height: 110px;
  background-color: #eee;
  position: absolute;
  top: 36px;
  left: 0;
  display: ${props => (props.show ? 'block' : 'none')};
`

const DropDownCard = props => (
  <Card>
    <CardFlag show={!!props.flag}>{props.flag}</CardFlag>
    <CardFigure>
      <CardFigureLink href={props.href}>
        <CardFigureImg src={props.imgUrl} />
      </CardFigureLink>
    </CardFigure>
    <CardTitle>{props.title}</CardTitle>
    <CardPrice>{props.price}</CardPrice>
    <CardFence show={!!props.fence} />
  </Card>
)

export default DropDownCard
