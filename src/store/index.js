import React from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";
import "alertifyjs/build/css/alertify.css";
import { reservationReducer } from "./reservation/reservationReduce";
import { reservationInitialState } from "./reservation/reservationInitialState";

/* Merkezi state oluşturuldu */
const Store = React.createContext();
Store.displayName = "Store";

/* Merkezi state in diğer componentlerde kullanılmasını kolaylaştırmak için tanımladık */
export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userState, dispatchUser] = React.useReducer(
    userReducer,
    userInitialState
  );
  const [reservationState, dispatchReservation] = React.useReducer(
    reservationReducer,
    reservationInitialState
  );

  return (
    <Store.Provider
      value={{ userState, dispatchUser, reservationState, dispatchReservation }}
    >
      {children}
    </Store.Provider>
  );
};
