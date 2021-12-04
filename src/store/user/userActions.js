import { types } from "./types";

//!User ile alakalı statei değiştirecek metodlar tanımlanır
export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const logout = () => ({
  type: types.LOGOUT,
});
