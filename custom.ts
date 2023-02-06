
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#9EBE25 icon=""
namespace Distance {
    //% block="distance between |X1: $x1|Y1: $y1||X2: $x2|Y2: $y2|"
    //% inlineInputMode=inline
    export function distance_between(x1: number,
    y1: number,
     x2: number,
      y2: number): number{
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }
}
