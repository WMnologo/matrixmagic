/*
Copyright (C): 2010-2019, Shenzhen Onion3 Tech
modified from Sean
load dependency
"Zero": "file:../pxt-Zero"
*/

//% color="#006400" weight=20 icon="\uf1b9"
namespace MatrixMagic {

    

    export enum Pin {
        //% block=P1
        P1 = 12,
        //% block=P2
        P2 = 13,
        //% block=P3
        P3 = 15,
    }

    export enum Status {
        //% block=Pressed
        Pressed = 0,
        //% block=Released
        Released = 1,
    }
    export enum LedControl {
        //% block=TurnOn
        TurnOn = 1,
        //% block=TurnOff
        TurnOff = 0,
    }



    export enum IrProtocol {
        //% block="Keyestudio"
        Keyestudio = 0,
        //% block="NEC"
        NEC = 1,
    }

    export enum IrButtonAction {
        //% block="pressed"
        Pressed = 0,
        //% block="released"
        Released = 1,
    }


    //% blockId=MatrixMagic_Touch_Sensor_Status block="Touch Sensor Interface |%index Status "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Touch_Sensor_Status(index: Pin): number {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.digitalReadPin(DigitalPin.P12); break;
            case Pin.P2: value = pins.digitalReadPin(DigitalPin.P13); break;
            case Pin.P3: value = pins.digitalReadPin(DigitalPin.P14); break;
        }

        return value;

    }


    //% blockId=MatrixMagic_Touch_Sensor_Press block="Interface |%index Touch Sensor |%status "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Touch_Sensor_Press(index: Pin, status: Status): boolean {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.digitalReadPin(DigitalPin.P12); break;
            case Pin.P2: value = pins.digitalReadPin(DigitalPin.P13); break;
            case Pin.P3: value = pins.digitalReadPin(DigitalPin.P14); break;
        }
        if (value == status) {
            return true
        } else {
            return false
        }

    }

    //% blockId=MatrixMagic_Infrared_Reflection_Status block="Infrared Reflection Sensor Interface |%index Status "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Infrared_Reflection_Status(index: Pin): number {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.digitalReadPin(DigitalPin.P0); break;
            case Pin.P2: value = pins.digitalReadPin(DigitalPin.P1); break;
            case Pin.P3: value = pins.digitalReadPin(DigitalPin.P2); break;
        }

        return value;

    }

    //% blockId=MatrixMagic_Sound_Sensor_Status block="Sound Sensor Interface |%index Status "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Sound_Sensor_Status(index: Pin): number {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.digitalReadPin(DigitalPin.P0); break;
            case Pin.P2: value = pins.digitalReadPin(DigitalPin.P1); break;
            case Pin.P3: value = pins.digitalReadPin(DigitalPin.P12); break;
        }

        return value;

    }



    //% blockId=MatrixMagic_Sound_Sensor_Number block="Sound Sensor Interface |%index Number "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Sound_Sensor_Number(index: Pin): number {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.analogReadPin(AnalogPin.P0); break;
            case Pin.P2: value = pins.analogReadPin(AnalogPin.P1); break;
            case Pin.P3: value = pins.analogReadPin(AnalogPin.P2); break;
        }

        return value;

    }

    //% blockId=MatrixMagic_Light_Sensor_Number block="Light Sensor Interface |%index Number "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Light_Sensor_Number(index: Pin): number {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.analogReadPin(AnalogPin.P0); break;
            case Pin.P2: value = pins.analogReadPin(AnalogPin.P1); break;
            case Pin.P3: value = pins.analogReadPin(AnalogPin.P2); break;
        }

        return value;

    }

    //% blockId=MatrixMagic_Potentiometer_Sensor_Number block="Potentiometer Sensor Interface |%index Number "
    //% weight=87
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Potentiometer_Sensor_Number(index: Pin): number {
        //pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
        let value = 0;
        switch (index) {
            case Pin.P1: value = pins.analogReadPin(AnalogPin.P0); break;
            case Pin.P2: value = pins.analogReadPin(AnalogPin.P1); break;
            case Pin.P3: value = pins.analogReadPin(AnalogPin.P2); break;
        }

        return value;

    }

  
}
