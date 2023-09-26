import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import Applicattion  from "./Application";


class App extends Component {
    render() {
        return (
           <Applicattion />
           
        );
    }
}
 var a=document.getElementById("root");
 ReactDOM.createRoot(a).render(<App></App>);