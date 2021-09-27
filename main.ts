function Vibr01 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Vibr01()
    } else if (receivedNumber == 1) {
        Vibr02()
    } else if (receivedNumber == 2) {
        Vibr03()
    }
    basic.pause(200)
    L01.showColor(neopixel.colors(NeoPixelColors.Black))
    L02.showColor(neopixel.colors(NeoPixelColors.Black))
    L01.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    L01.setPixelColor(21, neopixel.colors(NeoPixelColors.White))
    basic.pause(50)
    L01.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    L01.setPixelColor(20, neopixel.colors(NeoPixelColors.White))
    basic.pause(50)
    L01.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    L01.setPixelColor(19, neopixel.colors(NeoPixelColors.White))
    basic.pause(50)
    L01.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
    L01.setPixelColor(18, neopixel.colors(NeoPixelColors.White))
    basic.pause(50)
    L01.setPixelColor(5, neopixel.colors(NeoPixelColors.White))
    L02.setPixelColor(17, neopixel.colors(NeoPixelColors.White))
    basic.pause(50)
    L01.setPixelColor(6, neopixel.colors(NeoPixelColors.White))
    L02.setPixelColor(16, neopixel.colors(NeoPixelColors.White))
})
input.onButtonPressed(Button.A, function () {
    Vibr01()
    seq = 0
})
input.onButtonPressed(Button.AB, function () {
    Vibr03()
    seq = 2
})
input.onButtonPressed(Button.B, function () {
    Vibr02()
    seq = 1
})
input.onGesture(Gesture.Shake, function () {
    if (seq == 0) {
        Vibr01()
        radio.sendNumber(0)
    } else if (seq == 1) {
        Vibr02()
        radio.sendNumber(1)
    } else if (seq == 2) {
        Vibr03()
        radio.sendNumber(2)
    }
    basic.pause(200)
    L01.showColor(neopixel.colors(NeoPixelColors.White))
    L02.showColor(neopixel.colors(NeoPixelColors.White))
    L01.setPixelColor(6, neopixel.colors(NeoPixelColors.Black))
    L02.setPixelColor(16, neopixel.colors(NeoPixelColors.Black))
    basic.pause(50)
    L01.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    L02.setPixelColor(17, neopixel.colors(NeoPixelColors.Black))
    basic.pause(50)
    L01.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
    L01.setPixelColor(18, neopixel.colors(NeoPixelColors.Black))
    basic.pause(50)
    L01.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    L01.setPixelColor(19, neopixel.colors(NeoPixelColors.Black))
    basic.pause(50)
    L01.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    L01.setPixelColor(20, neopixel.colors(NeoPixelColors.Black))
    basic.pause(50)
    L01.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    L01.setPixelColor(21, neopixel.colors(NeoPixelColors.Black))
})
function Vibr03 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function Vibr02 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let seq = 0
let L02: neopixel.Strip = null
let L01: neopixel.Strip = null
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
L01 = strip.range(1, 6)
L02 = strip.range(16, 21)
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P2) <= 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        L01.showColor(neopixel.colors(NeoPixelColors.White))
        L02.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(200)
        L01.showColor(neopixel.colors(NeoPixelColors.Black))
        L02.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
        L01.showColor(neopixel.colors(NeoPixelColors.White))
        L02.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(300)
        L01.showColor(neopixel.colors(NeoPixelColors.Black))
        L02.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(2000)
    } else {
        basic.showString("Come Closer!")
    }
})
