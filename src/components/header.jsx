import profile from "../img/logo.webp";

const Header = () => {
  return (
    <div className="flex justify-center">
      <img className="w-28" src={profile} alt="this is log img" />
    </div>
  );
};

export default Header;
