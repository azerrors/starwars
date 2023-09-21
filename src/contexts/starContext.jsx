
import { createContext, useContext, useReducer } from "react";

const initialState = {
  favouriteData: [],
  isSend: false,
  username: "",
  side: "",
  displaySidebar: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "getFavourite":
      return {
        ...state,
        favouriteData: [...state.favouriteData, action.payload],
        isSend: true,
      };
    case "deleteFavourite":
      return {
        ...state,
        favouriteData: state.favouriteData.filter(
          (data) => data.url !== action.payload,
        ),
        isSend: false,
      };
    case "isSend":
      return {
        ...state,
      };
    case "displaySidebar": {
      return {
        ...state,
        displaySidebar: !state.displaySidebar,
      };
    }
    case "getInfo":
      return {
        ...state,
        username: action.payload.username,
        side: action.payload.side,
      };
    default:
      return {
        ...state,
      };
  }
}

const StarContext = createContext();
function StarProvider({ children }) {
  const [{ username, side, favouriteData, isSend, displaySidebar }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <StarContext.Provider
      value={{
        favouriteData,
        side,
        username,
        isSend,
        displaySidebar,
        dispatch,
      }}
    >
      {children}
    </StarContext.Provider>
  );
}

function useStar() {
  const context = useContext(StarContext);
  if (context === undefined) {
    throw new Error("useStar must be used within a StarProvider");
  }
  return context;
}
export { StarProvider, useStar };
