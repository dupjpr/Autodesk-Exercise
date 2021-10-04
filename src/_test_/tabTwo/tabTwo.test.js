import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import TabTwo from "../../components/home/displayTabTwo/TabTwo";

const MockTabTwo = ({ component }) => {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  )
};

describe('<TabTwo>', () => {

  test('should render this is the tab two', () => {
    render(<MockTabTwo component={<TabTwo />} />);
    const element = screen.getByText('this is the tab two');
    expect(element).toBeInTheDocument();
  })


});
