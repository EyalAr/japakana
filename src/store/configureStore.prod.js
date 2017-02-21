import { createStore, applyMiddleware } from "redux"
import storage from "../middleware/storage"
import analytics from "../middleware/analytics"
import rootReducer from "../reducers"

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(storage, analytics)
)

export default configureStore
