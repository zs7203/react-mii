import React, { Component } from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.4s linear, top 0.4s ease-out;
`

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const Header = styled.div`
  display: flex;
  padding: 0 20px;
  height: 60px;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  color: #424242;
`

const CloseSVG = () => (
  <svg width="24" height="24" viewBox="0 0 1024 1024">
    <path
      d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z"
      fill="#757575"
    />
  </svg>
)

const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    background-color: #e53935;
  }
  &:hover path {
    fill: #fff;
    transition: all 0.2s;
  }
`

const PlayerContainer = styled.div`
  width: 880px;
  height: 536px;
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Cover = styled.div`
  width: 880px;
  height: 536px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  display: ${props => (props.play ? 'none' : 'flex')};
`

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

const PlaySVG = () => (
  <svg width="50" height="50" viewBox="0 0 1024 1024">
    <path
      fill="#fff"
      d="M810.4 465.8 253.6 134.4c-6.8-4-13.8-6.4-21.8-6.4-21.8 0-39.6 18-39.6 40L192 168l0 688 0.2 0c0 22 17.8 40 39.6 40 8.2 0 15-2.8 22.4-6.8l556.2-331c13.2-11 21.6-27.6 21.6-46.2C832 493.4 823.6 477 810.4 465.8z"
    />
  </svg>
)

const PlayBtn = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding-left: 25px;
  z-index: 1;
  cursor: pointer;
`

const Player = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  display: ${props => (props.play ? 'block' : 'none')};
`

class Modal extends Component {

  player = React.createRef()

  state = {
    play: false,
  }

  handlerPlay = () => {
    this.setState({ play: true })
  }

  handleClose = () => {
    this.setState({ play: false })
    this.onClose && this.onClose()
    this.player.current.pause()
  }

  render() {
    const { title, onClose, videoUrl, coverImg } = this.props
    const { play } = this.state

    return (
      <Mask>
        <Container>
          <Header>
            <Title>{title}</Title>
            <CloseBtn onClick={this.handleClose}>
              <CloseSVG />
            </CloseBtn>
          </Header>
          <PlayerContainer>
            <Player
              src={videoUrl}
              play={play}
              controls="controls"
              ref={this.player}
            />
            <Cover play={play}>
              <CoverImg src={coverImg} />
              <PlayBtn onClick={this.handlerPlay}>
                <PlaySVG />
              </PlayBtn>
            </Cover>
          </PlayerContainer>
        </Container>
      </Mask>
    )
  }
}

export default Modal
