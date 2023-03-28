import * as tf from '@tensorflow/tfjs-core';

let v1 , v2 , v3 ; 

console.log(tf.memory().numTensors)

tf.tidy(()=>{
    v1 = tf.tensor([1,2,3]);
    v2 = tf.tensor([4,5,6]);
    v3 = tf.tensor([7,6,2]);
    
    console.log(tf.memory().numTensors)
    
    tf.keep(v1);
    
    return v2 ; 
})

console.log(tf.memory().numTensors)

tf.dispose(v1)
tf.dispose(v2)

console.log(tf.memory().numTensors)