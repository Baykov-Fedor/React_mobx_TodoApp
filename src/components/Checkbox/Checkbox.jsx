import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  const label = `${checked ? "Done" : "Undone"}`;
  return (
    <Checkbox checked={checked} onChange={setChecked}>
      {label}
    </Checkbox>
  );
};

export default CheckBox;
