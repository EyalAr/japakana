import Coords from "./Coords"

class Table {
  constructor (vals, rows, cols) {
    this.vals = vals
    this.rows = rows
    this.cols = cols
    this.coords = new Coords(rows, cols)
  }

  getRow (row) {
    return this.vals.filter((e, i) => this.coords.isInRow(i, row))
  }

  getCol (col) {
    return this.vals.filter((e, i) => this.coords.isInCol(i, col))
  }

  get (row, col) {
    return this.vals[this.coords.toIndex(row, col)]
  }

  getByIndex (i) {
    return this.vals[i]
  }

  forEach (cb) {
    this.vals.forEach((e, i) => cb(e, this.coords.toRow(i), this.coords.toCol(i), i))
  }

  forEachRow (cb) {
    for (var i = 0 ; i < this.rows ; i++) cb(this.getRow(i), i)
  }

  forEachCol (cb) {
    for (var i = 0 ; i < this.cols ; i++) cb(this.getCol(i), i)
  }

  map (mapper) {
    const res = []
    this.forEach((e, row, col, i) => {
      res.push(mapper(e, row, col, i))
    })
    return new Table(res, this.rows, this.cols)
  }

  mapRows (mapper) {
    const res = []
    this.forEachRow((row, i) => {
      res.push(mapper(row, i))
    })
    return res
  }

  mapCols (mapper) {
    const res = []
    this.forEachCol((col, i) => {
      res.push(mapper(col, i))
    })
    return res
  }
}

export default Table
