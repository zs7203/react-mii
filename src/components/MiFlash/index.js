import React, {useState, useEffect} from "react"
import styled from "styled-components"

import CountDownCard from "./CountDownCard"
import ProductCard from "./ProductCard"

const Container = styled.div`
  width: 1226px;
  min-width: 1226px;
  margin: 0 auto;
  /* background-color: #fff; */
`;

const ContainerHeader = styled.div`
  color: #333;
  /* background-color: #fff; */
  min-width: 1226px;
  position: relative;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
`;

const Pager = styled.div`
  position: absolute;
  display: flex;
  top: 24px;
  right: 0;
`;

const Arrow = styled.div`
  width: 36px;
  height: 24px;
  padding: 3px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  fill: ${props => (props.enabled ? "#b0b0b0" : "#e0e0e0")};
  transition: fill 0.5s;
  :hover {
    fill: ${props => (props.enabled ? "#ff6700" : "#e0e0e0")};;
  }
`;

// 左箭头图片
const LeftSVG = ({width = 18, height = 18}) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M724 896q-15.008 0-27.008-10.016L272.992 544.992q-16-12.992-16-34.016t16-34.016L695.008 137.952q14.016-11.008 32-8.992t29.504 16 9.504 32-16 28.992l-380 304.992 382.016 307.008q14.016 11.008 16 28.992t-10.016 32q-12.992 16.992-34.016 16.992z"
    />
  </svg>
);

// // 右箭头图片
const RightSVG = ({width = 18, height = 18}) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M300.992 896q15.008 0 27.008-10.016L752 544.992q16-12.992 16-34.016t-16-34.016L329.984 137.952q-14.016-11.008-32-8.992t-29.504 16-9.504 32 16 28.992l380 304.992L272.96 817.952q-14.016 11.008-16 28.992t8.992 32q14.016 16.992 35.008 16.992z"/>
  </svg>
);

const ContainerBody = styled.div`
  display: flex;
  & > :first-child {
    color: red;
    margin-right: 14px;
  }
`;

const CarouselContainer = styled.div`
  width: 992px;
  height: 340px;
  overflow: hidden;
`;
const Carousel = styled.div`
  display: flex;
  margin-left: ${props => `-${props.index * 992}px`};
  transition: margin-left 0.5s ease;
  & > div {
    margin-right: 14px;
  }
  & > :last-child {
    margin-right: 0;
  }
`;

const MiFlash = ({round, products}) => {
  // let round,
  //   hr = new Date().getHours()
  // if (hr < 12 || hr > 22) {
  //   round = 12
  // } else {
  //   for (const next of round) {
  //     if (next > hr) {
  //       round = next
  //     } else {
  //       break
  //     }
  //   }
  // }
  let pages = Math.ceil(products.length / 4);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(index)
  });
  return (
    <Container>
      <ContainerHeader>
        <Title>小米闪购</Title>
        <Pager>
          <Arrow
            onClick={() => setIndex(index - 1 <= 0 ? 0 : index - 1)}
            enabled={index === 0 ? false : true}
          >
            <LeftSVG onHover/>
          </Arrow>
          <Arrow
            style={{marginLeft: -1}}
            onClick={() => setIndex(index + 1 >= pages ? pages - 1 : index + 1)}
            enabled={index === pages - 1 ? false : true}
          >
            <RightSVG/>
          </Arrow>
        </Pager>
      </ContainerHeader>
      <ContainerBody>
        <CountDownCard/>
        <CarouselContainer>
          <Carousel index={index}>
            {products.map((prod, i) => (
              <ProductCard {...prod} key={i}/>
            ))}
          </Carousel>
        </CarouselContainer>
      </ContainerBody>
    </Container>
  )
};

export {CountDownCard, ProductCard, MiFlash}
