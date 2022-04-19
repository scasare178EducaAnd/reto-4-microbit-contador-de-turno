input.onButtonPressed(Button.A, function () {
    Contador += 1
})
input.onButtonPressed(Button.B, function () {
    Contador += -1
})
let Contador = 0
basic.forever(function () {
    if (Contador < 0) {
        Contador = 0
    }
    basic.showNumber(Contador)
})
