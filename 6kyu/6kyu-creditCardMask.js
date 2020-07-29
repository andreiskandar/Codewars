function maskify(cc) {
  if(cc.length > 4) {
    var maskCC = cc.split(""); 
    for(let i = 0; i < maskCC.length - 4; i++) {
      maskCC[i] = '#'; 
    }
    return maskCC.join(""); 
  }
  return cc; 
}

console.log(maskify('1'));
