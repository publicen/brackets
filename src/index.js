module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) return false
  let bracketsArray = bracketsConfig.map(a=>a.join(""))
  for (let i = 0; i < bracketsArray.length; i++){
    if (str.includes(bracketsArray[i])){
      str= str.replace(bracketsArray[i], "")
      i -= bracketsArray.length
    }
   }  
  return str.length === 0 ? true : false  
}
  
