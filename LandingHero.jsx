export default function LandingHero() {
  return (
    <section style={styles.hero}>
      <h1>AI Career Mentor</h1>
      <p>Your personal AI guide for careers, DSA & growth</p>
      <a href="#chat">
        <button style={styles.btn}>Start Chatting</button>
      </a>
    </section>
  );
}

const styles = {
  hero: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#020617,#0f172a)",
    color: "white",
    textAlign: "center"
  },
  btn: {
    marginTop: 20,
    padding: "12px 24px",
    background: "#6366f1",
    border: "none",
    borderRadius: 8,
    color: "white",
    cursor: "pointer"
  }
};
