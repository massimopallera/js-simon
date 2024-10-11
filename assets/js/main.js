
const n = document.getElementById('numbers')

const formContainer = document.getElementById('formContainer')
const numbContainer = document.getElementById('numbersContainer')

const printResultsEl = document.getElementById('endGame')
const timerEl = document.getElementById('timer')
const formEl = document.getElementById('formInputNumbers')
//create 5 random numbers
function getRandoms (maxCont = 5){
  let arr = []
  for (let i = 0; i < maxCont; i++){
    const n = Math.floor(Math.random() * 10) + 1
    arr.push(n)
  }
  return arr
}


const randoms = getRandoms()

console.log(randoms)

n.innerHTML = printRandoms(randoms)

const maxTime = 30

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


  //take the inputs and put them into the array
  const inputs = () =>  {
    let array = []
    for (let i = 1; i <= 5; i++) {
      const element = Number(document.getElementById(`number${i}`).value)
      console.log(element);
      array.push(element)
    }
    return array
  }

  const guesses = isEqual(inputs(), randoms)
  let msg
  if (guesses.length != 0){
    msg = `Numero indovinati: ${guesses.length}<br>Numeri indovinati: ${guesses}`
  } else {
    msg = 'Non sono stati indovinati numeri'
  }
  printResultsEl.innerHTML = msg

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

/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */
function isEqual(arr1,arr2){
  let newArray = []
  while (arr1.length > 0){
    const index = arr2.indexOf(arr1[0])
    
    if (index != -1){
      newArray.push(arr1[0])

      arr2.splice(index,1)
      arr1.shift()
      console.log(index,arr2,arr1);
    } else {
      arr1.shift()
    }
  }
  return newArray
}