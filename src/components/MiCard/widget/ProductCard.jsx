import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'
import CommentBar from '../basic/CommentBar.jsx'

const ProductCardContainer = styled(FloatCard)`
  padding: 34px 0 20px;
`;

const Flag = styled.div`
  z-index: 5;
  position: absolute;
  width: 64px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #fff;
`;

const PositionedFlag = styled(Flag)`
  top: 0;
  left: 50%;
  margin-left: -32px;
  background-color: ${props => (props.type === 0 ? '#83c44e' : '#e53935')};
`;

const PositionedCommentBar = styled(CommentBar)`
  bottom: 0;
`;

const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto 18px;
  cursor: pointer;
`;

const ProductName = styled.p`
  color: #333;
  margin: 0 10px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const ProductText = styled.p`
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
`;

const PriceList = styled.div`
  margin: 0 10px 10px;
  text-align: center;
`;

const Price = styled.span`
  color: #ff6700;
`;
const OriginalPrice = styled.del`
  color: #b0b0b0;
`;

class ProductCard extends React.Component {
  state = {
    show: false,
  };

  handlerMouseLeave = () => {
    this.setState({show: false})
  };

  handlerMouseEnter = () => {
    this.setState({show: true})
  };

  render() {
    const {flag, info, comment, ...rest} = this.props;
    const {show} = this.state;
    return (
      <ProductCardContainer
        {...rest}
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
      >
        {flag && <PositionedFlag type={flag.type}>{flag.name}</PositionedFlag>}
        <Image
          src={info.picUrl}
          onClick={() => window.open(info.href, '_self')}
        />
        <ProductName onClick={() => window.open(info.href)}>
          {info.name}
        </ProductName>
        {info.description && <ProductText>{info.description}</ProductText>}
        <PriceList>
          <Price>{info.price}元 </Price>
          {info.originalPrice && (
            <OriginalPrice>{info.originalPrice}元</OriginalPrice>
          )}
        </PriceList>
        {comment && (
          <PositionedCommentBar author={comment.author} show={show}>
            {comment.content}
          </PositionedCommentBar>
        )}
        {info.commentCount && (
          <ProductText>{info.commentCount}人评价</ProductText>
        )}
      </ProductCardContainer>
    )
  }
}

export default ProductCard
