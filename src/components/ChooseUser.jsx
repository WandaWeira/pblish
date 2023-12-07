import { Link } from "react-router-dom";

const ChooseUser = () => {
  return (
    <>
      <img
        src="src/assets/logo.png"
        alt="logo"
        className="w-24 md:w-32 mx-auto"
      />
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-center text-xl md:text-2xl">
          Get Access to songs for Artists
        </h1>
        <h3 className="text-gray-500 mt-4 text-sm md:text-base">
          Tell us who you are
        </h3>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* User Choice Blocks (Repeated 3 times) */}
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.jpg?s=612x612&w=0&k=20&c=9B0-wX2eFo8D4Mwl-Pf135r6EoWINgk8g0zC42He500="
              alt="user"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full mx-auto"
            />
            <h1 className="text-gray-500 mt-4">Producer</h1>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.jpg?s=612x612&w=0&k=20&c=9B0-wX2eFo8D4Mwl-Pf135r6EoWINgk8g0zC42He500="
              alt="user"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full mx-auto"
            />
            <h1 className="text-gray-500 mt-4">Artist</h1>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.jpg?s=612x612&w=0&k=20&c=9B0-wX2eFo8D4Mwl-Pf135r6EoWINgk8g0zC42He500="
              alt="user"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full mx-auto"
            />
            <h1 className="text-gray-500 mt-4">Other User</h1>
          </div>
          {/* ... Other user choices */}
        </div>
        <div className="flex justify-center items-center w-full h-full mt-14 md:mt-28">
          <Link to="/register">
            <button className="uppercase bg-sky-600 text-white p-2 rounded-3xl w-48 md:w-60">
              Continue Registration
            </button>
          </Link>
        </div>
        <Link to="/login">
          <p className="text-gray-400 mt-6 md:mt-9">Login?</p>
        </Link>
      </div>
    </>
  );
};

export default ChooseUser;
