import "./Style.css";
import { Component } from "react";

class SecondCompo extends Component{
  render(){
    return(
        <div className="class_div">

<h1>This is created using Class Component </h1>
         <p>This is done using External css</p>
         <p style={{color:"pink",fontSize:"20px"}}>
            This is done using inline css
        </p>
 



        </div>
    )
  }


}
export default SecondCompo