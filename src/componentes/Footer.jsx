const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px',
  },
  text: {
    fontSize: '14px',
    color: '#666',
  },
};