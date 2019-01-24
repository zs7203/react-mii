import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  height: 340px;
  width: 234px;
  min-width: 234px;
  padding-top: 39px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #ffac13;
  text-align: center;
  background-color: #fff;
`;

const CardMask = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.02);
`;
const CardImg = styled.img`
  display: block;
  width: 160px;
  margin: 0 auto 22px;
`;

const CardTitle = styled.h3`
  margin: 0 20px 3px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const CardDesc = styled.p`
  height: 18px;
  margin: 0 20px 12px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
`;

const CardPrice = styled.p`
  margin: 0;
  font-size: 14px;
`;

const CardFlashPrice = styled.span`
  color: #ff6709;
  ::after {
    content: " ";
  }
`;

const CardPrePrice = styled.del`
  color: #b0b0b0;
`;

export default ({ title, desc, src, price, flashPrice, href }) => (
  <Container>
    <CardImg src={src} />
    <CardTitle>{title}</CardTitle>
    <CardDesc>{desc}</CardDesc>
    <CardPrice>
      <CardFlashPrice>{flashPrice}元</CardFlashPrice>
      <CardPrePrice>{price}元</CardPrePrice>
    </CardPrice>
    <CardMask href={href} />
  </Container>
)
