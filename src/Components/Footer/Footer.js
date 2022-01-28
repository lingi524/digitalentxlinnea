import React from "react";
import '../../App.css';
import image from '../../img/star-orange.svg';


function Footer() {

    return (
     <div className="Footer">
         <h3>Gjord med kärlek av Linnéa Gistrand</h3>
         <img src={image} width="50" alt="Dekorativ stjärna"></img>
     </div>
    )
}

export default Footer