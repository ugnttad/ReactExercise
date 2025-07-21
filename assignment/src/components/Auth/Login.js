import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

function Login() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }
    const ok = await login(form.username, form.password);
    if (ok) {
      setAlert({type: "success", msg: "Đăng nhập thành công!"});
      setError("");
      setTimeout(() => navigate("/"), 1200);
    } else {
      setError("Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  if (user)
    return (
      <Container className="text-center mt-5" style={{maxWidth: 420}}>
        <Alert variant="success">
          <i className="bi bi-person-circle me-2"></i>
          Đã đăng nhập với tên <b>{user.displayName}</b>
        </Alert>
      </Container>
    );

  return (
    <Form
      className="container card p-5 shadow mt-4 bg-light"
      style={{ maxWidth: 430 }}
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4 text-success text-center">
        <i className="bi bi-person-circle me-2"></i>Đăng nhập
      </h3>
      {alert && (
        <Alert variant={alert.type} onClose={() => setAlert(null)} dismissible>{alert.msg}</Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Tên đăng nhập</Form.Label>
        <Form.Control
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </Form.Group>
      {error && <Alert variant="danger" className="py-2">{error}</Alert>}
      <Button type="submit" variant="success" className="w-100">
        <i className="bi bi-box-arrow-in-right me-2"></i>Đăng nhập
      </Button>
    </Form>
  );
}
export default Login;
