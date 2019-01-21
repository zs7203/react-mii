import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1226px;
  min-width: 1226px;
  height: 460px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
`

const BackSlides = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Slide = styled.li`
  position: absolute;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.2s ease;
`

const SlideLink = styled.a`
  display: block;
  color: #757575;
  text-decoration: none;
`

const SlideImg = styled.img.attrs({
  width: '1226px',
  height: '460px',
})`
  display: block;
`

//Front

const FrontPanels = styled.div`
  width: 1226px;
  height: 460px;
  position: absolute;
  top: 0;
  display: flex;
  z-index: 11;
`

const Arrows = styled.div`
  flex: auto 1 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & > span:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > span:last-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

const Arrow = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 69px;
  border-radius: 2px;
  opacity: 1;
  cursor: pointer;
  &:hover {
    path {
      fill: #fff;
    }
    background-color: rgba(0, 0, 0, 0.5);
  }
`

// 左箭头图片
const LeftSVG = ({ width = 32, height = 32, fill = '#757575' }) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M724 896q-15.008 0-27.008-10.016L272.992 544.992q-16-12.992-16-34.016t16-34.016L695.008 137.952q14.016-11.008 32-8.992t29.504 16 9.504 32-16 28.992l-380 304.992 382.016 307.008q14.016 11.008 16 28.992t-10.016 32q-12.992 16.992-34.016 16.992z"
      fill={fill}
    />
  </svg>
)

// 右箭头图片
const RightSVG = ({ width = 32, height = 32, fill = '#757575' }) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M300.992 896q15.008 0 27.008-10.016L752 544.992q16-12.992 16-34.016t-16-34.016L329.984 137.952q-14.016-11.008-32-8.992t-29.504 16-9.504 32 16 28.992l380 304.992L272.96 817.952q-14.016 11.008-16 28.992t8.992 32q14.016 16.992 35.008 16.992z"
      fill={fill}
    />
  </svg>
)

const Pagers = styled.ul`
  position: absolute;
  bottom: 15px;
  right: 30px;
  padding: 0;
  list-style-type: none;
  display: inline-flex;
  justify-content: center;
`

const Pager = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const PagerDot = styled.span`
  display: block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  box-sizing: content-box;
  background-color: ${props =>
    props.active ? 'rgba(255,255,255,0.4)' : 'rgba(0, 0, 0, 0.4)'};
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.active ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.298039)'};
  border-radius: 6px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    border-color: rgba(0, 0, 0, 0.4);
  }
`

class MiHero extends Component {
  state = {
    slidesIndex: 0,
  }

  handleLeft = evt => {
    this.setState({
      slidesIndex:
        this.state.slidesIndex - 1 < 0
          ? this.props.slides.length - 1
          : --this.state.slidesIndex,
    })
  }

  handleRight = evt => {
    this.setState({
      slidesIndex:
        this.state.slidesIndex + 1 >= this.props.slides.length
          ? 0
          : ++this.state.slidesIndex,
    })
  }

  handleClick = evt => {
    this.setState({ slidesIndex: parseInt(evt.currentTarget.dataset.index) })
  }

  generatePager = () => {
    return new Array(this.props.slides.length).fill(0).map((v, i) => {
      let active = this.state.slidesIndex === i
      return (
        <Pager
          key={i}
          onClick={this.handleClick}
          data-index={i}
          active={active}
        >
          <PagerDot active={active} />
        </Pager>
      )
    })
  }

  render() {
    const {
      handleLeft,
      handleRight,
      generatePager,
      state: { slidesIndex },
      props: { slides, categories, Slot },
    } = this

    return (
      <Container>
        {/* 前面 z-index=11 */}
        <FrontPanels>
          {Slot ? <Slot categories={categories} /> : null}
          <Arrows>
            <Arrow onClick={handleLeft}>
              <LeftSVG />
            </Arrow>
            <Arrow onClick={handleRight}>
              <RightSVG />
            </Arrow>
          </Arrows>
          <Pagers>{generatePager()}</Pagers>
        </FrontPanels>

        {/*后面的轮播图*/}
        <BackSlides>
          {slides &&
            slides.map((slide, index) => (
              <Slide key={index} show={slidesIndex === index}>
                <SlideLink>
                  <SlideImg src={slide.src} />
                </SlideLink>
              </Slide>
            ))}
        </BackSlides>
      </Container>
    )
  }
}

export default MiHero
