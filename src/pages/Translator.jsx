import { useState } from "react";
import axios from "axios";


function Translator(){

const [text,setText] = useState("");
const [result,setResult] = useState("");
const [language,setLanguage] = useState("hi");


const translate = async()=>{


if(!text){
setResult("Please enter text");
return;
}


try{


const response = await axios.post(

"https://deep-translate1.p.rapidapi.com/language/translate/v2",


{
q:text,
source:"en",
target:language
},


{

headers:{

"Content-Type":"application/json",

"x-rapidapi-host":
"deep-translate1.p.rapidapi.com",

"x-rapidapi-key":
"69e6c9d243msh0bcdb4319a79820p14e545jsn0796f67bfe10"

}

}

);



setResult(
response.data.data.translations.translatedText
);



}

catch(error){

console.log(error);

setResult("Translation failed");

}


}



return(


<div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-10">


<div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">


<h1 className="text-4xl font-bold text-green-600 mb-5">

Text Translator

</h1>



<textarea


className="w-full border p-4 rounded-lg h-40"


placeholder="Enter English text"


onChange={(e)=>setText(e.target.value)}


></textarea>




<select

className="border p-3 mt-4 rounded"

onChange={(e)=>setLanguage(e.target.value)}

>


<option value="hi">
Hindi
</option>


<option value="es">
Spanish
</option>


<option value="fr">
French
</option>


<option value="de">
German
</option>


</select>



<br/>


<button


onClick={translate}


className="bg-green-600 text-white px-8 py-3 mt-5 rounded-lg"


>

Translate

</button>




<div className="mt-5 text-xl font-semibold">

{result}

</div>



</div>


</div>


)

}


export default Translator;