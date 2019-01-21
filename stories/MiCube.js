import React from "react"
import {storiesOf} from "@storybook/react"
import Centered from "./utils/Centered"

import {Cubes, FloatedCard, MiCube} from "../src/components/MiCube"
import {initState as data} from '../store'

storiesOf("页头 魔方导航 - MiCube", module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add("组件 - 带图标魔方块", () => <Cubes cubes={data.MiCube.cubes}/>)
  .add("组件 - 浮动展板", () => (
    <FloatedCard
      src={"https://i1.mifile.cn/a4/xmad_15381015124677_QcEGp.jpg"}
      href={'https://item.mi.com/product/10000117.html'}
    />
  ))
  .add("模块 - 魔方模块", () => <MiCube {...data.MiCube} />)
