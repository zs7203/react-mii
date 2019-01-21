import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 234px;
  padding: 8px 30px;
  font-size: 12px;
  background: #ff6700;
  height: ${props => (props.show ? `76px` : `0px`)};
  opacity: ${props => (props.show ? `1` : `0`)};
  transition: all 0.2s linear;
  /* font: 14px/1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei',
    'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif; */
`

const Comment = styled.span`
  margin-bottom: 5px;
  color: #fff;
  display: block;
`

const Author = styled.span`
  color: rgba(255, 255, 255, 0.6);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const CommentBar = ({ show, author, className, children }) => (
  <Container show={show} className={className}>
    <Comment>{children}</Comment>
    <Author>来自 {author} 的评价</Author>
  </Container>
)

export default CommentBar
