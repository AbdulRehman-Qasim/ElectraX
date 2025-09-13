export default function Hero() {
  const styles = {
    hero: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px 40px",
      background: "#f9f9f9",
    },
    heroText: {
      maxWidth: "600px",
      textAlign: "center",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    span: {
      color: "#1E40AF",
    },
    paragraph: {
      fontSize: "18px",
      color: "#555",
      marginBottom: "30px",
    },
    heroBtn: {
      background: "#1E40AF",
      color: "#fff",
      padding: "12px 24px",
      borderRadius: "6px",
      textDecoration: "none",
      fontSize: "16px",
      transition: "background 0.3s",
    },
    heroImg: {
      maxWidth: "400px",
      marginTop: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.heroText}>
        <h1 style={styles.heading}>
          Welcome to <span style={styles.span}>ElectraX</span>
        </h1>
        <p style={styles.paragraph}>
          A modern platform designed for UK professionals to streamline
          compliance, calculations, and more.
        </p>
        <a href="/signup" style={styles.heroBtn}>Get Started for Free</a>
      </div>

      <div>
        <img
          src="/assets/landing-image.png"
          alt="ElectraX preview"
          style={styles.heroImg}
        />
      </div>
    </section>
  );
}
