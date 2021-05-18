import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Paymant.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Paymant() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  let history = useHistory();
  const [clientSecret, setClientSecret] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        paymant_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntenr }) => {
        // paymantInten = paymant confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replaceState("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
    console.log(error);
  };

  useEffect(() => {
    const getCliesntSecret = async () => {
      const response = await axios({
        method: "post",
        // ცენტებში ანგარიშობს და ამიტო ვამრავლებ 100ზე
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getCliesntSecret();
  }, [basket]);

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
          <div className="paymant__details">
            <from onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="paymant__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paymant;
