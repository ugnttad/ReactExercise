import React from "react";
import MyAdvancedForm from "./components/MyAdvancedForm";

const App = () => {
  // Hàm xử lý khi form được submit
  const handleAdvancedFormSubmit = (formData) => {
    console.log("=== THÔNG TIN ĐĂNG KÝ ===");
    console.log("Tên:", formData.name);
    console.log("Tuổi:", formData.age);
    console.log("Email:", formData.email);
    console.log("Số điện thoại:", formData.phone);
    console.log("Giới tính:", formData.gender);
    console.log("Đồng ý điều khoản:", formData.agreeTerms);
    console.log("========================");

    // Tạo thông báo chi tiết
    const message = `
 ĐĂNG KÝ THÀNH CÔNG! 

  Thông tin đã đăng ký:
  Tên: ${formData.name}
  Tuổi: ${formData.age}
  Email: ${formData.email}
  Số điện thoại: ${formData.phone}
  Giới tính: ${formData.gender}
  Đã đồng ý điều khoản

Cảm ơn bạn đã đăng ký!
    `;

    alert(message);
  };

  return (
    <div className="App">
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        padding: '20px 0'
      }}>
        <MyAdvancedForm
          title="Đăng Ký Người Dùng"
          onSubmit={handleAdvancedFormSubmit}
          showSuccessMessage={true}
          resetAfterSubmit={true}
        />
      </div>
    </div>
  );
};

export default App;