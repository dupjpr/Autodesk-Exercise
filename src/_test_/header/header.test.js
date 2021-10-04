import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store'

import Header from "../../components/UI Library/header/Header";



const MockHeader = ({ component }) => {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  );
}

export default MockHeader;

describe('<header>', () => {

  it('should display the title of the autodesk app', () => {
    render(<MockHeader component={
      <Header />
    } />);
    const selectElement = screen.getByRole('heading', { name: 'Autodesk App 5' });
    expect(selectElement).toBeInTheDocument();
  });

  it('should display the container header', () => {
    render(<MockHeader component={
      <Header />
    } />);
    const selectElement = screen.getByTestId('header-test');
    expect(selectElement).toHaveTextContent('Autodesk App 5');
  });

  it('should display the value of header', () => {
    render(<MockHeader component={
      <Header />
    } />);
    const selectElement = screen.getByTestId('header-test');
    expect(selectElement.textContent).toBe("Autodesk App 5");
  })

});
