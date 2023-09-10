import "./Style.css";

function FirstCompo(){
    return(
       <div className="Func_div"> 
      <h1>This is created using functional Component</h1>
      <p>This is done using external css</p>
      <p style={{ color: "blue" }}>This is done using inline CSS</p>
       </div>
    )

}

export default FirstCompo