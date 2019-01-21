import React, {Component, useState} from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"

const TopBar = styled.div`
  width: 100%;
  min-width: 100%;
  position: relative;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
`

const Wrapper = styled.div`
  width: 1226px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: #333;
`

const TopBarNav = styled.div`
  display: inline-flex;
  float: left;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  margin-left: ${props => (props.toRight ? "auto" : "0")};
`

const TopBarNavItem = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`

const Fence = styled.span`
  margin: 0 0.5em;
  color: #b0b0b0;
`

const Cart = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: #b0b0b0;
  background: #424242;
  margin-left: 30px;
  --show: ${props => props.show ? 1 : 0};
  & ul {
    transition: transform 0.4s ease;
    transform-origin: 0 top;
    transform: scaleY(var(--show));
  }
  /* &:hover ul {
    transform: scaleY(var(--show));
  } */
  & span {
    margin: 0 5px;
  }
`

const CartPop = styled.ul`
  position: absolute;
  width: 316px;
  min-height: 100px;
  color: #424242;
  top: 40px;
  right: 0;
  z-index: 1000;
  padding: 15px 0 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`

const navItemWithFence = arr => {
  return arr.map((item, i) => {
    if (i <= arr.length - 2) {
      return (
        <div key={i}>
          <TopBarNavItem href={item.href}>{item.name}</TopBarNavItem>
          <Fence>|</Fence>
        </div>
      )
    } else {
      return (
        <TopBarNavItem href={item.href} key={i}>
          {item.name}
        </TopBarNavItem>
      )
    }
  })
}

const CartSVG = ({width = 20, height = 20, color = "#fff"}) => (
  <svg viewBox="0 0 1024 1024" width="20" height="20">
    <path
      d="M792.302592 583.108608c29.734912 0 60.710912-23.376896 68.8896-51.97824l78.364672-274.354176c8.153088-28.54912-9.445376-51.926016-39.18336-51.926016L347.15648 204.850176c0-59.682816-48.390144-108.073984-108.073984-108.073984L76.971008 96.776192l0 108.073984 162.111488 0 0 459.314176c0 44.7488 36.279296 81.05472 81.05472 81.05472l513.35168 0c29.868032 0 54.037504-24.195072 54.037504-54.03648 0-29.868032-24.169472-54.037504-54.037504-54.037504L347.15648 637.145088l0-54.037504L792.302592 583.107584zM347.15648 312.92416 835.863552 312.92416l-46.307328 162.111488L347.15648 475.035648 347.15648 312.92416zM401.19296 893.820928c0 37.149696-30.396416 67.547136-67.546112 67.547136l-27.017216 0c-37.15072 0-67.546112-30.39744-67.546112-67.547136l0-27.019264c0-37.149696 30.396416-67.546112 67.546112-67.546112l27.017216 0c37.15072 0 67.546112 30.396416 67.546112 67.546112L401.19296 893.820928zM887.5264 893.820928c0 37.149696-30.39744 67.547136-67.547136 67.547136l-27.019264 0c-37.149696 0-67.546112-30.39744-67.546112-67.547136l0-27.019264c0-37.149696 30.396416-67.546112 67.546112-67.546112l27.019264 0c37.149696 0 67.547136 30.396416 67.547136 67.546112L887.5264 893.820928z"
      fill={color}
    />
  </svg>
)

export default ({navs, operations}) => {
  const [cart, setCart] = useState(0)
  return (
    <TopBar>
      <Wrapper>
        <TopBarNav>{navItemWithFence(navs)}</TopBarNav>
        <TopBarNav toRight={true}>{navItemWithFence(operations)}</TopBarNav>
        <Cart onMouseOver={() => setCart(1)} onMouseOut={() => setCart(0)} show={cart}>
          <CartSVG color={"#b0b0b0"}/>
          <span>购物车（0）</span>
          <CartPop>购物车中还没有商品，赶紧选购吧！</CartPop>
        </Cart>
      </Wrapper>
    </TopBar>
  )
}
