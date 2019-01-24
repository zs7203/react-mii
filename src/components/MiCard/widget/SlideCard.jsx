import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#ff6700',
  white: '#fff',
  orange: '#ffac13',
  green: '#83c44e',
  red: '#e53935',
  blue: '#2196f3',
  grey: '#757575',
  text: '#333',
  mute: '#b0b0b0',
};

const Card = styled.div`
  width: 296px;
  height: 420px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 45px;
  border: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${props => props.theme[props.color] || props.theme.red};
  border-radius: 0;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei',
    'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate3d(0, -2px, 0);
    #arrows > span {
      opacity: 0.3;
    }
  }
`;

const Header = styled.div`
  margin: 0 10px 18px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme[props.color] || props.theme.red};
`;

const CarouselWrapper = styled.div`
  height: 340px;
  overflow: hidden;
  transition: margin-left 0.5s ease;
  margin-left: ${props => `-${props.index * 296}px`};
`;

const List = styled.ul`
  width: 1184px;
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  flex: 0 0 auto;
  width: 296px;
  height: 340px;
  position: relative;
`;

const ItemName = styled.h4`
  margin: 0 20px 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.25;
  color: ${props => props.theme.text};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemDesc = styled.div`
  margin: 0 48px 10px;
  height: 40px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  overflow: hidden;
  color: ${props => props.theme.mute};
`;

const ItemPrice = styled.p`
  height: 21px;
  margin: 0 10px 15px;
  font-size: 14px;
  color: ${props => props.theme.text};
`;

const ItemFigure = styled.div`
  width: 216px;
  height: 154px;
  margin: 0 auto;
`;

const ItemLink = styled.a`
  display: block;
  height: 154px;
  cursor: pointer;
  & img {
    display: block;
    width: 216px;
    height: 154px;
  }
`;

const PromptBtn = styled.a`
  width: 118px;
  height: 28px;
  font-size: 12px;
  line-height: 28px;
  display: inline-block;
  padding: 0;
  margin-bottom: 30px;
  color: ${props => props.theme[props.color]} !important;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme[props.color]};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    color: #fff !important;
    background-color: ${props => props.theme[props.color]};
    text-decoration: none;
  }
`;

const Pagers = styled.ul`
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 296px;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

const Pager = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover span {
    background-color: ${props =>
      props.active ? props.theme.white : props.theme.primary};
  }
`;

const PagerDot = styled.span`
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  box-sizing: content-box;
  border: ${props =>
    props.active
      ? `2px solid ${props.theme.primary}`
      : `2px solid ${props.theme.white}`};
  background-color: ${props =>
    props.active ? props.theme.white : props.theme.mute};
  transition: all 0.5s ease;
`;

const ArrowWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 48px;
  opacity: 0;
  transition: all 0.5s ease;
  background-color: ${props => props.theme.grey};
  &:hover {
    cursor: pointer;
    opacity: 1 !important;
  }
`;

// 左箭头图片
const LeftSVG = ({ width = 18, height = 18, fill = '#fff' }) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M724 896q-15.008 0-27.008-10.016L272.992 544.992q-16-12.992-16-34.016t16-34.016L695.008 137.952q14.016-11.008 32-8.992t29.504 16 9.504 32-16 28.992l-380 304.992 382.016 307.008q14.016 11.008 16 28.992t-10.016 32q-12.992 16.992-34.016 16.992z"
      fill={fill}
    />
  </svg>
);

// 右箭头图片
const RightSVG = ({ width = 18, height = 18, fill = '#fff' }) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M300.992 896q15.008 0 27.008-10.016L752 544.992q16-12.992 16-34.016t-16-34.016L329.984 137.952q-14.016-11.008-32-8.992t-29.504 16-9.504 32 16 28.992l380 304.992L272.96 817.952q-14.016 11.008-16 28.992t8.992 32q14.016 16.992 35.008 16.992z"
      fill={fill}
    />
  </svg>
);

