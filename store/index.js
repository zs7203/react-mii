import { createStore } from "redux"
import initState from "./state"

const store = createStore((state, action) => state, initState)
export {
  initState,
  store as default
}
