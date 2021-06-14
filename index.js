class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str) {
    str = str.replace(/[~!@#$%^&*()_+={}]/gim,"");
    return str.trim();
  }
  
  static titleize(string) {
     var string_array = string.split(' ');
    string_array = string_array.map(function(str,i) {
       if(i != 0 && ["the", "a", "an", "but", "of", "and", "for", "at", "by","from"].includes(str)) return str;
       else return str.charAt(0).toUpperCase() + str.slice(1);
    });
    
    return string_array.join(' ');
	    
  }
}