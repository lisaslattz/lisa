basic.forever(function () {
    if (input.temperature() > 35) {
        music.playMelody("B C5 B C5 B C5 B C5 ", 500)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showString("DANGER")
    } else {
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.showString("SAFE")
    }
})
