import React, { useContext } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, isLarge }) {
  const [{ basket }, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* არაის ვქმნით რატინგისგან რო იმდენჯერ დავარენდეროთ რა რიცხვსაც გადმოვცემთ */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img
        // style={isLarge ? { "max-width": 400 } : { "max-width": 200 }}
        src={image}
      />
      <button onClick={addTobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
