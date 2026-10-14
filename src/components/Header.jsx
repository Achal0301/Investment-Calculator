import logo from '../assets/moneyBag-logo.png';
import logo1 from "../assets/moneyBagCartoon-logo.png";

export default function Header(){
    return(
        <header id="header">
            <img src={logo1} alt="logo showing money bag" />
            <h1>Investment Calculator</h1>
        </header>
    )
}