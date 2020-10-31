import './header.scss';
import Logo from '../../assets/images/logo.png';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="Test Logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;