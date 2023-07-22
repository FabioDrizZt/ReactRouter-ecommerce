import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useDatosProductos } from "../componentes/Context";

// eslint-disable-next-line react/prop-types
const Shop = () => {
  const { datos } = useDatosProductos();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Tienda</h2>
      <p style={styles.description}>
        Aquí puedes ver todos nuestros productos disponibles.
      </p>
      {/* Renderizar la lista de productos */}
      <Outlet />
      {datos?.map((item) => (
        <Link key={item.id} to={"/shop/" + item.id}>
          <li>{item.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default Shop;

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "16px",
  },
};
