import './styles.scss';
import Logo from '../../assets/images/logo.png';

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Test Logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;