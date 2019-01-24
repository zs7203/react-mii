import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'
import PlayBtn from '../basic/PlayBtn.jsx'
import Modal from '../basic/Modal'

const VideoContainer = styled(FloatCard)`
  width: 296px;
  height: 285px;
  transition: all .2s linear;
  :hover {
    transform: translate3d(0, -2px, 0);  
  }
`;

const ImageWrapper = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 180px;
  margin: 0 0 28px;
  cursor: pointer;
  &:hover {
      #play-btn {
      background-color: #ff6700;
      transition: background-color 0.2s linear;
      border-width: 0;
    }
  } 
`;

const Image = styled.img`
  width: 296px;
  height: 180px;
  cursor: pointer;
`;
const Title = styled.p`
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #333;
`;
const Description = styled.p`
  height: 18px;
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #b0b0b0;
`;

class VideoCard extends React.Component {
  state = {
    isModal: false,
  };

  componentDidMount() {
    this.element = document.getElementById("modal");
    this.forceUpdate()
  }

  handlerClick = (e) => {
    e.preventDefault();
    this.setState({isModal: !this.state.isModal})
  };

  render() {
    const {
      title, description, coverImg, ...rest
    } = this.props;

    const MiModal = (props) => this.element ? ReactDOM.createPortal(<Modal {...props}/>, this.element) : null;

    return (
      <VideoContainer
        {...rest}
      >
        <ImageWrapper onClick={this.handlerClick}>
          <Image src={coverImg}/>
          <PlayBtn/>
        </ImageWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {this.state.isModal && <MiModal {...this.props.modal} onClose={() => this.setState({isModal: false})}/>}
      </VideoContainer>
    )
  }
}

export default VideoCard
