import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
import { v4 as uuidv4 } from "uuid";

console.log("test");
function Checkout() {
  const [{ basket, user }, dipsatch] = useStateValue();
console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">your shopping Basket</h2>
          <FlipMove>
            {basket?.map((item) => (
              <CheckoutProduct
                key={uuidv4()}
                image={item.image}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
