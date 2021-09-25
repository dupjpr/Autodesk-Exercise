import {
  TAB_SELECT,
  INPUT_SEARCH,
  TABLE_INFO,
  MODAL_STATUS,
  MODAL_INPUT, 
  MODAL_SUBMIT 
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
  table: (data) => ({
    type: TABLE_INFO,
    payload: data
  }),
  modal: (boolean) => ({
    type: MODAL_STATUS,
    payload: boolean
  }),
  modalInputUser: (data) => ({
    type: MODAL_INPUT,
    payload: data
  }),
  modalSubmitInfo: (data) => ({
    type: MODAL_SUBMIT,
    payload: data
  })
}

const {
  tabSelect,
  inputText,
  table,
  modal,
  modalInputUser,
  modalSubmitInfo
} = actions;

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

const displayTable = (dataTable) => {
  return dispatch => {
    dispatch(table(dataTable))
  }
}

const modalStatus = (boolean) => {
  return dispatch => {
    dispatch(modal(boolean))
  }
}

const modalInput = (inputUser) => {
  return dispatch => {
    dispatch(modalInputUser(inputUser))
  }
}

const modalSubmit = (data) => {
  return dispatch => {
    dispatch(modalSubmitInfo(data))
  }
}

export {
  tabActions,
  inputSearch,
  displayTable,
  modalStatus,
  modalInput,
  modalSubmit
};
