let Contraseña = 0
let Letra = 0
let Simbolo = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        basic.showString("Pass")
        Contraseña = randint(1, 3)
        if (Contraseña == 1) {
            basic.showNumber(0)
        } else if (Contraseña == 2) {
            Letra = randint(1, 4)
            if (Letra == 1) {
                basic.showString("A")
            } else if (Letra == 2) {
                basic.showString("B")
            } else if (Letra == 3) {
                basic.showString("C")
            } else if (Letra == 4) {
                basic.showString("D")
            }
        } else if (Contraseña == 3) {
            Simbolo = randint(1, 4)
            if (Simbolo == 1) {
                basic.showString(":")
            } else if (Simbolo == 2) {
                basic.showString("!")
            } else if (Simbolo == 3) {
                basic.showString("?")
            } else if (Simbolo == 4) {
                basic.showString("#")
            }
        }
    }
})
