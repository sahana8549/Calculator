import React, { useState, useRef, useEffect } from "react";
import "./Button.css";
const Button = () => {
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const handelClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const clear = () => {
    setResult("");
    setDisplay("");
  };

  const calculate = () => {
    try {
      const display = result;
      setDisplay(display);
      // eslint-disable-next-line
      setResult(eval(result) + "");
    } catch (error) {
      setResult("Error");
      setDisplay("");
    }
  };
  return (
    <div>
      <h1>Calculator</h1>

      <div className="calc-wrapper">
        <input type="text" id="input" value={display}></input>
        <input type="text" id="input" value={result} ref={inputRef}></input>
        <div className="row">
          <button id="backspace" onClick={backspace}>
            🠔
          </button>
          <button id="operator" name="(" onClick={handelClick}>
            (
          </button>
          <button name=")" id="operator" onClick={handelClick}>
            )
          </button>

          <button name="%" id="operator" onClick={handelClick}>
            %
          </button>
        </div>
        <div className="row">
          <button name="7" onClick={handelClick}>
            7
          </button>
          <button name="8" onClick={handelClick}>
            8
          </button>
          <button name="9" onClick={handelClick}>
            9
          </button>
          <button name="-" id="operator" onClick={handelClick}>
            -
          </button>
        </div>
        <div className="row">
          <button name="6" onClick={handelClick}>
            6
          </button>
          <button name="5" onClick={handelClick}>
            5
          </button>
          <button name="4" onClick={handelClick}>
            4
          </button>
          <button name="* " id="operator" onClick={handelClick}>
            &times;
          </button>
        </div>
        <div className="row">
          <button name="3" onClick={handelClick}>
            3
          </button>
          <button name="2" onClick={handelClick}>
            2
          </button>
          <button name="1" onClick={handelClick}>
            1
          </button>
          <button name="/" id="operator" onClick={handelClick}>
            /
          </button>
        </div>
        <div className="row">
          <button name="." onClick={handelClick}>
            .
          </button>
          <button name="0" onClick={handelClick}>
            0
          </button>
          <button id="result" name="" onClick={calculate}>
            =
          </button>
          <button name="+" id="operator" onClick={handelClick}>
            +
          </button>
        </div>
        <button id="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};
export default Button;
