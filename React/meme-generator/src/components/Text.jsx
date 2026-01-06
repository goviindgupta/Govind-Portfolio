import React from "react";
import Draggable from "react-draggable";

const Text = () => {
  return (
    <Draggable>
      <div>
        <h1 style={{ cursor: "move" }}>I am a text</h1>
      </div>
    </Draggable>
  );
};

export default Text
