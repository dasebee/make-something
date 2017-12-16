import * as actions from '../actions/calculatorActions';

const initialState = {
  result: -1,
  excuteArr: []
}

export default function(state=initialState,action) {
    switch (action.type){
        default: return state;
    }
}
