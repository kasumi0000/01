function valueToHex(c) {
var hex = c.toString(16)
return hex
}

function rgbToHex(r, g, b) {
  return(valueToHex(r) + valueToHex(g) + valueToHex(b));
  }
console.log("The converted hexadecimal values are:")
console.log(rgbToHex(51, 170, 238));