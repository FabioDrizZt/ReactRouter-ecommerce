import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={styles.header}>
      <img
        src="https://startupeable.com/directorio/wp-content/uploads/2021/03/MercadoLibre_-_Wikipedia.png"
        style={styles.logo}
        alt="logo-ml"
      />
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <Link to="/">
            <li style={styles.navItem}>Home</li>
          </Link>
          <Link to="/shop">
            <li style={styles.navItem}>Shop</li>
          </Link>
          <Link to="/contacto">
            <li style={styles.navItem}>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },
  logo: {
    width: "100px",
    height: "100px",
  },
  nav: {
    marginLeft: "20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "10px",
  },
  navItem: {
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
