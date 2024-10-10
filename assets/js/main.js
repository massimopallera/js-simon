
const n = document.getElementById('numbers')
const timerEl = document.getElementById('timer')

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

const maxTime = 30

  let time = 0
  let timeValue = `${time}%`
  let clock = setInterval(function(){
    if (time == maxTime){
      clearInterval(clock)
      // btnUp.disabled = false
      // btnUp.innerText = 'Upload'
      // msg.classList.remove('d-none')
      
      // setTimeout(function(){
      //   timeValue = ''
      //   progressBar.innerText = progressValue
      //   progressBar.style.width = progressValue
      //   msg.classList.add('d-none')
      // },5000)

    } else {
      timeValue = `${++time}s`
      timerEl.innerText = timeValue
      timerEl.style.width = timeValue
      
    }

},1000)



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