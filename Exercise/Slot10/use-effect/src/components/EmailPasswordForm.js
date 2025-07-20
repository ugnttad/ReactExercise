import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

// Hàm xác thực email
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Hàm xác thực mật khẩu
const validatePassword = (password) => {
    return password.length >= 8;
};

function EmailPasswordForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    // useEffect để xác thực email
    useEffect(() => {
        if (emailTouched) {
            const valid = validateEmail(email);
            setIsEmailValid(valid);
            if (!valid && email.length > 0) {
                setEmailError("Vui lòng nhập một địa chỉ email hợp lệ!");
            } else if (email.length === 0) {
                setEmailError("Email là bắt buộc!");
            } else {
                setEmailError("");
            }
        }
    }, [email, emailTouched]);

    // useEffect để xác thực mật khẩu
    useEffect(() => {
        if (passwordTouched) {
            const valid = validatePassword(password);
            setIsPasswordValid(valid);
            if (!valid && password.length > 0) {
                setPasswordError("Mật khẩu phải có ít nhất 8 ký tự!");
            } else if (password.length === 0) {
                setPasswordError("Mật khẩu là bắt buộc!");
            } else {
                setPasswordError("");
            }
        }
    }, [password, passwordTouched]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!emailTouched) setEmailTouched(true);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (!passwordTouched) setPasswordTouched(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid && email && password) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
            // Reset form
            setEmail("");
            setPassword("");
            setEmailTouched(false);
            setPasswordTouched(false);
        }
    };

    const isFormValid = isEmailValid && isPasswordValid && email.length > 0 && password.length > 0;

    return (
        <Container className="mt-4">
            <h2>Exercise 5: Email & Password Validation</h2>

            {showSuccess && (
                <Alert variant="success">
                    Form đã được gửi thành công!
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email của bạn"
                        value={email}
                        onChange={handleEmailChange}
                        isValid={emailTouched && isEmailValid && email.length > 0}
                        isInvalid={emailTouched && (!isEmailValid || email.length === 0)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {emailError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu của bạn"
                        value={password}
                        onChange={handlePasswordChange}
                        isValid={passwordTouched && isPasswordValid && password.length > 0}
                        isInvalid={passwordTouched && (!isPasswordValid || password.length === 0)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {passwordError}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Mật khẩu phải có ít nhất 8 ký tự.
                    </Form.Text>
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    disabled={!isFormValid}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default EmailPasswordForm;