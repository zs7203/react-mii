import React, { Fragment } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 1226px;
  display: flex;
  align-items: center;
`

const LOGO = styled.img.attrs({
  src: 'https://s01.mifile.cn/i/logo-footer.png?v2',
})`
  width: 57px;
  height: 57px;
`

const Navs = styled.div`
  width: 662px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: row nowrap;

  & > span:first-child {
    display: none;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
`

const Nav = styled.a`
  font-size: 12px;
  color: #757575;

  &:hover {
    color: #ff6700;
    text-decoration: none;
  }
`

const Fence = styled.span.attrs({
  children: '|',
})`
  font-size: 12px;
  margin: 0 2px;
  color: #b0b0b0;
`

const NavText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #b0b0b0;
`

const NavLink = styled.a`
  color: #b0b0b0;
  &:hover {
    color: #ff6700;
    text-decoration: none;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Link = styled.a`
  width: 84px;
  height: 28px;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
`
const data = {
  links: [
    { title: '小米商城', href: '' },
    { title: 'MIUI', href: '' },
    { title: '米家', href: '' },
    { title: '米聊', href: '' },
    { title: '多看', href: '' },
    { title: '游戏', href: '' },
    { title: '音乐', href: '' },
    { title: '路由器', href: '' },
    { title: '米粉卡', href: '' },
    { title: '政企服务', href: '' },
    { title: '小米天猫店', href: '' },
    { title: '隐私政策', href: '' },
    { title: '问题反馈', href: '' },
    { title: 'Select Region', href: '' },
  ],
  qualifications: [
    {
      name: '隐私认证',
      imgUrl: 'https://i1.mifile.cn/f/i/17/site/truste.png',
      href:
        'https://privacy.truste.com/privacy-seal/validation?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8&lang=zh-cn',
    },
    {
      name: '诚信企业',
      imgUrl: 'https://s01.mifile.cn/i/v-logo-2.png',
      href: 'https://search.szfw.org/cert/l/CX20120926001783002010',
    },
    {
      name: '可信网站',
      imgUrl: 'https://s01.mifile.cn/i/v-logo-1.png',
      href:
        'https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&ct=df&pa=461082',
    },
    {
      name: '网上交易保障中心',
      imgUrl: 'https://s01.mifile.cn/i/v-logo-3.png',
      href: 'http://www.315online.com.cn/member/315140007.html',
    },
    {
      name: '诚信经营放心消费',
      imgUrl:
        'https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png',
      href: 'https://www.mi.com/service/buy/commitment/',
    },
  ],
}

const Slogan = styled.div`
  margin: 30px auto 0;
  width: 100%;
  height: 19px;
  text-indent: -9999em;
  background: url('https://s01.mifile.cn/i/slogan2016.png') no-repeat center 0;
`

const MiFooterLink = () => (
  <div style={{ backgroundColor: '#fff' }}>
    <FooterContainer>
      <LOGO style={{ marginRight: 10 }} />
      <NavContainer>
        <Navs>
          {data.links.map(nav => (
            <Fragment>
              <Fence />
              <Nav {...nav}>{nav.title}</Nav>
            </Fragment>
          ))}
        </Navs>
        <NavText>
          ©<NavLink href="//www.mi.com/">mi.com</NavLink>
          京ICP证110507号
          <NavLink href="http://www.miitbeian.gov.cn/">
            京ICP备10046444号
          </NavLink>
          <NavLink href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134">
            京公网安备11010802020134号
          </NavLink>
          <NavLink href="//c1.mifile.cn/f/i/2013/cn/jingwangwen.jpg">
            京网文[2014]0059-0009号
          </NavLink>
        </NavText>
        <NavText>
          违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </NavText>
      </NavContainer>
      <LinkContainer style={{ marginLeft: 'auto' }}>
        {data.qualifications.map(link => <Link {...link} />)}
      </LinkContainer>
    </FooterContainer>
    <Slogan>探索黑科技，小米为发烧而生</Slogan>
  </div>
)

export default MiFooterLink
