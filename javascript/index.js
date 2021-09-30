const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let StartintervalId;

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  minDecElement.innerHTML = `${min[0]}`;
  minUniElement.innerHTML = `${min[1]}`;
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  console.log("******"+sec[1]); //Onvoit que les secondes defiles bien en printant dans le stop
  secDecElement.innerHTML = `${sec[0]}`;
  secUniElement.innerHTML = `${sec[1]}`;
}


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
}

function clearSplits() {
  splitsElement.innerHTML = " ";
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.innerHTML = "START";
  btnLeftElement.setAttribute('class','btn start');
  btnRightElement.innerHTML = "RESET";
  btnRightElement.setAttribute('class', 'btn reset');
}

function setSplitBtn() {  
  let min = chronometer.getMinutes();  
  let sec = chronometer.getSeconds();
  const li = document.createElement('li');
  splitsElement.appendChild(li);
  li.textContent =`${min}:${sec}:00`;
}

const timeooooutId = setTimeout(chronometer.getSeconds, 5000);

function setStartBtn() {
 chronometer.start();  
  btnLeftElement.innerHTML = "STOP";
  btnLeftElement.setAttribute('class','btn stop');
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.setAttribute('class', 'btn split');
}

function setResetBtn() {
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //working 2+2
  if(btnLeftElement.classList.contains('start')){
    setStartBtn();
    StartintervalId = setInterval(() => {
      printTime();      
    },1000);
    /*
    do{
      printTime();
    }
    while(btnLeftElement.classList.contains('start'));  */
  } else {
    setStopBtn();
    clearInterval(StartintervalId);
  }
  /*
  if(btnLeftElement.classList.contains('start')){
    setStartBtn();
    StartintervalId = setInterval(() => {
      printTime();      
    },500);
  }
    else{
      setStopBtn();
      //printTime();
    }*/
    /*
    do{
      printTime();
    }
    while(btnLeftElement.classList.contains('start')); } */
  /*
  else{
    setStopBtn();
    //printTime();
  }
*/
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    setResetBtn();
    printTime();
    clearSplits();
  }
  else{
    setSplitBtn();
  }
});
