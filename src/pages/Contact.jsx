const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contacto</h2>
      <p style={styles.description}>Ponte en contacto con nosotros para cualquier consulta o información adicional.</p>
      {/* Agregar formulario de contacto */}
    </div>
  );
};

export default Contact;

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
  },
};