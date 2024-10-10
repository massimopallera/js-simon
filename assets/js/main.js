
const n = document.getElementById('numbers')

const formContainer = document.getElementById('formContainer')
const numbContainer = document.getElementById('numbersContainer')

const timerEl = document.getElementById('timer')
const formEl = document.getElementById('formInputNumbers')
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

const maxTime = 1

let time = 0
let timeValue = `${time}%`
let clock = setInterval(function(){
  if (time == maxTime){

    //stop and clear the timer
    clearInterval(clock)
    numbContainer.classList.add('d-none') //hide the numbers and the timer
    formContainer.classList.remove('d-none') //display form

    formEl.insertAdjacentHTML('afterbegin', addInputsInForm())

  } else {
    timeValue = `${++time}s`
    timerEl.innerText = timeValue
    timerEl.style.width = timeValue
    
  }

},1000)



formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputs = () =>  {
    let array = []

    //to fix
    for (let i = 1; i <= 5; i++) {
      // array.push(e.target..value) 
    }

    return array
  }

  console.log(inputs());
  
})


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

function addInputsInForm(){
  let markup = ``
  for (let i = 1; i <= 5; i++) {
    markup += `
    <div class="mb-3">
      <label for="number${i}" class="form-label">Inserisci numero</label>
      <input type="number" class="form-control" name="number${i}" id="number${i}" aria-describedby=""
        placeholder="Inserisci un numero" />
    </div>
    `
  }
  return markup
}
