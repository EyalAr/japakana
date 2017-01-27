import { connect } from "react-redux"
import AppUI from "../../ui/views/App"

const App = connect()(AppUI)

App.displayName = "Containers/App"

export default App
