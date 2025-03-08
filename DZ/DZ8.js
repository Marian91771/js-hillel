let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step++
        return this
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step--
        return this
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.step)
        return this
    }
  };

ladder.up().up().showStep().up().up().showStep().down().down().down().down().down().down().down().showStep()

