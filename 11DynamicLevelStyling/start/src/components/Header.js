import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        alt="kodego logo"
      />
      <a href="/">Home</a>
    </header>
  );
};
