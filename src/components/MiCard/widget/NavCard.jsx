import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FloatCard from '../basic/FloatCard.jsx'

const NavContainer = styled(FloatCard)`
  width: 234px;
  height: 143px;
  display: flex;
  padding: 0 35px;
  justify-content: space-between;
  padding-top: 50px;
  fill: #ff6700;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

const More = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const Category = styled.p`
  font-size: 12px;
  color: #757575;
`;

const LeftArrow =  ({ icon }) => (
  <div>
    <svg
      className="icon"
      aria-hidden="true"
      width="48px"
      height="48px"
    >
      <use xlinkHref={icon} />
    </svg>
  </div>
);

const NavCard = ({ category, ...rest }) => (
  <NavContainer {...rest}>
    <Wrapper>
      <More>浏览更多</More>
      <Category>{category}</Category>
    </Wrapper>
    <LeftArrow icon={"#icon-arrow-right-circle"}/>
  </NavContainer>
);

export default NavCard
