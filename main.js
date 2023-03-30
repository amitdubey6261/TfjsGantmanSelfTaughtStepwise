import * as tf from "@tensorflow/tfjs-core";

const myImage = document.getElementById('gant');
const imagetensor = tf.browser.fromPixels(myImage);

const flippedTensor = tf.reverse( imagetensor , 1); // 0 , 1

tf.browser.toPixels(flippedTensor , document.getElementById('canvas'))
