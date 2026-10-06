import Link from "next/link";

export default function Navigation() {
  const buttonStyle = {
    backgroundColor: "#0070f3",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    display: "inline-block",
  };

  return (
    <nav style={{ display: "flex", gap: "12px", padding: "16px" }}>
      <Link href="/" style={buttonStyle}>Home</Link>
      <Link href="/about" style={buttonStyle}>About</Link>
      <Link href="/achievements" style={buttonStyle}>Achievements</Link>
      <Link href="/events" style={buttonStyle}>Events</Link>
      <Link href="/contact" style={buttonStyle}>Contact</Link>
    </nav>
  );
}