import React, { Component } from 'react'
import styled from 'styled-components'

import { BaseContainer, BaseBoard } from './_Base.jsx'
import SlideCard from '../widget/SlideCard'

export default ({ category, slides }) => (
  <BaseContainer title={category}>
    <BaseBoard>{slides.map(slide => <SlideCard {...slide} />)}</BaseBoard>
  </BaseContainer>
)

