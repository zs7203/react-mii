import React from "react"
import { storiesOf } from "@storybook/react"

import Centered from "./utils/Centered"
import MiBanner from "../src/components/MiBanner/index"
import {initState as data} from '../store'

storiesOf("页中 横幅 - MiBanner", module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add("模块 横幅 - MiBanner", () => <MiBanner {...data.MiBanner[0]}/>)
