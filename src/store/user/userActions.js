//!User ile alakalı statei değiştirecek metodlar tanımlanır
import { types } from "../types";

//!Userin basarılı sekilde giriş yapması durumunda çağrılır
export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
//!Userin basarılı giriş yapılmmaması durumunda çağrılır

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});
//!Userin basarılı sekilde çıkış yapması durumunda çağrılır

export const logout = () => ({
  type: types.LOGOUT,
});
