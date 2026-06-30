import {Link} from "react-router-dom";


function Navbar(){

return(

<div className="bg-purple-600 p-4 text-white flex gap-5">

<Link to="/">Home</Link>

<Link to="/random">
Random
</Link>

<Link to="/translator">
Translator
</Link>

</div>

)

}

export default Navbar;