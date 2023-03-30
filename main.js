import * as tf from '@tensorflow/tfjs'

const newSize = [768, 560]
const lgi = document.getElementById("lgi");
const nnCavas = document.getElementById("nnCanvas");

console.log()
const blCavas = document.getElementById("blCanvas");
const gantTensor = tf.browser.fromPixels(lgi);

const nnResizeTensor = tf.image.resizeNearestNeighbor(
    gantTensor,
    newSize,
    true
).asType('int32')

tf.browser.toPixels(nnResizeTensor , nnCavas).then(()=>{
    nnResizeTensor.dispose();
})

const blResizeTensor = tf.image.resizeBilinear(
    gantTensor,
    newSize,
    true
).asType('int32')

tf.browser.toPixels(blResizeTensor, blCavas).then(() => {
    nnResizeTensor.dispose();
})