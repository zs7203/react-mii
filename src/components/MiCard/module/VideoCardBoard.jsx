import React, {Component} from 'react'
import styled from 'styled-components'

import {BaseContainer, BaseBoard} from './_Base.jsx'
import {VideoCard} from '../index'

export default ({category, videos}) => (
  <BaseContainer title={category}>
    <BaseBoard>
      {videos.map((video, i) => <VideoCard key={i} {...video}/>)}
    </BaseBoard>
  </BaseContainer>
)
