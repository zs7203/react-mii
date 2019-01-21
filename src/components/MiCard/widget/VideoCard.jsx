import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'
import PlayBtn from '../basic/PlayBtn.jsx'

const VideoContainer = styled(FloatCard)`
  width: 296px;
  height: 285px;
`

const ImageWrapper = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 180px;
  margin: 0 0 28px;
  cursor: pointer;
  /* :hover {
    & > div {
      background-color: ;
    }
  } */
`

const Image = styled.img`
  width: 296px;
  height: 180px;
  cursor: pointer;
`
const Title = styled.p`
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #333;
`
const Description = styled.p`
  height: 18px;
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #b0b0b0;
`

class VideoCard extends React.Component {
  state = {
    hover: false,
  }

  handlerMouseEnter = () => {
    this.setState({hover: true})
  }

  handlerMouseLeave = () => {
    this.setState({hover: false})
  }

  render() {
    const {
      title, description, coverImg, href, ...rest
    } = this.props
    const {hover} = this.state

    return (
      <VideoContainer
        {...rest}
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
      >
        <ImageWrapper onClick={() => window.open(href)}>
          <Image src={coverImg}/>
          <PlayBtn hover={hover}/>
        </ImageWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </VideoContainer>
    )
  }
}

export default VideoCard
