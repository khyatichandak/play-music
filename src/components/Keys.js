import React from "react";
import tone from "tone";

const synth = new tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const handleMouseDown = (trigger) => {
  synth.triggerAttack(trigger);
};

const handleMouseKeyUp = () => {
  synth.triggerRelease();
};

const handleKeyDown = (e, keys, values) => {
  e.preventDefault();
  const key_press = String.fromCharCode(e.which);
  const trigger = values[keys.indexOf(key_press)];
  synth.triggerAttack(trigger);
};

const Keys = (props) => {
  return (
    <button
      value={props.value}
      onMouseDown={() => handleMouseDown(props.value)}
      onMouseUp={() => handleMouseKeyUp()}
      onKeyDown={(e) => handleKeyDown(e, props.keys_list, props.values_list)}
      onKeyUp={() => handleMouseKeyUp()}
    >
      {props.text}
    </button>
  );
};

export default Keys;
