import * as TYPE from '../constants/actionType';
import * as API from '../actions/api'

/**
 * @description Handler for itemTextField onChange Event
 * @param component - The component the action is executed
 * @param event - The object for the executed action
 * @param newValue - The new value in the input field
 */
export const itemTextFieldOnChangeHandler = (component, event, newValue) => {
    component.props.dispatch({type: TYPE.ITEM_TEXT_VALUE_CHANGE, itemTextValue: newValue});
}

/**
 * @description Handler for the addButton onClick Event
 * @param component - The component the action is executed
 * @param event - The object for the executed action
 */
export const addButtonOnClickHandler = (component, event) => {
    component.props.dispatch({type: TYPE.ADD_ITEM, text: component.props.itemTextValue});
    component.props.dispatch({type: TYPE.ITEM_TEXT_VALUE_CHANGE, itemTextValue: ""});
}

/**
 * @description Handler for the apiTestButton onClick Event
 * @param component - The component the action is executed
 * @param event - The object for the executed action
 */
export const apiTestButtonOnClickHandler = (component, event) => {
    API.getPostAPI(component);
}