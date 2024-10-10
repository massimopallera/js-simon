
//create 5 random numbers
let randoms = (maxCont=5) => {
  let arr = []
  for (let i = 0; i < maxCont; i++){
    const n = Math.floor(Math.random() * 10) + 1
    arr.push(n)
  }
  return arr
}

