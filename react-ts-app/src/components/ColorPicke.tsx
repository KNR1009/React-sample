import React, { useState } from "react";
import { TwitterPicker } from "react-color";

export const ColorPicker = () => {
  const [hex, setHex] = useState("");
  const handleColorChange = (color: any) => setHex(color.hex);

  console.log(hex);
  return <TwitterPicker color={hex} onChange={handleColorChange} />;
};
