let coin = 0
let A_wins = 0
let B_wins = 0
input.onButtonPressed(Button.A, function () {
    coin = randint(1, 2)
    if (coin == 2) {
        basic.showString("Loose")
    } else {
        basic.showString("Win!")
        A_wins = A_wins + 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (A_wins))
})
input.onButtonPressed(Button.B, function () {
    coin = randint(1, 2)
    if (coin == 1) {
        basic.showString("Loose")
    } else {
        basic.showString("Win!")
        B_wins = B_wins + 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (B_wins))
})
