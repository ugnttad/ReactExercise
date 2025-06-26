import React, { useState, useReducer } from "react";

// Reducer để quản lý trạng thái form
const initialState = {
    name: "",
    email: "",
    password: "",
    isSubmitted: false,
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };
        case "SUBMIT":
            return { ...state, isSubmitted: true };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

// Component MyForm
const MyForm = ({ title, onSubmit }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    // Hàm xử lý thay đổi giá trị input
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });

        // Xóa lỗi khi người dùng bắt đầu nhập
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
        if (showAlert) {
            setShowAlert(false);
        }
    };

    // Hàm kiểm tra lỗi trước khi submit
    const handleValidation = () => {
        const newErrors = {};
        if (!state.name.trim()) newErrors.name = "Tên không được để trống!";
        if (!state.email.trim()) newErrors.email = "Email không được để trống!";
        if (!state.password.trim()) newErrors.password = "Mật khẩu không được để trống!";

        // Kiểm tra format email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (state.email.trim() && !emailRegex.test(state.email)) {
            newErrors.email = "Email không đúng định dạng!";
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
            // Reset form sau khi submit thành công
            setTimeout(() => {
                dispatch({ type: "RESET" });
                setShowAlert(false);
            }, 2000);
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2 className="form-title">{title}</h2>

                {/* Alert lỗi */}
                {showAlert && Object.keys(errors).length > 0 && (
                    <div className="alert alert-error">
                        <strong>Lỗi:</strong> Vui lòng điền đầy đủ thông tin.
                    </div>
                )}

                {/* Alert thành công */}
                {state.isSubmitted && Object.keys(errors).length === 0 && (
                    <div className="alert alert-success">
                        <strong>Thành công:</strong> Đăng ký thành công!
                    </div>
                )}

                <div className="registration-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Tên</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            placeholder="Nhập tên của bạn"
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                            className={`form-input ${errors.email ? 'error' : ''}`}
                            placeholder="Nhập email của bạn"
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={state.password}
                            onChange={handleChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                            className={`form-input ${errors.password ? 'error' : ''}`}
                            placeholder="Nhập mật khẩu"
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>

                    <button type="button" onClick={handleSubmit} className="submit-btn">
                        Submit
                    </button>
                </div>
            </div>

            <style jsx>{`
        .form-container {
          max-width: 500px;
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
        }
      `}</style>
        </div>
    );
};

export default MyForm;