import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 234px;
  height: 340px;
  padding-top: 39px;
  background: #f1eded;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #e53935;
  text-align: center;
`;

const PurchaseRound = styled.div`
  font-size: 21px;
  color: #ef3a3b;
  padding-top: 15px;
`;

const FlashImg = styled.img.attrs({
  src: "https://i1.mifile.cn/f/i/2018/mihome/flashpurchase.png"
})`
  margin: 25px auto;
`;

const FlashDesc = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
`;

const CountDownBoxes = styled.div`
  width: 168px;
  margin: 28px auto 0;
  display: flex;
`;
const Box = styled.div`
  width: 46px;
  height: 46px;
  background: #605751;
  color: #fff;
  font-size: 24px;
  line-height: 46px;
  float: left;
`;

const Dot = styled.div`
  width: 15px;
  float: left;
  height: 46px;
  line-height: 46px;
  color: #605751;
  font-size: 28px;
`;

function useCountdown() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [round, setRound] = useState(0);
  const [distance, setDistance] = useState(NaN);
  let now = new Date();
  let from = now.getTime();
  if (isNaN(distance)) {
    setRound(now.getHours() + 1);
    let to = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours() + 1
    );
    setDistance(to - from)
  }
  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  useEffect(() => {
    if (distance < 0) return;
    let pid = setTimeout(() => {
      setDistance(distance - 1000);
      setHr(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000);
    return () => clearTimeout(pid)
  });
  return [round, hr, min, sec]
}

export default () => {
  // const [count, setCount] = useState(0)
  const [round, hr, min, sec] = useCountdown();
  return (
    <Container>
      <PurchaseRound>{round}:00 场</PurchaseRound>
      <FlashImg />
      <FlashDesc>距离结束还有</FlashDesc>
      <CountDownBoxes>
        <Box>{hr}</Box>
        <Dot>:</Dot>
        <Box>{min}</Box>
        <Dot>:</Dot>
        <Box>{sec}</Box>
      </CountDownBoxes>
    </Container>
  )
}
