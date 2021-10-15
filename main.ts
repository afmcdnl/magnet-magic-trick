let force = 0
input.onButtonPressed(Button.A, function () {
    if (force > 100) {
        basic.showString("B")
    } else {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (force > 50) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
})
