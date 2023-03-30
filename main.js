import * as tf from '@tensorflow/tfjs'

const startPoint = [100,200,0] // 0 RGB , 2 BlackWhite
const newSize = [265, 245]
const lgi = document.getElementById("lgi");
const cropCavas = document.getElementById("cropCanvas");
const lgiTensor = tf.browser.fromPixels(lgi);


const cropped = tf.slice( lgiTensor , startPoint , newSize );


tf.browser.toPixels(cropped , cropCavas).then(()=>{
    cropped.dispose();
})