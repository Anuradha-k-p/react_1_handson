import React, { Component} from "react";
import FirstCompo from "./FuncCompo";
import SecondCompo from "./ClassCompo";
import "./Style.css"




class Button_one extends Component{
    state = {
        btn1: true,
      };
    
      toggleBtnValue = () => {
        this.setState((lastState) => ({ btn1: !lastState.btn1 }));
      }
    
      render() {
        return (
          <div>
            <button className="Button1" onClick={this.toggleBtnValue}>
              To see styling in Functional component
            </button>
            {this.state.btn1 ? null : <FirstCompo />}
          </div>
        );
        }


 }

 export default Button_one







 class Button_two extends Component{
    state = {
        btn2: true,
      };
    
      toggleBtnValue = () => {
        this.setState((lastState) => ({ btn2: !lastState.btn2 }));
      }
    
      render() {
        return (
          <div>
            <button className="Button2" onClick={this.toggleBtnValue}>
              To see styling in Class component
            </button>
            {this.state.btn2 ? null : <SecondCompo />}
          </div>
        );
        }


 }

 export {Button_two}