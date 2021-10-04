import { useDispatch } from "react-redux";
import { tabActions } from '../homeActions';

import './tabsButtons.style.scss'

const TabsButtons = () => {

  const dispatch = useDispatch();

  function handleClick(e) {

    const target = e.target;
    const name = target.name;

    if (name === 'optionOne') {
      dispatch(tabActions({ tabOne: true, tabTwo: false }));
    }

    if (name === 'optionTwo') {
      dispatch(tabActions({ tabOne: false, tabTwo: true }));
    }

  }

  return (
    <div className='container-tabsButtons'>
      <button
        onClick={(e) => handleClick(e)}
        name='optionOne'
      >
        Users
      </button>
      <button
        onClick={(e) => handleClick(e)}
        name='optionTwo'
      >
        Teams
      </button>
    </div>
  );
}

export default TabsButtons;