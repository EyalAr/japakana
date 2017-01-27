import Entry from "./entry"

const transform = table => table.map(e => new Entry(e ? e... : null))

class KanaTable {
  constructor (table, rows, cols) {
    this.table = transform(table)
    this.rows = rows
    this.cols = cols
  }

  getRow (row) {
    return this.table.filter((e, i) => i >= row * this.cols && i < (row + 1) * this.cols)
  }

  getCol (col) {
    return this.table.filter((e, i) => i % this.cols === col)
  }

  get (row, col) {
    return this.table[row * this.cols + col]
  }

  forEach (cb) {
    this.table.forEach((e, i) => cb(e, Math.floor(i / this.cols), i % this.cols))
  }

  forEachRow (cb) {
    for (var i = 0 ; i < this.rows ; i++) cb(this.getRow(i), i)
  }

  forEachCol (cb) {
    for (var i = 0 ; i < this.cols ; i++) cb(this.getCol(i), i)
  }
}

export default KanaTable
