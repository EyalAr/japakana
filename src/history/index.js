import { hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import store from "../store"

export default syncHistoryWithStore(hashHistory, store)
