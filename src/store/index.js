import React from "react";

//!Merkezi state oluşturuldu.
const Store = React.createContext();

Store.displayName = "Store";

//!Merkezi statein diğer componentlerde kullanılmasını kolaylaştırmak için tanımladık
export const useStore = () => React.useContext(Store);
