import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Container, Table, Button, Image, Alert } from "react-bootstrap";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useContext(CartContext);
  const [alert, setAlert] = useState(null);

  const handleOrder = () => {
    setAlert({type: "success", msg: "Đặt hàng thành công!"});
    clearCart();
  };

  return (
    <Container className="my-4" style={{maxWidth: 800}}>
      {alert && (
        <Alert
          variant={alert.type}
          onClose={() => setAlert(null)}
          dismissible
          className="position-fixed top-0 end-0 m-4"
          style={{zIndex: 9999, minWidth: 240}}
        >{alert.msg}</Alert>
      )}
      <div className="card shadow rounded-4">
        <div className="card-body">
          <h3 className="text-success mb-4">Giỏ hàng</h3>
          {cart.length === 0 && <Alert variant="secondary" className="text-center">Giỏ hàng trống</Alert>}
          {cart.length > 0 && (
            <>
              <Table hover responsive className="align-middle">
                <thead>
                  <tr>
                    <th>Ảnh</th>
                    <th>Tên món</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id}>
                      <td>
                        <Image src={`/assets/${item.image}`} alt={item.name} width={60} rounded style={{objectFit: 'cover'}} />
                      </td>
                      <td><b>{item.name}</b></td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          className="form-control"
                          style={{width: 60}}
                          onChange={e => updateQuantity(item.id, Number(e.target.value))}
                        />
                      </td>
                      <td>{item.currentPrice}đ</td>
                      <td>
                        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                          <i className="bi bi-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="text-end fw-bold fs-5 text-success mb-3">
                Tổng tiền: {total.toLocaleString()}đ
              </div>
              <div className="d-flex justify-content-end gap-2">
                <Button variant="outline-secondary" onClick={clearCart}>Xoá toàn bộ</Button>
                <Button variant="success" onClick={handleOrder}>
                  <i className="bi bi-bag-check me-2"></i>Đặt hàng
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
export default Cart;
