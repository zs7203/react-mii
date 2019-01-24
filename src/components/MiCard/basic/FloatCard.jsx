import React from 'react'
import styled from 'styled-components'

const BaseCard = styled.div`
  width: 234px;
  height: 300px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  font: 14px/1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei',
    'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
`;

const FloatCard = styled(BaseCard)`
  transition: all 0.2s linear;
  &:hover {
    transform: translate3d(0, -2px, 0);  
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

export default FloatCard
