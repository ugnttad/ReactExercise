import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: "#23272f", color: "#fff", padding: "18px 32px", fontSize: 20 }}>
      <span style={{ marginRight: 24, fontWeight: 700 }}>Quiz App</span>
      <NavLink to="/" style={{ marginRight: 16, color: "#fff", textDecoration: "none" }}>Home</NavLink>
      <NavLink to="/quiz" style={{ marginRight: 16, color: "#fff", textDecoration: "none" }}>Quiz</NavLink>
      <NavLink to="/quiz/review" style={{ marginRight: 16, color: "#fff", textDecoration: "none" }}>Quiz Review</NavLink>
      <NavLink to="/quiz/result" style={{ color: "#fff", textDecoration: "none" }}>Result</NavLink>
    </nav>
  );
}
