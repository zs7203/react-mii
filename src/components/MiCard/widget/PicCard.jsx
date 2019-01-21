import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const PicCard = ({ src, ...rest }) => (
  <FloatCard {...rest}>
    <Image src={src} />
  </FloatCard>
)

export default PicCard
