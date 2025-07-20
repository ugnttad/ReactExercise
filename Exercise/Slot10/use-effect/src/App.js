import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Exercise 4: Form validation - ValidatedInput
const ValidatedInput = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Hàm xác thực đầu vào
  const validateInput = (value) => {
    return value.length >= 5;
  };

  // useEffect để thực hiện xác thực mỗi khi giá trị đầu vào thay đổi
  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput);
    
    if (!isValidInput && value.length > 0) {
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự!");
    } else {
      setErrorMessage("");
      setIsValid(value.length === 0 ? true : isValidInput);
    }
  }, [value]);

  return (
    <div className="container mt-4">
      <h3>Exercise 4: Form Validation</h3>
      <div className="mb-3">
        <label htmlFor="validatedInput" className="form-label">Nhập một giá trị</label>
        <input
          type="text"
          className={`form-control ${value.length > 0 ? (isValid ? 'is-valid' : 'is-invalid') : ''}`}
          id="validatedInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập ít nhất 5 ký tự"
        />
        {!isValid && value.length > 0 && (
          <div className="invalid-feedback">
            {errorMessage}
          </div>
        )}
      </div>
      <button 
        className="btn btn-primary" 
        type="submit" 
        disabled={!isValid || value.length === 0}
      >
        Gửi
      </button>
    </div>
  );
};

