"use strict";

class CountdownTimer {
  constructor({ selector: elem, targetDate: countTo }) {
    this.elem = document.querySelector(elem);
    this.countTo = countTo.getTime();
    this.range = null;
    this.interval();
  }

  interval() {
    const count = setInterval(() => {
      this.range = this.countTo - new Date().getTime();
      this.render(count);
    }, 1000);
  }

  days() {
    const days = Math.floor(this.range / (1000 * 60 * 60 * 24));
    return days;
  }

  hours() {
    return Math.floor((this.range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, 0);
  }

  mins() {
    return Math.floor((this.range % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, 0);
  }

  seconds() {
    return Math.floor((this.range % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, 0);
  }

  render() {
    if (this.range <= 0) {
      this.elem.innerHTML = "<div>Already!</div>";
    } else {
      this.elem.innerHTML = `<div class="field">
          <span class="value" data-value="days"> ${this.days()}</span>
          <span class="label">Days </span>
        </div>
        <div class="field">
          <span class="value" data-value="hours"> ${this.hours()}</span>
          <span class="label">Hours </span>
        </div>
        <div class="field">
          <span class="value" data-value="mins"> ${this.mins()}</span>
          <span class="label">Minutes </span>
        </div>
        <div class="field">
          <span class="value" data-value="secs"> ${this.seconds()}</span>
          <span class="label">Seconds </span>
        </div>`;
    }
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2020")
});
