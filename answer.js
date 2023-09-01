const multipleOfIndex=array=>{
    return array.filter((e,i)=>e==0?e==0:e%i==0)
}

function multipleOfIndex(array) {
  return array.filter((x,i) => x == 0 || x % i === 0)
}
