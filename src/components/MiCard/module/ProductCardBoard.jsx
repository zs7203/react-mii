import React, {Component, useState, useEffect} from "react"
import styled from "styled-components"

import PicCard from "../widget/PicCard"
import ProductCard from "../widget/ProductCard"
import MiniProductCard from "../widget/MiniProductCard"
import NavCard from "../widget/NavCard"

const Container = styled.div`
  width: 1226px;
  overflow: visible;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
`;

const BaseContainer = ({title, slot, children}) => (
  <Container>
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      {slot && slot}
    </Header>
    {children}
  </Container>
);

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 300px repeat(2, 143px);
  grid-template-columns: repeat(5, 234px);
  grid-gap: 14px;
  /* background-color: #fff; */
`;

const Tabs = styled.div`
  display: inline-block;
`;

const Tab = styled.div`
  display: inline-block;
  margin-left: 30px;
  transition: all 0.2s linear;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
  }
`;
// A类型右侧导航
const TabGroup = ({tabs, onMouseEnter}) => (
  <Tabs>
    {tabs.map((tab, index) => (
      <Tab onMouseEnter={() => onMouseEnter(index)} key={index}>{tab}</Tab>
    ))}
  </Tabs>
);

const Link = styled.a`
  width: 92px;
  display: inline-flex;

  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  font-size: 16px;
  color: #424242;
  fill: #424242;
  transition: all 0.4s;
  text-decoration: none;
  :hover {
    color: #ff6700;
    fill: #ff6700;
    text-decoration: none;
  }
`;

const Icon = ({icon, width = 24, height = 24}) => (
  <div style={{marginBottom: "2px"}}>
    <svg className="icon" aria-hidden="true" width={width} height={height}>
      <use xlinkHref={icon}/>
    </svg>
  </div>
);

// B类型右侧导航（查看全部）
const LinkAll = ({href}) => (
  <Link href={href}>
    <span>查看全部</span>
    <Icon icon={"#icon-arrowright"}/>
  </Link>
);

const PicPosition1 = styled(PicCard)`
  grid-row: 1;
  grid-column: 1;
`;
const PicPosition2 = styled(PicCard)`
  grid-row: 2;
  grid-column: 1;
`;
const PicPosition12 = styled(PicCard)`
  grid-row: 1 / 3;
  grid-column: 1;
  height: 614px;
`;

const ProductPosition1 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 2;
`;
const ProductPosition2 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 3;
`;
const ProductPosition3 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 4;
`;
const ProductPosition4 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 5;
`;
const ProductPosition5 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 2;
`;
const ProductPosition6 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 3;
`;
const ProductPosition7 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 4;
`;
// 只用在B类型
const ProductPosition8 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 5;
`;
// 只用在A类型
const MiniProductPosition = styled(MiniProductCard)`
  grid-row: 2;
  grid-column: 5;
`;
// 只用在A类型
const NavPosition = styled(NavCard)`
  grid-row: 3;
  grid-column: 5;
`;
const picCards = [PicPosition1, PicPosition2];

const productCardsA = [
  ProductPosition1,
  ProductPosition2,
  ProductPosition3,
  ProductPosition4,
  ProductPosition5,
  ProductPosition6,
  ProductPosition7,
  MiniProductPosition
];
const productCardsB = [
  ProductPosition1,
  ProductPosition2,
  ProductPosition3,
  ProductPosition4,
  ProductPosition5,
  ProductPosition6,
  ProductPosition7,
  ProductPosition8
];

// 图片位是一张长图片
const ProductCardBoardA = ({category, pics, tabs}) => {
  const [index] = useState(0);
  return (
    <BaseContainer
      title={category}
      slot={<LinkAll href={"https://www.mi.com/p/1915.html"}/>}
    >
      <GridContainer>
        {/* 图片卡片位 */}
        <PicPosition12 src={pics[0]}/>
        {/* 产品卡片位 */}
        {tabs[index].products.map((product, i) =>
          React.createElement(productCardsB[i], {...product, key: i})
        )}
      </GridContainer>
    </BaseContainer>
  )
};


// 图片位是上下两张普通图片
const ProductCardBoardB = ({category, pics, tabs}) => {
  const [index, setIndex] = useState(0);
  return (
    <BaseContainer
      title={category}
      slot={
        <TabGroup tabs={tabs.map(tab => tab.title)} onMouseEnter={setIndex}/>
      }
    >
      <GridContainer>
        {/* 图片卡片位 */}
        {pics.map((src, i) => React.createElement(picCards[i], {src, key: i}))}
        {/* 产品卡片位 */}
        {tabs[index].products.map((product, i) =>
          React.createElement(productCardsA[i], {...product ,key: i})
        )}
        {/* 导航卡片位 */}
        <NavPosition category={tabs[index].title}/>
      </GridContainer>
    </BaseContainer>
  )
};

export {ProductCardBoardA, ProductCardBoardB}
