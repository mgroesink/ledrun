basic.forever(function () {
    for (let YValue = 0; YValue <= 4; YValue++) {
        for (let XValue = 0; XValue <= 4; XValue++) {
            led.plot(XValue, YValue)
            basic.pause(100)
            led.unplot(XValue, YValue)
        }
    }
})
