class Formatter {
  //add static methods here
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  
static titleize(sentence) {
    const except= ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let array = sentence.split(" ");

    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(array[i]))
      } else {
        if (except.includes(array[i])) {
          result.push(array[i])
        } else {
          result.push(this.capitalize(array[i]))
        }
      }
    }
    return result.join(" ");
  }
}