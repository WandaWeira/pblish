import { Link } from "react-router-dom";

const CardItem = ({ title, desc, icon, link }) => {
  return (
    // <div className={`p-4 rounded-xl w-1/4 ${color} `}>
    <div className={`p-4 rounded-xl w-1/4 shadow-2xl bg-gray-200`}>
      <Link to={link}>
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold text-customBlack">{title}</h1>
            <h3 className="text-2xl text-customBlack">{desc}</h3>
          </div>
          {icon}
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
