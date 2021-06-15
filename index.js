class Formatter {
 
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(str){
    let finalStr = []
    let nonCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newStr = str.split(' ')
    finalStr.push(Formatter.capitalize(newStr[0]))
    for(let i = 1; i < newStr.length; i++){
      if(nonCap.includes(newStr[i]) === false) {
        finalStr.push(Formatter.capitalize(newStr[i]))
      }else {
        finalStr.push(newStr[i])
      }
    }
    return finalStr.join(' ')
  }


 
 
}