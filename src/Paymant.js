import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Paymant.css";
import { useStateValue } from "./StateProvider";

function Paymant() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="paymant">
      <div className="paymant__container">
        <h1>
          {" "}
          Checkout ({<Link to="/checkout"> {basket?.length} items</Link>})
        </h1>
        <div className="paymant__section">
          <div className="paymant__title">
            <h3> Delivery Adress</h3>
          </div>
          <div className="paymant__adress">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="paymant__section">
          <div className="paymant__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="paymant__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="paymant__section">
          <div className="paymant__title">
            <h3>Paymant Method</h3>
          </div>
          <div className="paymant__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Paymant;
