import {
  TAB_SELECT,
  INPUT_SEARCH,
  SUBMIT_FORM, 
  TABLE_INFO
} from '../../utilities/constants';

const actions = {
  tabSelect: (data) => ({
    type: TAB_SELECT,
    payload: data
  }),
  inputText: (data) => ({
    type: INPUT_SEARCH,
    payload: data
  }),
  submitForm: (data) => ({
    type: SUBMIT_FORM,
    payload: data
  }),
  table: (data) => ({
    type: TABLE_INFO,
    payload: data
  })
}

const { tabSelect, inputText, submitForm, table } = actions;

const tabActions = (selectTab) => {
  return dispatch => {
    dispatch(tabSelect(selectTab))
  }
}

const inputSearch = (textInput) => {
  return dispatch => {
    dispatch(inputText(textInput))
  }
}

const submitInput = (submitData) => {
  return dispatch => {
    dispatch(submitForm(submitData))
  }
}

const displayTable = (dataTable) => {
  return dispatch => {
    dispatch(table(dataTable))
  }
}
export { tabActions, inputSearch, submitInput, displayTable };
