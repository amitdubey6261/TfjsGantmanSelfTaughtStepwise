import * as tf from "@tensorflow/tfjs-core";

//first tensor

/*const d1 = [10,20,30]
const first = tf.tensor1d(d1)
console.log(first)*/


//int32 3X3 array :
const first = tf.tensor([1.1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9] , [ 3 , 3] , 'int32')
const second = tf.tensor([true , false , false] , null , 'bool')
first.print()
second.print()