// Exercise 5: Email và Password validation
const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Hàm validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Hàm validate password
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // useEffect cho email validation
  useEffect(() => {
    if (emailTouched) {
      const isValid = validateEmail(email);
      setEmailValid(isValid);
      setEmailError(isValid ? "" : "Vui lòng nhập địa chỉ email hợp lệ");
    }
  }, [email, emailTouched]);

  // useEffect cho password validation
  useEffect(() => {
    if (passwordTouched) {
      const isValid = validatePassword(password);
      setPasswordValid(isValid);
      setPasswordError(isValid ? "" : "Mật khẩu phải có ít nhất 8 ký tự");
    }
  }, [password, passwordTouched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && email && password) {
      alert("Form submitted successfully!");
    }
  };

  const isFormValid = emailValid && passwordValid && email && password;

  return (
    <div className="container mt-4">
      <h3>Exercise 5: Email & Password Validation</h3>
      <div onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${emailTouched ? (emailValid ? 'is-valid' : 'is-invalid') : ''}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            placeholder="Nhập email của bạn"
          />
          {emailTouched && !emailValid && (
            <div className="invalid-feedback">
              {emailError}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input
            type="password"
            className={`form-control ${passwordTouched ? (passwordValid ? 'is-valid' : 'is-invalid') : ''}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            placeholder="Nhập mật khẩu (ít nhất 8 ký tự)"
          />
          {passwordTouched && !passwordValid && (
            <div className="invalid-feedback">
              {passwordError}
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// Exercise 6: Complete Form with multiple inputs
const CompleteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    agreeTerms: false
  });

  const [validation, setValidation] = useState({
    name: { isValid: true, message: "" },
    gender: { isValid: true, message: "" },
    country: { isValid: true, message: "" },
    agreeTerms: { isValid: true, message: "" }
  });

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agreeTerms: false
  });

  // Validation functions
  const validateName = (name) => name.trim().length >= 2;
  const validateGender = (gender) => gender !== "";
  const validateCountry = (country) => country !== "";
  const validateAgreeTerms = (agree) => agree === true;

  // useEffect for validation
  useEffect(() => {
    const newValidation = { ...validation };

    if (touched.name) {
      newValidation.name.isValid = validateName(formData.name);
      newValidation.name.message = newValidation.name.isValid ? "" : "Tên phải có ít nhất 2 ký tự";
    }

    if (touched.gender) {
      newValidation.gender.isValid = validateGender(formData.gender);
      newValidation.gender.message = newValidation.gender.isValid ? "" : "Vui lòng chọn giới tính";
    }

    if (touched.country) {
      newValidation.country.isValid = validateCountry(formData.country);
      newValidation.country.message = newValidation.country.isValid ? "" : "Vui lòng chọn quốc gia";
    }

    if (touched.agreeTerms) {
      newValidation.agreeTerms.isValid = validateAgreeTerms(formData.agreeTerms);
      newValidation.agreeTerms.message = newValidation.agreeTerms.isValid ? "" : "Bạn phải đồng ý với điều khoản";
    }

    setValidation(newValidation);
  }, [formData, touched]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
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

    const isFormValid = validateName(formData.name) && 
                       validateGender(formData.gender) && 
                       validateCountry(formData.country) && 
                       validateAgreeTerms(formData.agreeTerms);

    if (isFormValid) {
      alert("Form submitted successfully!");
      console.log("Form data:", formData);
    }
  };

  const isFormValid = validation.name.isValid && 
                     validation.gender.isValid && 
                     validation.country.isValid && 
                     validation.agreeTerms.isValid &&
                     formData.name && 
                     formData.gender && 
                     formData.country && 
                     formData.agreeTerms;

  return (
    <div className="container mt-4">
      <h3>Exercise 6: Complete Form Validation</h3>
      <div onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên</label>
          <input
            type="text"
            className={`form-control ${touched.name ? (validation.name.isValid ? 'is-valid' : 'is-invalid') : ''}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => handleBlur('name')}
            placeholder="Nhập tên của bạn"
          />
          {touched.name && !validation.name.isValid && (
            <div className="invalid-feedback">
              {validation.name.message}
            </div>
          )}
        </div>

        {/* Gender Radio Buttons */}
        <div className="mb-3">
          <label className="form-label">Giới tính</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                onBlur={() => handleBlur('gender')}
              />
              <label className="form-check-label" htmlFor="male">Nam</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
                onBlur={() => handleBlur('gender')}
              />
              <label className="form-check-label" htmlFor="female">Nữ</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleInputChange}
                onBlur={() => handleBlur('gender')}
              />
              <label className="form-check-label" htmlFor="other">Khác</label>
            </div>
          </div>
          {touched.gender && !validation.gender.isValid && (
            <div className="text-danger small">
              {validation.gender.message}
            </div>
          )}
        </div>

        {/* Country Dropdown */}
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Quốc gia</label>
          <select
            className={`form-select ${touched.country ? (validation.country.isValid ? 'is-valid' : 'is-invalid') : ''}`}
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            onBlur={() => handleBlur('country')}
          >
            <option value="">Chọn quốc gia</option>
            <option value="vietnam">Việt Nam</option>
            <option value="usa">Hoa Kỳ</option>
            <option value="japan">Nhật Bản</option>
            <option value="korea">Hàn Quốc</option>
            <option value="china">Trung Quốc</option>
          </select>
          {touched.country && !validation.country.isValid && (
            <div className="invalid-feedback">
              {validation.country.message}
            </div>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              onBlur={() => handleBlur('agreeTerms')}
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              Tôi đồng ý với các điều khoản và điều kiện
            </label>
          </div>
          {touched.agreeTerms && !validation.agreeTerms.isValid && (
            <div className="text-danger small">
              {validation.agreeTerms.message}
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="btn btn-success"
          disabled={!isFormValid}
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentExercise, setCurrentExercise] = useState('exercise4');

  const renderCurrentExercise = () => {
    switch(currentExercise) {
      case 'exercise4':
        return <ValidatedInput />;
      case 'exercise5':
        return <EmailPasswordForm />;
      case 'exercise6':
        return <CompleteForm />;
      default:
        return <ValidatedInput />;
    }
  };

  return (
    <div className="App">
      <div className="container mt-3">
        <h1 className="text-center mb-4">UseEffect Form Validation Exercises</h1>
        
        {/* Navigation Buttons */}
        <div className="text-center mb-4">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn ${currentExercise === 'exercise4' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setCurrentExercise('exercise4')}
            >
              Exercise 4
            </button>
            <button
              type="button"
              className={`btn ${currentExercise === 'exercise5' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setCurrentExercise('exercise5')}
            >
              Exercise 5
            </button>
            <button
              type="button"
              className={`btn ${currentExercise === 'exercise6' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setCurrentExercise('exercise6')}
            >
              Exercise 6
            </button>
          </div>
        </div>

        {/* Render Current Exercise */}
        {renderCurrentExercise()}
      </div>
    </div>
  );
};

export default App;