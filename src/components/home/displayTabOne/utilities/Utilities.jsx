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

    if (searchInput === '') {
      dispatch(displayTable(data));
    }

    if (searchInput.length > 2) {

      let regex = new RegExp(searchInput, 'gi')

      const newData = data.filter((item) => {

        const rest = item.name.match(regex)
          || item.city.match(regex)
          || item.rol.match(regex)
          || item.status.match(regex);

        if (rest) {
          return item
        }

      })

      dispatch(displayTable(newData));

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div>
      <button> + New User</button>
      <button> Export</button>

      <input
        type="text"
        placeholder="Search by city, status, position"
        value={searchInput}
        name='inputOne'
        onChange={(e) => handleChange(e)}
      />
      <button>Filter</button>


    </div>
  );
}

export default Utilities;