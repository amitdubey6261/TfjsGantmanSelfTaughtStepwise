import * as tf from "@tensorflow/tfjs-core";
import * as toxicity from '@tensorflow-models/toxicity'

let model 
const threshold = 0.2 ;

async function loadModel(){
    model = await toxicity.load(threshold);
    const sentances = [" I love you "];
    console.log("idr");
    model.classify(sentances).then((pred)=>{
        console.log(JSON.stringify(pred , null , 2))
    })
}

loadModel();
