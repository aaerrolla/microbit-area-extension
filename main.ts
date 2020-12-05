/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace area {
    //% block="circle radius $radius"
    //% radius.defl=100
    //% radius.min=0 radius.max=1000
    export function circle(radius:number) {
        return Math.PI * radius * radius;
    }

}