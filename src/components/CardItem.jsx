import { Link } from "react-router-dom";

const CardItem = ({ title, desc, icon, link }) => {
  return (
    <div className="p-4 rounded-xl shadow-lg bg-gray-200 w-full sm:w-1/2 lg:w-1/4">
      <Link to={link}>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-xl font-bold text-customBlack">{title}</h1>
            <h3 className="text-xl sm:text-2xl text-customBlack">{desc}</h3>
          </div>
          {icon}
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
