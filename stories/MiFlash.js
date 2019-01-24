import React from "react"
import { storiesOf } from "@storybook/react"

import Centered from "./utils/Centered"
import {initState as data} from '../store'

import { CountDownCard, ProductCard, MiFlash } from "../src/components/MiFlash"

storiesOf("页中 闪购 - MiFlash", module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add("组件 - 倒计时卡片", () => <CountDownCard />)
  .add("组件 - 闪购商品卡片", () => <ProductCard {...data.MiFlash.products[3]} />)
  .add("模块 - 闪购模块", () => <MiFlash {...data.MiFlash} />);
