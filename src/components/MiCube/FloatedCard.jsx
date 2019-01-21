import React from "react"
import styled from "styled-components"

const BaseCard = styled.a`
  width: 316px;
  height: 170px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
`

const FloatCard = styled(BaseCard)`
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default ({ src, ...rest }) => (
  <FloatCard {...rest}>
    <Image src={src} />
  </FloatCard>
)
