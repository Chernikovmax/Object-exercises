class WhatTimeIsIt {
  constructor() {
    this.currentDate = new Date();
    this.hours = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
  }
  run() {
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  }
  updateTime(secs) {
    this.seconds += secs;
    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }
}

let clock = new WhatTimeIsIt();
clock.run();
