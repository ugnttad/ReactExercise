import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function CompleteForm() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        country: "",
        agreeTerms: false
    });

    const [touched, setTouched] = useState({
        name: false,
        gender: false,
        country: false,
        agreeTerms: false
    });

    const [errors, setErrors] = useState({
        name: "",
        gender: "",
        country: "",
        agreeTerms: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Hàm validate từng field
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim().length >= 2 ? "" : "Tên phải có ít nhất 2 ký tự!";
            case 'gender':
                return value ? "" : "Vui lòng chọn giới tính!";
            case 'country':
                return value ? "" : "Vui lòng chọn quốc gia!";
            case 'agreeTerms':
                return value ? "" : "Bạn phải đồng ý với điều khoản!";
            default:
                return "";
        }
    };

    // useEffect để validate form mỗi khi dữ liệu thay đổi
    useEffect(() => {
        const newErrors = {};
        let valid = true;

        Object.keys(formData).forEach(key => {
            if (touched[key]) {
                const error = validateField(key, formData[key]);
                newErrors[key] = error;
                if (error) valid = false;
            }
        });

        // Kiểm tra tất cả các field đã được fill
        const allFieldsFilled = Object.keys(formData).every(key => {
            if (key === 'agreeTerms') return formData[key] === true;
            return formData[key] !== "";
        });

        setErrors(newErrors);
        setIsFormValid(valid && allFieldsFilled);
    }, [formData, touched]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Mark field as touched
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            name: true,
            gender: true,
            country: true,
            agreeTerms: true
        });

        if (isFormValid) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);

            // Reset form
            setFormData({
                name: "",
                gender: "",
                country: "",
                agreeTerms: false
            });
            setTouched({
                name: false,
                gender: false,
                country: false,
                agreeTerms: false
            });
        }
    };

    return (
        <Container className="mt-4">
            <h2>Exercise 6: Complete Form Validation</h2>

            {showSuccess && (
                <Alert variant="success">
                    Form đã được gửi thành công! Cảm ơn bạn đã điền thông tin.
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        {/* Textbox - Name */}
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Tên của bạn *</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nhập tên của bạn"
                                value={formData.name}
                                onChange={handleInputChange}
                                isValid={touched.name && !errors.name && formData.name}
                                isInvalid={touched.name && errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Radio Button - Gender */}
                        <Form.Group className="mb-3">
                            <Form.Label>Giới tính *</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Nam"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                    isInvalid={touched.gender && errors.gender}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Nữ"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                    isInvalid={touched.gender && errors.gender}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Khác"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleInputChange}
                                    isInvalid={touched.gender && errors.gender}
                                />
                            </div>
                            {touched.gender && errors.gender && (
                                <div className="text-danger small mt-1">{errors.gender}</div>
                            )}
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        {/* Dropdown - Country */}
                        <Form.Group className="mb-3" controlId="formCountry">
                            <Form.Label>Quốc gia *</Form.Label>
                            <Form.Select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                isValid={touched.country && !errors.country && formData.country}
                                isInvalid={touched.country && errors.country}
                            >
                                <option value="">Chọn quốc gia</option>
                                <option value="vietnam">Việt Nam</option>
                                <option value="usa">Hoa Kỳ</option>
                                <option value="japan">Nhật Bản</option>
                                <option value="korea">Hàn Quốc</option>
                                <option value="china">Trung Quốc</option>
                                <option value="thailand">Thái Lan</option>
                                <option value="singapore">Singapore</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.country}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Checkbox - Terms */}
                        <Form.Group className="mb-3" controlId="formTerms">
                            <Form.Check
                                type="checkbox"
                                name="agreeTerms"
                                label="Tôi đồng ý với các điều khoản và điều kiện *"
                                checked={formData.agreeTerms}
                                onChange={handleInputChange}
                                isValid={touched.agreeTerms && !errors.agreeTerms && formData.agreeTerms}
                                isInvalid={touched.agreeTerms && errors.agreeTerms}
                            />
                            {touched.agreeTerms && errors.agreeTerms && (
                                <div className="text-danger small mt-1">{errors.agreeTerms}</div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid gap-2">
                    <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={!isFormValid}
                    >
                        {isFormValid ? "Gửi thông tin" : "Vui lòng điền đầy đủ thông tin"}
                    </Button>
                </div>

                <div className="mt-3">
                    <small className="text-muted">
                        * Các trường bắt buộc
                    </small>
                </div>
            </Form>
        </Container>
    );
}

export default CompleteForm;