class SlideCard extends Component {
  state = {
    index: 0,
    category: {
      book: '图书',
      theme: 'MIUI 主题',
      game: '游戏',
      app: '应用',
    },
    prompts: {
      book: {
        slogen:
          '海量好书，享受精品阅读时光\n' + '漂亮的中文排版，千万读者选择！',
        to: '前往多看阅读',
        href: 'http://game.xiaomi.com/index.php?c=index&a=run',
        url: 'https://s01.mifile.cn/i/index/more-duokan.jpg',
      },
      theme: {
        slogen: '众多个性主题、百变锁屏与自由桌面\n' + '让你的手机与众不同！',
        to: '前往MIUI主题市场',
        href: 'http://game.xiaomi.com/index.php?c=index&a=run',
        url: 'https://s01.mifile.cn/i/index/more-miui.jpg',
      },
      game: {
        slogen: '免费下载海量的手机游戏\n' + '天天都有现金福利赠送',
        to: '前往小米游戏商店',
        href: 'http://game.xiaomi.com/index.php?c=index&a=run',
        url: 'https://s01.mifile.cn/i/index/more-game.jpg',
      },
      app: {
        slogen: '帮助小米手机和其他安卓手机用户\n' + '发现好用的安卓应用',
        to: '前往小米应用商店',
        href: 'http://game.xiaomi.com/index.php?c=index&a=run',
        url: 'https://s01.mifile.cn/i/index/more-app.jpg',
      },
    },
  };

  handleClick = evt => {
    this.setState({ index: parseInt(evt.currentTarget.dataset.index) })
  };

  handleLeft = evt => {
    this.setState({ index: this.state.index - 1 < 0 ? 0 : --this.state.index })
  };

  handleRight = evt => {
    this.setState({
      index:
        this.state.index + 1 > this.props.items.length
          ? this.props.items.length
          : ++this.state.index,
    })
  };

  appendPrompt = whichPrompt => {
    return (
      <Item key="prompt">
        <ItemDesc>{whichPrompt.slogen}</ItemDesc>
        <PromptBtn color={this.props.themeColor} href={whichPrompt.href}>
          {whichPrompt.to}
        </PromptBtn>
        <ItemFigure>
          <ItemLink>
            <img
              src={whichPrompt.url}
              width="160"
              height="140"
              alt={whichPrompt.to}
            />
          </ItemLink>
        </ItemFigure>
      </Item>
    )
  };

  generateList = prompt => {
    return (
      this.props.items &&
      this.props.items
        .map(item => (
          <Item key={item.title}>
            <ItemName>{item.title}</ItemName>
            <ItemDesc>{item.description}</ItemDesc>
            <ItemPrice>{item.price}</ItemPrice>
            <ItemFigure>
              <ItemLink>
                <img src={item.url} width="160" height="140" alt={item.title} />
              </ItemLink>
            </ItemFigure>
          </Item>
        ))
        .concat(this.appendPrompt(prompt))
    )
  };

  generatePager = () => {
    return new Array(this.props.items.length + 1).fill(0).map((v, i) => {
      let active = this.state.index === i;
      return (
        <Pager
          key={i}
          onClick={this.handleClick}
          data-index={i}
          active={active}
        >
          <PagerDot active={active} />
        </Pager>
      )
    })
  };

  render() {
    const { category, description, themeColor, items, prompt } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Card color={this.props.themeColor}>
          <Header color={this.props.themeColor}>{description}</Header>
          <CarouselWrapper index={this.state.index}>
            <List>{this.generateList(prompt)}</List>
          </CarouselWrapper>
          <Pagers>{this.generatePager()}</Pagers>
          <ArrowWrapper id="arrows">
            <Arrow onClick={this.handleLeft}>
              <LeftSVG />
            </Arrow>
            <Arrow onClick={this.handleRight}>
              <RightSVG />
            </Arrow>
          </ArrowWrapper>
        </Card>
      </ThemeProvider>
    )
  }
}

SlideCard.propTypes = {
  themeColor: PropTypes.oneOf(['orange', 'green', 'red', 'blue']).isRequired,
  category: PropTypes.oneOf(['book', 'theme', 'game', 'app']).isRequired,
  items: PropTypes.array.isRequired,
};

export default SlideCard
