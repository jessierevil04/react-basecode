import * as TYPE from '../constants/actionType';

const defaultState = {
    itemTextValue: "",
    itemList: [],
};

const mainReducer = (state = defaultState, action) => { 

    switch (action.type) {
        case TYPE.ITEM_TEXT_VALUE_CHANGE: {
            return {...state, itemTextValue: action.itemTextValue};
        }

        case TYPE.ADD_ITEM:{
          return {...state, itemList: [...state.itemList, {text: action.text}]};
        }

        default: return state;   
    }

}



export default mainReducer;