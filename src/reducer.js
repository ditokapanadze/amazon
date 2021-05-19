export const initialState = {
  basket: [],
  user: null,
};
let test = [];
// ბასკეტში დამატებული პროდუქტის მთლიანი ფასი
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
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
      return {
        ...state,
        basket: newBasket,
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
