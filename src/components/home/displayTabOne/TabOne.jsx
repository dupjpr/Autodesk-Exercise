import { useSelector } from "react-redux";
import Utilities from "./utilities/Utilities";
import { v4 as uuidv4 } from 'uuid';

import './tabOne.style.scss'

const TabOne = () => {

  const storeData = useSelector(state => state);

  const { dataDisplay, loading } = storeData;

  return (
    <div className='container-tabOne'>
      <Utilities />
      {loading && <div>
        Loading ....
      </div>}
      {dataDisplay && <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>City</th>
            <th>Status</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {dataDisplay.map((item) => <tr key={uuidv4()}>
            <td>{item.name}</td>
            <td>{item.rol}</td>
            <td>{item.city}</td>
            <td>{item.status}</td>
            <td>{item.age}</td>
          </tr>)}
        </tbody>
      </table>}

    </div>
  );
}

export default TabOne;