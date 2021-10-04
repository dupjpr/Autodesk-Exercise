import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store'

import Footer from "../../components/UI Library/footer/Footer";

const MockFooter = ({ component }) => {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  );
}

export default MockFooter;

describe('<footer>', () => {

  it('should display the title of number of positive cases on EEUU', async () => {
    render(<MockFooter component={<Footer />} />);
    const selectElement = screen.getByText("Code by Juan Pablo from Globant");
    expect(selectElement).toBeInTheDocument();
  })

});
