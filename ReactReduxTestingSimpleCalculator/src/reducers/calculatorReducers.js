import * as actions from '../actions/calculatorActions';

const initialState = {
  result: 0
}

export default function(state=initialState,action) {
    switch (action.type){
        default: return state;
    }
}
