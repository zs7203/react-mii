import React, {Component} from 'react'
import styled from 'styled-components'

import {BaseContainer, BaseBoard} from './_Base.jsx'
import {HotCard} from '../index'

export default ({category, products}) => (
  <BaseContainer title={category}>
    <BaseBoard>{products.map((product, i) => <HotCard {...product} key={i}/>)}</BaseBoard>
  </BaseContainer>
)
