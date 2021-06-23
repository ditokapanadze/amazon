import { stringify } from "uuid";

export const initialState = {
  basket: [],
  user: null,
};

// ბასკეტში დამატებული პროდუქტის მთლიანი ფასი
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CART":
      return{
        ...state, basket: JSON.parse(localStorage.getItem("cart"))
      }
    case "ADD_TO_BASKET":
      console.log("test");
      console.log(action.item);
     localStorage.setItem("cart", JSON.stringify(action.item))
     return {
        ...state,
        basket: action.item,
      };
    case "REMOVE_FROM_BASKET":
      // ორჯერ თუა დამატებული ერთი და იგივე პროდუქტი, ერთი უნდა წაშალოს, ამიტომ ფილტრის მაგივრად ინდექსი უნდა ვიპვოთ და პირველი წავშალოთ მარტო
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove prodict (id ${action.id}) as its not in basket`
        );
      }
      localStorage.setItem("cart", JSON.stringify(newBasket))
      return {
        ...state,
        basket: newBasket ,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
