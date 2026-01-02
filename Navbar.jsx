export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>AI Career Mentor 🤖</h2>
      <div style={styles.links}>
        <a style={styles.link}>Home</a>
        <a style={styles.link}>Mentor</a>
        <a style={styles.link}>About</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(12px)",
    background: "rgba(15,23,42,0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    zIndex: 50
  },
  logo: {
    fontWeight: 700,
    color: "#38bdf8"
  },
  links: {
    display: "flex",
    gap: 20
  },
  link: {
    cursor: "pointer",
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: 14
  }
};
