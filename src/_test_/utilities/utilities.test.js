import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import Utilities from "../../components/home/displayTabOne/utilities/Utilities";

const MockTabTwo = ({ component }) => {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  )
};



describe('<Utilities>', () => {

  test('should render a button New User', () => {
    render(<MockTabTwo component={<Utilities />} />);
    const buttonNewUser = screen.getByRole('button', { name: 'New User' })
    expect(buttonNewUser).toBeInTheDocument();
  });

  test('should render an input text', () => {
    render(<MockTabTwo component={<Utilities />} />);
    const inputTextElement = screen.getByPlaceholderText('Search by city, status, position');
    expect(inputTextElement).toBeInTheDocument();
  })

  test('should proces the text input', () => {
    render(<MockTabTwo component={<Utilities />} />);
    const inputTextElement = screen.getByPlaceholderText('Search by city, status, position');
    fireEvent.change(inputTextElement, { target: { value: 'Juan Pablo' } });
    expect(inputTextElement.textContent).toBe('Juan Pablo');
  })


});
