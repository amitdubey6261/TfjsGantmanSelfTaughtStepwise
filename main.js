import * as tf from '@tensorflow/tfjs-core';
import $ from 'jquery'

const v = tf.tensor(
    [
        [
            [1,1,1],
            [0,0,0],
            [1,1,1],
            [0,0,0],
        ] ,
        [
            [1,1,1],
            [0,0,0],
            [1,1,1],
            [0,0,0],
        ] ,
        [
            [1,1,1],
            [0,0,0],
            [1,1,1],
            [0,0,0],
        ]
    ]
)

let canvas = document.getElementById('randomness')
console.log(canvas)

tf.browser.toPixels( v , canvas ).then(()=>{
    v.dispose();
})