import React from "react";
import Keys from "./Keys";

const keys_list = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
const values_list = [
  "C7",
  "D7",
  "E7",
  "F7",
  "G7",
  "H7",
  "I7",
  "J7",
  "A7",
  "B7",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "H4",
  "I4",
  "A4",
  "B4",
  "C6",
  "D6",
  "E6",
  "F6",
  "G6",
  "A6",
  "B6",
];

const Keyboard = () => {
  return (
    <div className="keyboard">
      {keys_list.map((item, index) => {
        return item === "P" || item === "L" ? (
          <>
            <Keys
              text={item}
              value={values_list[index]}
              key={item}
              keys_list={keys_list}
              values_list={values_list}
            />
            <br></br>
          </>
        ) : (
          <Keys
            text={item}
            value={values_list[index]}
            key={item}
            keys_list={keys_list}
            values_list={values_list}
          />
        );
      })}
    </div>
  );
};
export default Keyboard;
