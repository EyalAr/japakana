class Entry {
  constructor (romaji, hiragana, katakana) {
    this.empty = !romaji
    if (this.empty) return
    const _romaji = [].concat(romaji).map(r => r.toLowerCase())
    this.romaji = _romaji[0]
    this.alts = _romaji
    this.hiragana = hiragana
    this.katakana = katakana
  }

  match (candidate) {
    return this.alts.indexOf(candidate.toLowerCase()) !== -1
  }
}

export default Entry
