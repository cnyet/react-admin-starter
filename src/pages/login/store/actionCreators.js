import { SetLogin, SetLogout } from './constants';

export const loginAction = {
  type: SetLogin,
  data: true
};

export const logoutAction = {
  type: SetLogout,
  data: false
};