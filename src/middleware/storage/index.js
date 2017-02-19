import storage from "../../store/storage"

const save = (section, data) => {
  storage.setItem(section, JSON.stringify(data.get(section).toJS()))
}

const storageActions = {
  "TOGGLE_COL": save.bind(null, "selection"),
  "TOGGLE_ENTRY": save.bind(null, "selection"),
  "SET_SETTINGS": save.bind(null, "settings"),
}

export default store => next => action => {
  next(action)
  var storageAction
  if (storageAction = storageActions[action.type]) {
    storageAction(store.getState().data)
  }
}
