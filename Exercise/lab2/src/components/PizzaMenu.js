import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../assets/menu1.jpg";
import img2 from "../assets/menu2.jpg";
import img3 from "../assets/menu3.jpg";
import img4 from "../assets/menu4.jpg";

function PizzaMenu() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      image: img1,
      price: 12.99,
      originalPrice: 16.99,
      onSale: true,
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      image: img2,
      price: 13.99,
    },
    {
      id: 3,
      name: "Hawaiian Pizza",
      image: img3,
      price: 14.99,
      isNew: true,
    },
    {
      id: 4,
      name: "Pesto Pizza",
      image: img4,
      price: 15.99,
      originalPrice: 18.99,
      onSale: true,
    },
  ];

  const handleBuyClick = (pizzaName, price) => {
    alert(`Added ${pizzaName} ($${price}) to cart!`);
  };

  return (
    <div className="row row-cols-lg-4 g-4">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col">
          <div className="card h-100 position-relative bg-white text-dark">
            {pizza.onSale && (
              <span
                className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 px-2 py-1"
                style={{ zIndex: 1 }}
              >
                SALE
              </span>
            )}
            {pizza.isNew && (
              <span
                className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 px-2 py-1"
                style={{ zIndex: 1 }}
              >
                NEW
              </span>
            )}
            <img
              src={pizza.image || "/placeholder.svg"}
              className="card-img-top"
              alt={pizza.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">{pizza.name}</h5>
              <div className="mt-auto">
                <div className="mb-2">
                  {pizza.originalPrice ? (
                    <div>
                      <span className="text-decoration-line-through text-muted me-2">
                        ${pizza.originalPrice.toFixed(2)}
                      </span>
                      <span
                        className="fw-bold fs-5"
                        style={{ color: "orange" }}
                      >
                        ${pizza.price.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="fw-bold fs-5">
                      ${pizza.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <button
                  className="btn btn-dark w-100"
                  onClick={() =>
                    handleBuyClick(pizza.name, pizza.price.toFixed(2))
                  }
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PizzaMenu;
