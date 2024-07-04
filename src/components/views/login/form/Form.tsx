import React, { useState } from "react";

import Login from "./faces/Login";
import ResetPass from "./faces/ResetPass";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [formState, setFormState] = useState("initial");

  const cardState = (css: string) => {
    setFormState(css);
  };

  return (
    <div className={`container-form-all ${formState}`} id="containerFormAll">
      <ResetPass cardState={setFormState} />
      <Login cardState={cardState} />
    </div>
  );
};

export default Form;
