import './header.style.scss';

const Header = ({ number }) => {
  return (
    <header
      className='container-header'
      data-testid="header-test"
    >
      <h1>Autodesk App {5}</h1>

    </header>
  );
}

export default Header;