import React from "react"
import {storiesOf} from "@storybook/react"

import Centered from "./utils/Centered"
import {
  CommentBar,
  FloatCard,
  HotCard,
  MiniProductCard,
  Modal,
  NavCard,
  PicCard,
  ProductCard,
  VideoCard,
  SlideCard,
  ProductCardBoardA,
  ProductCardBoardB,
  CarouselCardBoard,
  SlideCardBoard,
  HotCardBoard,
  VideoCardBoard
} from "../src/components/MiCard"

import {initState as data} from '../store'

const modal = {
  title: "艺术品般陶瓷机身，惊艳、璀璨",
  onClose: null,
  videoUrl:
    "https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4",
  coverImg:
    "https://i8.mifile.cn/b2c-mimall-media/850c08e77da8d346b3a0145252d114bb.jpg"
}

storiesOf("页中 卡片-MiCard", module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add("基础 - 带悬浮效果的卡片", () => <FloatCard/>)
  .add("基础 - 评论条", () => (
    <CommentBar show author={"oops`"}>
      '电视收到了，质量很好，操作简单，老爸老妈一学就会，女...'
    </CommentBar>
  ))
  .add("基础 - modal", () => <Modal {...modal} />)
  .add("组件 - 图片卡片", () => (
    <PicCard src={"https://i1.mifile.cn/a4/xmad_15232552838083_SWVqL.jpg"}/>
  ))
  .add("组件 - 产品卡片mini", () => <MiniProductCard {...data.MiCard[1].tabs[0].products[7]}/>)
  .add("组件 - 导航卡片", () => <NavCard category={"家居"}/>)
  .add("组件 - 热门产品卡片", () => <HotCard {...data.MiCard[3].products[1]}/>)
  .add("组件 - 视频卡片", () => <VideoCard {...data.MiCard[5].videos[0]}/>)
  .add("组件 - 滑动卡片", () => <SlideCard {...data.MiCard[4].slides[1]}/>)
  .add("组件 - 产品卡片 - 类型1", () => <ProductCard {...data.MiCard[1].tabs[0].products[1]}/>)
  .add("组件 - 产品卡片 - 类型2", () => <ProductCard {...data.MiCard[0].tabs[0].products[0]}/>)
  .add("组件 - 产品卡片 - 类型3", () => <ProductCard {...data.MiCard[0].tabs[0].products[5]}/>)
  .add("模块 - 产品展板1", () => <ProductCardBoardA {...data.MiCard[0]} />)
  .add("模块 - 产品展板2", () => <ProductCardBoardB {...data.MiCard[1]} />)
  .add("模块 - 轮播展板", () => <CarouselCardBoard {...data.MiCard[2]} />)
  .add("模块 - 热评展板", () => <HotCardBoard {...data.MiCard[3]} />)
  .add("模块 - 滑动内容展板", () => <SlideCardBoard {...data.MiCard[4]} />)
  .add("模块 - 视频展板", () => <VideoCardBoard {...data.MiCard[5]} />)
