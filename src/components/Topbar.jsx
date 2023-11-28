import { BellIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between m-5">
      <h1 className="text-2xl">Dashboard / Producer</h1>
      <div className="flex items-center gap-8">
        <BellIcon className="w-5 h-5" />
        <p>Hi, Jane Doe</p>
        <img
          src="src\assets\hero.png"
          alt="profile"
          className=" w-10 rounded-full border"
        />
      </div>
    </div>
  );
};

export default TopBar;
