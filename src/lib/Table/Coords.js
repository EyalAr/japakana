const range = (from, to) => {
  // inclusive from and to
  const res = []
  for (var i = from ; i <= to ; i++) {
    res.push(i)
  }
  return res
}

class Coords {
  constructor (rows, cols) {
    this.rows = rows
    this.cols = cols
  }

  toIndex (row, col) {
    return row * this.cols + col
  }

  toRow (i) {
    return Math.floor(i / this.cols)
  }

  toCol (i) {
    return i % this.cols
  }

  isInRow (i, row) {
    return this.toRow(i) === row
  }

  isInCol (i, col) {
    return this.toCol(i) === col
  }

  getIndicesInRow (row) {
    return range(this.toIndex(row, 0), this.toIndex(row, this.cols - 1))
  }

  getIndicesInCol (col) {
    const res = []
    for (var i = 0 ; i < this.rows ; i++) {
      res.push(this.toIndex(i, col))
    }
    return res
  }

  forEach (cb) {
    for (var i = 0 ; i < this.rows * this.cols ; i++) {
      cb(i)
    }
  }

  forEachRow (cb) {
    for (var i = 0 ; i < this.rows ; i++) {
      cb(i)
    }
  }

  forEachCol (cb) {
    for (var i = 0 ; i < this.cols ; i++) {
      cb(i)
    }
  }

  map (cb) {
    var res = []
    this.forEach(i => {
      res.push(cb(i))
    })
    return res
  }

  mapRows (cb) {
    var res = []
    this.forEachRow(r => {
      res.push(cb(r))
    })
    return res
  }

  mapCols (cb) {
    var res = []
    this.forEachCol(c => {
      res.push(cb(c))
    })
    return res
  }
}

export default Coords
