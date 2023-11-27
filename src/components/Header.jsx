import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-10">
      <img src={logo} alt="logo" className="w-28"/>
      <ul className="flex gap-12">
        <li>About us</li>
        <li>Feature</li>
        <li>Help</li>
      </ul>
      <div className="flex gap-12">
        <button className="uppercase">Login</button>
        <button className="uppercase border-blue-600 p-2 border-2 text-blue-600 rounded-3xl">Signup</button>
      </div>
    </div>
  );
};

export default Header;
