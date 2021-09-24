import { useDispatch, useSelector } from "react-redux";

const Utilities = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { searchInput } = storeData;

  function handleChange(e) {

    const target = e.target;

    console.log(target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log('sending');
  }

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