import React, { Component } from 'react'
import styled from 'styled-components'

// import searchPic from './assets/search.svg'

const Wrapper = styled.div`
  width: 296px;
`

const Form = styled.form`
  position: relative;
  display: flex;
  width: 296px;
  height: 50px;
  transition: all 0.2s;
`

const SearchInput = styled.input.attrs({
  type: 'text',
})`
  z-index: 1;
  flex-grow: 1;
  padding: 0 10px;
  border: 1px solid ${props => (props.focus ? '#ff6700' : '#e0e0e0')};
  font-size: 14px;
  line-height: 48px;
  outline: 0;
  transition: inherit;
`

const SearchBtn = styled.div`
  display: block;
  width: 52px;
  border: 1px solid #e0e0e0;
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ff6700;
    path {
      fill: #fff;
    }
  }
`

const SearchIcon = props => (
  <svg viewBox="0 0 1024 1024" width="24" height="24">
    <path
      d="M952 896l-204.992-204.992q86.016-106.016 86.016-243.008 0-159.008-112.512-271.488T448.512 64t-272 112.512T64 448.512t112.512 272T448 833.024q136.992 0 242.016-84.992l204.992 204q12 12 28.512 12t28-11.488 11.488-28-11.008-28.512z m-381.984-160Q512 760.992 448 760.992q-63.008 0-120.992-24.992-56-23.008-100-66.016Q184 625.984 160 569.984q-24-58.016-24-122.016 0-63.008 24-120.992 24-56 67.008-99.008 44-44 100-68 58.016-24 120.992-24 64 0 122.016 24 56 24 99.488 67.488T736 326.944q24.992 58.016 24.992 122.016 0 63.008-24.992 120.992-23.008 56-66.016 100-44 43.008-100 66.016z"
      fill={props.focus ? `#fff` : `#616161`}
    />
  </svg>
)

const SearchHotWords = styled.div`
  position: absolute;
  top: 16px;
  right: 62px;
  z-index: 2;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${props => (props.focus ? 0 : 1)};
  transition: inherit;
`

const HotWord = styled.a`
  display: inline-block;
  margin-left: 5px;
  padding: 0 5px;
  font-size: 12px;
  background: #eee;
  color: #757575 !important;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: inherit;
  &:hover {
    color: #fff !important;
    background: #ff6700;
  }
`

const ProductList = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  width: 244px;
  border: 1px solid #ff6700;
  border-top: 0;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  list-style: none;
  background-color: #fff;
  opacity: ${props => (props.focus ? 1 : 0)};
  transition: inherit;
`

const ProductItemWrapper = styled.li`
  font-size: 12px;
  color: #424242;
  &:hover {
    background-color: rgba(202, 202, 202, 0.16);
  }
`

const ProductItem = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProductItemName = styled.span`
  padding: 6px 15px;
  font-size: 12px;
`

const ProductItemStock = styled.span`
  padding: 6px 15px;
  font-size: 12px;
  color: #b0b0b0;
`

class MiSearch extends Component {
  state = {
    focus: false,
    hover: false,
  }

  handleFocus = () => {
    this.setState({ focus: true })
  }

  handleBlur = () => {
    this.setState({ focus: false })
  }

  handlerMouseEnter = () => {
    this.setState({ hover: true })
  }

  handlerMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    return (
      <Wrapper>
        <Form>
          <SearchInput
            focus={this.state.focus}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
          <SearchHotWords focus={this.state.focus}>
            <HotWord>小米6X</HotWord>
            <HotWord>小米Note 3</HotWord>
          </SearchHotWords>
          <ProductList focus={this.state.focus}>
            <ProductItemWrapper>
              <ProductItem>
                <ProductItemName>小米6</ProductItemName>
                <ProductItemStock>约25件</ProductItemStock>
              </ProductItem>
            </ProductItemWrapper>
            <ProductItemWrapper>
              <ProductItem>
                <ProductItemName>小米6</ProductItemName>
                <ProductItemStock>约25件</ProductItemStock>
              </ProductItem>
            </ProductItemWrapper>
            <ProductItemWrapper>
              <ProductItem>
                <ProductItemName>小米6</ProductItemName>
                <ProductItemStock>约25件</ProductItemStock>
              </ProductItem>
            </ProductItemWrapper>
            <ProductItemWrapper>
              <ProductItem>
                <ProductItemName>小米6</ProductItemName>
                <ProductItemStock>约25件</ProductItemStock>
              </ProductItem>
            </ProductItemWrapper>
            <ProductItemWrapper>
              <ProductItem>
                <ProductItemName>小米6</ProductItemName>
                <ProductItemStock>约25件</ProductItemStock>
              </ProductItem>
            </ProductItemWrapper>
          </ProductList>
        </Form>
      </Wrapper>
    )
  }
}

export default MiSearch
