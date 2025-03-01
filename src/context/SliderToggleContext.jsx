import React, { createContext, useContext, useState } from "react";

const SliderToggleContext = createContext();

export default function SliderToggleProvider({ children }) {
  const [show, setShow] = useState(true);

  const handleToggle = setShow;
  return (
    <SliderToggleContext.Provider value={{ show, handleToggle }}>
      {children}
    </SliderToggleContext.Provider>
  );
}

function useSliderToggle() {
  const context = useContext(SliderToggleContext);
  if (context === undefined) {
    throw new Error(
      "useSliderToggle must be used within a SliderToggleProvider"
    );
  }
  return context;
}
export { useSliderToggle };
