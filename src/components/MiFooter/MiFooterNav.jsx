import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 112px 40px;
  grid-template-columns: repeat(6, 160px) 252px;
  background-color: #fff;
`

const Category = styled.div`
  grid-row: 2;
  grid-column: ${props => props.position};
`

const CategoryTitle = styled.p`
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
`
const CategoryItem = styled.a`
  display: block;
  margin: 10px 0 0;
  color: #757575;
  font-size: 12px;
  transition: all 0.2s linear;
  &:hover {
    color: #ff6700;
    text-decoration: none;
  }
`

const ContactPhone = styled.p`
  margin: 0 0 5px;
  font-size: 22px;
  line-height: 1;
  color: #ff6700;
`

const ContactText = styled.p`
  font-size: 12px;
  margin: 0;
`

const ContactAction = styled.div`
  display: inline-block;
  width: 118px;
  height: 28px;
  color: #ff6700;
  fill: #ff6700;
  font-size: 12px;
  line-height: 25px;
  margin-top: 16px;
  border: 1px solid #ff6700;
  background: #fff;
  text-align: center;
  transition: all 0.2s linear;
  cursor: pointer;
  :hover {
  color: #fff;
    fill: #fff;
    background: #ff6700;
    text-decoration: none;
    transition: all 0.2s linear;
  }
`

const ContactContainer = styled.div`
  grid-row: 2;
  grid-column: -2;
  margin-left: 14px;
  color: #616161;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-left: 1px solid #e0e0e0;
`

const MsgSVG = ({width = 12, height = 12}) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M844.126818 766.481925 669.396261 766.481925c-58.768475 56.984852-148.941194 159.220305-148.941194 159.220305-5.465478 5.690606-14.354939 5.690606-19.804045 0 0 0-123.19174-127.516232-152.951531-159.220305l-170.718173 0c-63.302745 0-114.596991-59.161425-114.596991-123.348306L62.384327 207.313649c0-64.186881 50.170656-116.233258 112.037702-116.233258l672.243611 0c61.880349 0 112.037702 52.046377 112.037702 116.233258l0 435.81997C958.70539 707.310268 907.41012 766.481925 844.126818 766.481925L844.126818 766.481925 844.126818 766.481925zM286.466895 380.609531c-30.933523 0-56.020898 26.0237-56.020898 58.120722 0 32.088836 25.087375 58.112536 56.020898 58.112536 30.9325 0 56.016805-26.0237 56.016805-58.112536C342.4837 406.633231 317.399395 380.609531 286.466895 380.609531L286.466895 380.609531 286.466895 380.609531zM510.547417 380.609531c-30.934546 0-56.021921 26.0237-56.021921 58.120722 0 32.088836 25.102724 58.112536 56.021921 58.112536 30.933523 0 56.016805-26.0237 56.016805-58.112536C566.564221 406.633231 541.48094 380.609531 510.547417 380.609531L510.547417 380.609531 510.547417 380.609531zM734.624868 380.609531c-30.915104 0-56.016805 26.0237-56.016805 58.120722 0 32.088836 25.101701 58.112536 56.016805 58.112536 30.951943 0 56.020898-26.0237 56.020898-58.112536C790.645766 406.633231 765.576811 380.609531 734.624868 380.609531L734.624868 380.609531 734.624868 380.609531zM734.624868 380.609531"
    />
  </svg>
)

const ContactWrapper = () => (
  <ContactContainer>
    <ContactPhone>400-100-5678</ContactPhone>
    <ContactText>周一至周日 8:00-18:00</ContactText>
    <ContactText>（仅收市话费）</ContactText>
    <ContactAction>
      <MsgSVG/>
      <span>{' '}联系客服</span>
    </ContactAction>
  </ContactContainer>
)

const PositionedCategory = ({position, title, items}) => (
  <Category position={position}>
    <CategoryTitle>{title}</CategoryTitle>
    {items.map(item => (
      <CategoryItem href={item.href} key={item.name}>{item.name}</CategoryItem>
    ))}
  </Category>
)

const navs = [
  {
    title: '帮助中心',
    items: [
      {
        name: '账户管理',
        href: 'https://www.mi.com/service/account/register/',
      },
      {name: '购物指南', href: 'https://www.mi.com/service/buy/buytime/'},
      {
        name: '订单操作',
        href: 'https://www.mi.com/service/order/sendprogress/',
      },
    ],
  },
  {
    title: '服务支持',
    items: [
      {
        name: '售后政策',
        href: 'https://www.mi.com/service/account/register/',
      },
      {name: '自助服务', href: 'https://www.mi.com/service/buy/buytime/'},
      {
        name: '相关下载',
        href: 'https://www.mi.com/service/order/sendprogress/',
      },
    ],
  },
  {
    title: '线下门店',
    items: [
      {
        name: '小米之家',
        href: 'https://www.mi.com/service/account/register/',
      },
      {name: '服务网点', href: 'https://www.mi.com/service/buy/buytime/'},
      {
        name: '授权体验店',
        href: 'https://www.mi.com/service/order/sendprogress/',
      },
    ],
  },
  {
    title: '关于小米',
    items: [
      {
        name: '了解小米',
        href: 'https://www.mi.com/service/account/register/',
      },
      {name: '加入小米', href: 'https://www.mi.com/service/buy/buytime/'},
      {
        name: '投资者关系',
        href: 'https://www.mi.com/service/order/sendprogress/',
      },
    ],
  },
  {
    title: '关注我们',
    items: [
      {
        name: '新浪微博',
        href: 'https://www.mi.com/service/account/register/',
      },
      {name: '官方微信', href: 'https://www.mi.com/service/buy/buytime/'},
      {
        name: '联系我们',
        href: 'https://www.mi.com/service/order/sendprogress/',
      },
    ],
  },
  {
    title: '特色服务',
    items: [
      {
        name: 'F 码通道',
        href: 'https://www.mi.com/service/account/register/',
      },
      {name: '礼物码', href: 'https://www.mi.com/service/buy/buytime/'},
      {
        name: '防伪查询',
        href: 'https://www.mi.com/service/order/sendprogress/',
      },
    ],
  },
]

const MiFooterNav = () => (
  <Container>
    {navs.map((nav, index) => (
      <PositionedCategory position={index + 1} {...nav} key={index}/>
    ))}
    <ContactWrapper/>
  </Container>
)

export default MiFooterNav
