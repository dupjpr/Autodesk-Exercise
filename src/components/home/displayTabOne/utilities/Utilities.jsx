import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearch, submitInput, displayTable } from '../../homeActions';

const Utilities = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { dataRequest: { data }, searchInput, submitForm } = storeData;

  // section to handle the form

  function handleChange(e) {
    const target = e.target;
    dispatch(inputSearch(target.value.trim()));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(submitInput(searchInput));
  }

  // section to filter the data to display

  useEffect(() => {

    if (submitForm === '') {
      dispatch(displayTable(data));
    }

    if (submitForm !== '') {

      const newData1 = data.filter((item) => item.city === submitForm);
      if (newData1.length === 0) {
        const newData2 = data.filter((item) => item.rol === submitForm);
        if (newData2.length === 0) {
          const newData3 = data.filter((item) => item.status === submitForm);
          if (newData3.length === 0) {
            console.log('not information');
          } else {
            dispatch(displayTable(newData3));
          }
        } else {
          dispatch(displayTable(newData2));
        }
      } else {
        dispatch(displayTable(newData1));
      }

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitForm]);




  return (
    <div>
      <button> + New User</button>
      <button> Export</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search by city, status, position"
          value={searchInput}
          name='inputOne'
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Search" />

      </form>
    </div>
  );
}

export default Utilities;