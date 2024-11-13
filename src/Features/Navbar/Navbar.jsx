import { Buttons } from '../../Components/Buttons';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="Navbar_Container">
        <img src="src/assets/Images/giftPackageImage.jpg" alt="birthday sticker" className="sticker" />
        <div className="buttons">
            <Buttons txt='Home' />
            <Buttons txt='Gallery' />
        </div>
        <div className="avatarIcon">
            <img src="src/assets/Images/contentRightImage.jpg" alt="Mommy avatar" className="avatar" />
        </div>
    </nav>
  )
}
