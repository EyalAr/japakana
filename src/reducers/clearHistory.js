import { Map } from "immutable"

export const ACTION_NAME = "CLEAR_HISTORY"

export const run = (data, action) => {
  return data
    .set("history", Map({
      entries: Map(),
      successCount: 0,
      attemptsCount: 0
    }))
}
