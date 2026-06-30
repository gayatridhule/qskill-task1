import {useState, useEffect, useCallback} from "react";


function RandomString(){


const [text,setText] = useState("");



const generateString = useCallback(()=>{


let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


let result="";


for(let i=0;i<10;i++){

result += chars[
Math.floor(Math.random()*chars.length)
];

}


setText(result);


},[]);



useEffect(()=>{

generateString();

},[generateString]);



return(

<div className="p-10">


<h1 className="text-3xl font-bold text-blue-600">

Random String Generator

</h1>


<h2 className="text-2xl my-5">

{text}

</h2>


<button

onClick={generateString}

className="bg-blue-600 text-white px-5 py-2 rounded"

>

Generate String

</button>


</div>

)

}


export default RandomString;