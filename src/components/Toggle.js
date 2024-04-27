import React, { useState } from "react";

function Toggle() {

  const [isOn, setIsOn ]= useState(false)

  function handlebutton(){
    setIsOn((isOn=>!isOn))
  }
const color= isOn? "firebrick" : "white"

  return <button style={{background:color} } onClick={handlebutton}>{isOn?"ON":"OFF"}</button>;
}

export default Toggle;
