function balikString(str){
  
  var result = ''
  for (u = str.length -1; u >= 0; u--){
    result += str[u]
  }
  return result
}

console.log(balikString('Hello World!'))