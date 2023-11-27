import { Link } from "react-router-dom";

const ChooseUser = () => {
  return (
    <>
      <img src="src\assets\logo.png" alt="logo" className="w-32" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl">
          Get Access to songs for Artists
        </h1>
        <h3 className="text-gray-500 mt-4">Tell us who you are</h3>
        <div className="mt-14 flex items-center gap-8">
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.jpg?s=612x612&w=0&k=20&c=9B0-wX2eFo8D4Mwl-Pf135r6EoWINgk8g0zC42He500="
              alt="user"
              className="h-40 w-40 rounded-full"
            />
            <h1 className="text-gray-500 mt-4">Producer</h1>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.jpg?s=612x612&w=0&k=20&c=9B0-wX2eFo8D4Mwl-Pf135r6EoWINgk8g0zC42He500="
              alt="user"
              className="h-40 w-40 rounded-full"
            />
            <h1 className="text-gray-500 mt-4">Artist</h1>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.jpg?s=612x612&w=0&k=20&c=9B0-wX2eFo8D4Mwl-Pf135r6EoWINgk8g0zC42He500="
              alt="user"
              className="h-40 w-40 rounded-full"
            />
            <h1 className="text-gray-500 mt-4">Normal User</h1>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full mt-28">
          <Link to="/register">
            <button className="uppercase bg-sky-600 text-white p-2 rounded-3xl w-60">
              Continue Registration
            </button>
          </Link>
        </div>
        <Link to="/login">
          <p className="text-gray-400 mt-9">Login?</p>
        </Link>
      </div>
    </>
  );
};

export default ChooseUser;
