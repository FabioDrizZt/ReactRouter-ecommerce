import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import { useEffect, useState } from "react";
import Card from "./componentes/Card";

function App() {

  const [datos, setDatos] = useState();
  const url = "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDatos(data.results);
      } catch (err) {
        console.log("error al traer los datos: ", err);
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    console.log(datos);
  },[datos])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/shop" element={<Shop datos={datos}/>}>
            <Route path="/shop/:id" element={<Card datos={datos}/> }/>
          </Route>
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
