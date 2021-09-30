class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;     
    },1000);
  }

 

  computeTwoDigitNumber(value) {
    let numberStringed = value.toString();
    if(numberStringed.length === 2) return numberStringed;
    else return `0${numberStringed}`;
  }

  getMinutes() {
    if(this.currentTime === 0) return this.computeTwoDigitNumber(0);
    return this.computeTwoDigitNumber(Math.floor(this.currentTime/60));
  }

  getSeconds() {
    return this.computeTwoDigitNumber(this.currentTime%60);    
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
}
let time = new Chronometer;
time.start();
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


