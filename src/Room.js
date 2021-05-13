
import React, { useState } from 'react';
import './App.css';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(25);

    function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit);
    }
    //const increaseAge= () => {
     //   console.log("Increase Age Clicked");
     //   setAge(++age);
    //}
  return (
    <div className= {"room "+( isLit ? "lit" : "dark" ) } >
    
      The Room is {isLit ? "Lit" : "Dark"};
      <br/>
      Age : {age}
      <br/>
      <button onClick={updateLit}> Toggle Light </button>
      <br/>
      <button onClick={() => {
                            console.log("++ Age Clicked");
                            setAge(++age);
                            }}> 
        + Age </button>
        <button onClick={() => {
                            console.log("-- Age Clicked");
                            setAge(--age);
                            }}> 
        - Age </button>
    </div>
  );
}


export default Room;