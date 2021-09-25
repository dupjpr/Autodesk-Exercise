import { useDispatch, useSelector } from "react-redux";
import { modalInput, modalSubmit } from '../homeActions';


const Modal = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { modalInputs: {
    inputOne,
    inputTwo,
    inputThree,
    inputFour,
    inputFive
  }, modalInputs } = storeData;

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    console.log({ [name]: target.value });
    dispatch(modalInput({ [name]: target.value }))
  }

  function handleSubmit(e) {

    e.preventDefault();
    dispatch(modalSubmit(modalInputs));
    dispatch(modalInput({
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      inputFour: 'Select an option',
      inputFive: 'Select an option'
    }))

  }

  return (
    <div>
      <div>
        <h2>Create a new user</h2>
        <button>X</button>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            name='inputOne'
            value={inputOne}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name='inputTwo'
            value={inputTwo}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name='inputThree'
            value={inputThree}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Position in the company:
          <select
            name='inputFour'
            value={inputFour}
            onChange={(e) => handleChange(e)}
          >
            <option value="Select an option">Select an option</option>
            <option value="Developer">Developer</option>
            <option value="Teacher">Teacher</option>
            <option value="Administrator">Administrator</option>
            <option value="Designer">Designer</option>
            <option value="Investigator">Investigator</option>
            <option value="Accountant">Accountant</option>
          </select>
        </label>
        <label>
          Actual situation:
          <select
            name='inputFive'
            value={inputFive}
            onChange={(e) => handleChange(e)}
          >
            <option value="Select an option">Select an option</option>
            <option value="Active">Active</option>
            <option value="Retired">Retired</option>
          </select>
        </label>
        <div>
          <button>Cancel</button>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
}

export default Modal;