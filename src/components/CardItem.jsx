const CardItem = ({ title, desc, icon, color }) => {
  return (
    <div
      className={`p-4 rounded-xl flex justify-between w-1/4 ${color} `}
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-xl text-customBlack">{title}</h1>
        <h3 className="text-2xl text-customBlack">{desc}</h3>
      </div>
      {icon}
    </div>
  );
};

export default CardItem;
