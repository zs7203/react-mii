import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  z-index: 11;
  font: 16px/1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei',
    'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
`

const Logo = styled.a`
  display: block;
  position: relative;
  flex: 55px 0 0;
  width: 55px;
  height: 55px;
  margin-right: 179px;
  background-color: #ff6700;
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: url('https://s01.mifile.cn/i/mi-logo.png') no-repeat 0 50%;
  }
`

const Categories = styled.ul`
  display: inline-flex;
  justify-content: start;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Category = styled.li`
  padding: 26px 10px 38px;
  color: #333;
  cursor: pointer;
  flex: auto 0 0;
  &:hover {
    color: #ff6700;
  }
`

class MiHeader extends Component {
  state = {
    index: -1,
    categories: [
      '小米手机',
      '红米',
      '笔记本',
      '电视',
      '盒子',
      '新品',
      '路由器',
      '智能硬件',
      '服务',
      '社区',
    ],
    categoryList: this.props.categoryList,
  }

  handleMouseOver = e => {
    if (e.target.tagName === 'LI') {
      let index = parseInt(e.target.dataset.index)
      this.setState({ index })
    }
  }

  handleMouseLeave = e => {
    this.setState({ index: -1 })
  }

  render() {
    const {
      handleMouseOver,
      handleMouseLeave,
      state: { index, categoryList, categories },
      props: { RightSlot, Dropdown },
    } = this

    return (
      <div
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', backgroundColor: '#fff' }}
      >
        <Container>
          <Logo />
          <Categories onMouseOver={handleMouseOver}>
            {categories.map((categoryName, i) => (
              <Category key={i} data-index={i}>
                {categoryName}
              </Category>
            ))}
          </Categories>
          {/*make the slot align to the right edge*/}
          <div style={{ marginLeft: 'auto' }}>
            {RightSlot ? <RightSlot /> : null}
          </div>
        </Container>
        {Dropdown ? (
          <Dropdown list={index < 0 ? [] : categoryList[index]} />
        ) : null}
      </div>
    )
  }
}

export default MiHeader
