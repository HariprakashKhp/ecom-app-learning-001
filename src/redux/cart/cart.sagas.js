import { all, call, put, takeLatest } from "redux-saga/effects";

import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartAfterSignOut);
}

export function* clearCartAfterSignOut() {
  yield put(clearCart());
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
