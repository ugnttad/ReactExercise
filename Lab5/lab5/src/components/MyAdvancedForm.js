import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";

// Reducer để quản lý trạng thái form
const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
  gender: "",
  agreeTerms: false,
  isSubmitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_CHECKBOX":
      return { ...state, [action.field]: action.checked };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// Component MyAdvancedForm với PropTypes validation
const MyAdvancedForm = ({ title, onSubmit, showSuccessMessage, resetAfterSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      dispatch({ type: "SET_CHECKBOX", field: name, checked });
    } else {
      dispatch({ type: "SET_FIELD", field: name, value });
    }

    // Xóa lỗi khi người dùng bắt đầu nhập
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    if (showAlert) {
      setShowAlert(false);
    }
  };

  // Hàm kiểm tra validation chi tiết
  const handleValidation = () => {
    const newErrors = {};

    // Validation cho Tên (3-50 ký tự)
    if (!state.name.trim()) {
      newErrors.name = "Tên không được để trống!";
    } else if (state.name.trim().length < 3) {
      newErrors.name = "Tên phải có ít nhất 3 ký tự!";
    } else if (state.name.trim().length > 50) {
      newErrors.name = "Tên không được quá 50 ký tự!";
    }

    // Validation cho Tuổi (18-100)
    if (!state.age.trim()) {
      newErrors.age = "Tuổi không được để trống!";
    } else {
      const ageNum = parseInt(state.age);
      if (isNaN(ageNum)) {
        newErrors.age = "Tuổi phải là một số!";
      } else if (ageNum < 18) {
        newErrors.age = "Tuổi phải từ 18 đến 100!";
      } else if (ageNum > 100) {
        newErrors.age = "Tuổi phải từ 18 đến 100!";
      }
    }

    // Validation cho Email
    if (!state.email.trim()) {
      newErrors.email = "Email không được để trống!";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.email)) {
        newErrors.email = "Email không đúng định dạng!";
      }
    }

    // Validation cho Số điện thoại (10-15 chữ số)
    if (!state.phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else {
      const phoneRegex = /^\d{10,15}$/;
      if (!phoneRegex.test(state.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Số điện thoại phải có từ 10-15 chữ số!";
      }
    }

    // Validation cho Giới tính
    if (!state.gender) {
      newErrors.gender = "Vui lòng chọn giới tính!";
    }

    // Validation cho Đồng ý điều khoản
    if (!state.agreeTerms) {
      newErrors.agreeTerms = "Bạn phải đồng ý với điều khoản!";
    }

    if (Object.keys(newErrors).length > 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);

      // Reset form sau khi submit nếu được yêu cầu
      if (resetAfterSubmit) {
        setTimeout(() => {
          dispatch({ type: "RESET" });
          setShowAlert(false);
          setErrors({});
        }, 2000);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">{title}</h2>

        {/* Alert lỗi */}
        {showAlert && Object.keys(errors).length > 0 && (
          <div className="alert alert-error">
            <strong>Lỗi:</strong> Vui lòng kiểm tra các trường hợp lỗi.
          </div>
        )}

        {/* Alert thành công */}
        {showSuccessMessage && state.isSubmitted && Object.keys(errors).length === 0 && (
          <div className="alert alert-success">
            <strong>Thành công:</strong> Đăng ký thành công!
          </div>
        )}

        <div className="registration-form">
          {/* Tên */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Tên *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Nhập tên (3-50 ký tự)"
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
            <div className="helper-text">Tên phải có từ 3 đến 50 ký tự</div>
          </div>

          {/* Tuổi */}
          <div className="form-group">
            <label htmlFor="age" className="form-label">Tuổi *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={state.age}
              onChange={handleChange}
              min="18"
              max="100"
              className={`form-input ${errors.age ? 'error' : ''}`}
              placeholder="Nhập tuổi"
            />
            {errors.age && <div className="error-message">{errors.age}</div>}
            <div className="helper-text">Tuổi phải năm trong khoảng từ 18 đến 100</div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Nhập email"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
            <div className="helper-text">Email không được để trống</div>
          </div>

          {/* Số điện thoại */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Số điện thoại *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="Nhập số điện thoại (10-15 chữ số)"
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          {/* Giới tính */}
          <div className="form-group">
            <label className="form-label">Giới tính *</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={state.gender === "Nam"}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-text">Nam</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={state.gender === "Nữ"}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-text">Nữ</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Khác"
                  checked={state.gender === "Khác"}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-text">Khác</span>
              </label>
            </div>
            {errors.gender && <div className="error-message">{errors.gender}</div>}
          </div>

          {/* Đồng ý điều khoản */}
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={state.agreeTerms}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-text">Đồng ý với điều khoản *</span>
            </label>
            {errors.agreeTerms && <div className="error-message">{errors.agreeTerms}</div>}
          </div>

          <button type="button" onClick={handleSubmit} className="submit-btn">
            Gửi
          </button>
        </div>
      </div>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .form-wrapper {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 30px;
        }

        .form-title {
          color: #333;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 25px 0;
          text-align: left;
          border-bottom: 2px solid #007bff;
          padding-bottom: 10px;
        }

        .alert {
          padding: 12px 16px;
          margin-bottom: 20px;
          border: 1px solid transparent;
          border-radius: 4px;
          font-size: 14px;
        }

        .alert-error {
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        }

        .alert-success {
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        }

        .registration-form {
          width: 100%;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 6px;
          color: #333;
          font-weight: 500;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        .form-input.error {
          border-color: #dc3545;
          box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
        }

        .form-input::placeholder {
          color: #999;
          opacity: 1;
        }

        .helper-text {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
        }

        .error-message {
          color: #dc3545;
          font-size: 12px;
          margin-top: 4px;
          display: flex;
          align-items: center;
        }

        .error-message:before {
          content: "⚠️";
          margin-right: 4px;
          font-size: 10px;
        }

        .radio-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
        }

        .radio-input {
          margin-right: 8px;
          cursor: pointer;
        }

        .radio-text {
          color: #333;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
        }

        .checkbox-input {
          margin-right: 8px;
          cursor: pointer;
        }

        .checkbox-text {
          color: #333;
        }

        .submit-btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out, transform 0.15s ease-in-out;
          width: auto;
          min-width: 120px;
        }

        .submit-btn:hover {
          background-color: #0056b3;
          transform: translateY(-1px);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .submit-btn:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
        }

        @media (max-width: 600px) {
          .form-container {
            margin: 20px;
            padding: 15px;
          }
          
          .form-wrapper {
            padding: 20px;
          }
          
          .form-title {
            font-size: 20px;
          }

          .radio-group {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

// Định nghĩa PropTypes cho validation
MyAdvancedForm.propTypes = {
  title: PropTypes.string.isRequired, // Tiêu đề form - bắt buộc
  onSubmit: PropTypes.func.isRequired, // Hàm xử lý submit - bắt buộc
  showSuccessMessage: PropTypes.bool, // Hiển thị thông báo thành công - tùy chọn
  resetAfterSubmit: PropTypes.bool, // Reset form sau khi submit - tùy chọn
};

// Giá trị mặc định cho props
MyAdvancedForm.defaultProps = {
  showSuccessMessage: true,
  resetAfterSubmit: true,
};

export default MyAdvancedForm;