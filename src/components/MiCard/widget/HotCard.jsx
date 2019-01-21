import React from 'react'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'

const BiggerContainer = styled(FloatCard)`
  width: 296px;
  height: 415px;
`
const Image = styled.img`
  width: 296px;
  height: 220px;
  margin: 0 0 28px;
  cursor: pointer;
`
const Comment = styled.p`
  color: #333;
  height: 72px;
  margin: 0 28px 22px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  overflow: hidden;
  cursor: pointer;
`
const Author = styled.p`
  position: relative;
  height: 18px;
  margin: 0 28px 8px;
  padding: 0 10px 0 0;
  font-size: 12px;
  color: #b0b0b0;
`

const Info = styled.div`
  margin: 0 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Name = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: bottom;
  color: #333;
  cursor: pointer;
`
const Separator = styled.span.attrs({
  children: '|',
})`
  color: #e0e0e0;
  margin: 0 0.25em;
  font-family: sans-serif;
`
const Price = styled.p`
  display: inline-block;
  margin: 0;
  color: #ff6700;
`

const HotCard = ({info, comment}, className) => (
  <BiggerContainer className={className}>
    <a href={info.href}>
      <Image src={info.picUrl}/>
    </a>
    <Comment onClick={() => window.open(info.href)}>{comment.content}</Comment>
    <Author>来自于 {comment.author} 的评价</Author>
    <Info>
      <Name onClick={() => window.open(info.href)}>{info.name}</Name>
      <Separator/>
      <Price>{info.price}元</Price>
    </Info>
  </BiggerContainer>
)

export default HotCard
