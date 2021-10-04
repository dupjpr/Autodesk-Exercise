import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearch, displayTable, modalStatus } from '../../homeActions';

const Utilities = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { dataRequest: { data }, searchInput, modalState } = storeData;

  // section to handle the form

  function handleChange(e) {
    const target = e.target;
    dispatch(inputSearch(target.value.trim()));
  }

  // section to handle the modal

  function handleClick() {
    dispatch(modalStatus(!modalState));
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
      <button
        onClick={() => handleClick()}
      >
        <i className="fas fa-plus"></i> New User
      </button>
      <button>
        <i className="fas fa-file-export"></i>
        Export
        <i className="fas fa-sort-down"></i>
      </button>

      <input
        type="text"
        placeholder="Search by city, status, position"
        value={searchInput}
        name='inputOne'
        onChange={(e) => handleChange(e)}
      />
      <button><i className="fas fa-filter"></i></button>


    </div>
  );
}

export default Utilities;