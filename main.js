import * as tf from "@tensorflow/tfjs-core";

const cake = new Image()
cake.crossOrigin = 'anonymous'
cake.src = './gant.jpg'
cake.onload = () => {
 const cakeTensor = tf.browser.fromPixels(cake)
 console.log(
 `Successful conversion from Image() to a ${cakeTensor.shape} tensor`
 )
}