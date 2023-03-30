import * as tf from "@tensorflow/tfjs";

/* batch of 4  , 5X5 RGB image ---->

//batch increase the dimension ex :


[
    [120 , 120 , 3],
    [120 , 120 , 3],
    [120 , 120 , 3],
    [120 , 120 , 3],
]

an extra bracket is require to grab all thus 3d become 4d ......

*/

const cakeImg = document.getElementById("gant")
const canvas = document.getElementById("canvas")

const flipCake = tf.tidy(()=>{
    const cakeTensor = tf.expandDims(
        tf.browser.fromPixels(cakeImg).asType('float32')
    );
    return tf.squeeze(tf.image.flipLeftRight(cakeTensor)).asType("int32")
})

tf.browser.toPixels(flipCake , canvas).then(()=>{
    flipCake.dispose()
})