class Formatter {
  static capitalize(str) {
      return str[0].toUpperCase() + str.slice(1);
                    }
         static sanitize(str){
        str = str.replace(/[^a-zA-Z0-9'\. -]/g, '');
         return str;
                    }
  static titleize(str){
      str = str[0].toUpperCase() + str.slice(1);
         let strarray = str.split(" ");
              let smallwords = ["the", "a", "an", "but", "of", "and", "for", "at",     "by", "from"];
            for(let i = 0; i < strarray.length; i++){
            if(!(smallwords.includes(strarray[i]))){
               strarray[i] = strarray[i][0].toUpperCase() + strarray[i].slice(1);
              }
       }
                           return strarray.join(" ");
   }
}
