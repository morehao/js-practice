'use strict'
function getProduct (v) {
  if (v === 1) return v
  const a = getProduct(v - 1)
  return v * getProduct(v - 1)
}
console.log(getProduct(5))
