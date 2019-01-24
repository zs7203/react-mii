import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 234px;
  height: 460px;
  color: #fff;
  font-size: 14px;
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei',
    'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
`;

const Categories = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px 0;
  list-style: none;
  background: rgba(0, 0, 0, 0.6);
`;

const CategoryWrapper = styled.li`
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  padding-left: 30px;
  &:hover {
    background-color: #ff6700;
  }
`;

const LeftArrow = styled.span`
  float: right;
  font: 16px/16px;
  font-weight: bolder;
  margin-right: 20px;
`;

const Category = ({ dataIndex, onMouseEnter, children }) => (
  <CategoryWrapper data-index={dataIndex} onMouseEnter={onMouseEnter}>
    {children}
    <LeftArrow className="iconfont icon-more" />
  </CategoryWrapper>
);

const PopMenu = styled.div`
  position: absolute;
  height: 100%;
  left: 234px;
  top: 0;
  width: ${props => `${props.width * 248}px`};
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
  background-color: #fff;
`;

const PopItem = styled.div`
  width: 248px;
  height: 76px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
`;

const PopItemImg = styled.img.attrs({
  width: '40px',
  height: '40px',
})`
  margin-right: 12px;
`;

const PopItemText = styled.span`
  color: #333;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #ff6700;
  }
`;

class MiHeroCategoires extends Component {
  state = {
    index: -1,
  };

  handleMouseEnter = evt => {
    this.setState({ index: parseInt(evt.currentTarget.dataset.index) })
  };

  handleMouseLeave = evt => {
    this.setState({ index: -1 })
  };

  render() {
    const {
      handleMouseEnter,
      handleMouseLeave,
      state: { index },
      props: {
        categories: { cateNames, cateItems },
      },
    } = this;
    const items = index < 0 ? [] : cateItems[index];
    return (
      <Container onMouseLeave={handleMouseLeave}>
        <Categories>
          {cateNames.map((name, i) => (
            //Note: Category is not a styled-component, so props need to setup manually
            <Category key={i} dataIndex={i} onMouseEnter={handleMouseEnter}>
              {name}
            </Category>
          ))}
        </Categories>
        <PopMenu width={Math.ceil(items.length / 6)}>
          {items.map((item, i) => (
            <PopItem key={i}>
              <PopItemImg src={item.img} />
              <PopItemText>{item.text}</PopItemText>
            </PopItem>
          ))}
        </PopMenu>
      </Container>
    )
  }
}

export default MiHeroCategoires
