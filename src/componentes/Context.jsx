import { useState } from "react";
import { createContext, useContext } from "react";

const DatosProductos = createContext();

const Context = ({ children }) => {
  const [datos, setDatos] = useState();

  return (
    <DatosProductos.Provider value={{ datos, setDatos }}>
      {children}
    </DatosProductos.Provider>
  );
};

export default Context;

export const useDatosProductos = () => {
  return useContext(DatosProductos);
};
