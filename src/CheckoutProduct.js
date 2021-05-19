import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, image, title, rating, price, hideButton }, ref) {
  const [{ basket }, dispatch] = useStateValue();
  const remove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div ref={ref} className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {hideButton ? "" : <button onClick={remove}>Remove from basket</button>}
      </div>
    </div>
  );
}

const testRef = React.forwardRef(CheckoutProduct);
export default testRef;
