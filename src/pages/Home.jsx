import { Outlet } from "react-router";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.heading}>Bienvenido a mi eCommerce</h1>
        <p style={styles.description}>
          Explora nuestra amplia selección de productos.
        </p>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
  },
};