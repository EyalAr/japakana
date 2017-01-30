import Entry from "./entry"
import transform from "./transform"

export default vals => vals.map(e => e ? new Entry(...e) : new Entry(null))
