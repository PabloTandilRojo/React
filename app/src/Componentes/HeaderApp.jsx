import React from 'react'

export default function HeaderApp (props) {

    const {nombreApp} = props;

    let myStyles = {
        margin: "2rem auto",
        maxWidth: "98%",
        colo: "#fff",        
      };

    return ( 
        <h1 style={myStyles}>{nombreApp}</h1>
     );
}