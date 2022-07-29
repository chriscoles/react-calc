import "./Calculator.css";
import Button from "./Button";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator(props) {
  const [calc, setCalc] = useState("");

  const buttons = [
    ["C", "(", ")", "mod", "Π"],
    ["7", "8", "9", "÷", "√"],
    ["4", "5", "6", "x", "x²"],
    ["1", "2", "3", "-", "="],
    ["0", ".", "%", "+"],
  ];

  function calculate(action) {
    switch (action) {
      case "C":
        setCalc("");
        break;
      case "mod":
        setCalc(calc + " mod ");
        break;
      case "Π":
        setCalc(calc + "3.141592654");
        break;
      case "√":
        setCalc(calc + "sqrt");
        break;
      case "÷":
        setCalc(calc + "/");
        break;
      case "x":
        setCalc(calc + "*");
        break;
      case "x²":
        setCalc(calc + "^2");
        break;
      case "%":
        setCalc(calc + "%");
        break;
      case "=":
        const result = evaluate(calc);
        setCalc(result);
        break;
      default:
        setCalc(calc + action);
    }
  }

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td colSpan={5} height={56} valign="top">
              <input
                className="screen"
                type="text"
                value={calc}
                style={{
                  width: 314,
                  height: 40,
                  borderRadius: 6,
                  border: 0,
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          {buttons.map(function (row, i) {
            return (
              <tr height="100%">
                {row.map(function (button, j) {
                  var span = 1;
                  var height = "40px";
                  var backgroundColor = "rgb(48, 48, 48)";
                  if (button === "=") {
                    span = 2;
                    height = "84px";
                  }
                  let pattern = /[0-9]/g;
                  if (pattern.test(button)) {
                    backgroundColor = "grey";
                  }
                  if (button === "C") {
                    backgroundColor = "purple";
                  }

                  return (
                    <td rowSpan={span}>
                      <Button
                        height={height}
                        handler={calculate}
                        label={button}
                        backgroundColor={backgroundColor}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
