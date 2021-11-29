import { all, fork } from "redux-saga/effects";
import loginSagas from "../views/Login/saga";
import postSagas from "../views/Post/saga";
import tourSagas from "../views/Tour/saga";

export default function* rootSagas() {
    yield all(loginSagas.map((s) => fork(s)));
    yield all(tourSagas.map((s) => fork(s)));
    yield all(postSagas.map((s) => fork(s)));
}