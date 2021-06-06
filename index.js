class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
  }
  
  static sanitize(str) {
     return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = str.split(' ')
    words[0] = this.capitalize(words[0])
  
    return words.map(word => {
      if (exceptions.includes(word)) return word
      return this.capitalize(word)
    }).join(' ')
  }
}

const str = Formatter.titleize('from at but hello friends');
console.log(str)