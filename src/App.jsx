import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import RandomString from "./pages/RandomString";
import Translator from "./pages/Translator";


function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route 
path="/" 
element={<Home/>}
/>


<Route
path="/random"
element={<RandomString/>}
/>


<Route
path="/translator"
element={<Translator/>}
/>


</Routes>


</BrowserRouter>

)

}


export default App;