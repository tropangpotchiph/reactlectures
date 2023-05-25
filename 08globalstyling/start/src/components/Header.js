import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="kodego logo" />
      <a href="/">Home</a>
    </header>
  );
};
