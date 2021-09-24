import {
  TAB_SELECT
} from '../../utilities/constants';

const actions = {
  tabSelect: (data) => ({
    type: TAB_SELECT,
    payload: data
  })
}

const { tabSelect } = actions;

const tabActions = (selectTab) => {
  return dispatch => {
    dispatch(tabSelect(selectTab))

  }
}

export { tabActions };
