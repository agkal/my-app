import {call, put, takeLatest, all} from 'redux-saga/effects';
import { sample } from './../services/sample';

function* actionWatcher(){
    yield takeLatest("GET_DATA_SAGA", getData);
    yield takeLatest("GET_ROUTES_PROTECTED", getIsRoutesProtected);
}

function* getData(){

    try{
        const res = yield call(sample.getSample);

        yield put({ type: "SET_DATA_SAGA", payload: res.data });
    }
    catch(e){

        yield put({ type: "SET_DATA_SAGA_ERROR", payload: {error: e} });

    }

}

function* getIsRoutesProtected(isChecked){
        debugger;
        const res = isChecked.isCheckedGlobal;
        debugger;

        yield put({ type: "SET_ROUTES_PROTECTED", isChecked: res });
    

}
//registering watchers
export const rootSaga = function* rootSaga(){
    yield all([actionWatcher()]);
}
