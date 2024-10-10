
const n = document.getElementById('numbers')


//create 5 random numbers
const randoms = (maxCont=5) => {
  let arr = []
  for (let i = 0; i < maxCont; i++){
    const n = Math.floor(Math.random() * 10) + 1
    arr.push(n)
  }
  return arr
}

n.innerHTML = printRandoms(randoms())

//prints the random numbers array
function printRandoms(arr){
  let markup = ``
  for (let i = 0; i < arr.length; i++){
    markup += 
    `
      <div>${arr[i]}</div>
    `
  }
  return markup
}
