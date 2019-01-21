import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'

const MiniContainer = styled(FloatCard)`
  width: 234px;
  height: 143px;
  padding-top: 50px;
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  right: 20px;
  top: 32px;
`

const Name = styled.p`
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: clip;
`
const Price = styled.p`
  margin: 0 110px 0 30px;
  color: #ff6700;
`

const MiniProductCard = ({name, price, picUrl, href, ...rest}) => (
  <MiniContainer {...rest}>
    <a href={href}>
      <Image src={picUrl}/>
    </a>
    <Name>{name}</Name>
    <Price>{price}元</Price>
  </MiniContainer>
)

export default MiniProductCard
